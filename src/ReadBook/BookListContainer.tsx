// import React, { useRef, useState, useEffect } from 'react';
// import { SafeAreaView, View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
// import Voice from '@react-native-voice/voice';
// import book from "../ReadBook/Book.json"

// const BookListContainer = () => {
//     const [results, setResults] = useState([]);
//     const flatListRef = useRef<any>();

//     useEffect(() => {
//         Voice.onSpeechResults = onSpeechResults;
//         return () => {
//             Voice.destroy().then(Voice.removeAllListeners);
//         };
//     }, []);

//     const onSpeechResults = (e: any) => {
//         setResults(e.value);
//         searchBook(e.value[0]);
//     };

//     const startRecognition = async () => {
//         try {
//             await Voice.start('en-US');
//         } catch (e) {
//             console.error(e);
//         }
//     };

//     const searchBook = (query: any) => {
//         let foundIndex = -1;
//         book.chapters.forEach((chapter, chapterIndex) => {
//             if (chapter.chapterName.toLowerCase().includes(query.toLowerCase())) {
//                 foundIndex = chapterIndex;
//             }
//             chapter.topics.forEach((topic, topicIndex) => {
//                 if (topic.heading.toLowerCase().includes(query.toLowerCase()) || topic.textBody.toLowerCase().includes(query.toLowerCase())) {
//                     foundIndex = chapterIndex;
//                 }
//             });
//         });

//         if (foundIndex !== -1) {
//             flatListRef.current.scrollToIndex({ index: foundIndex, animated: true }); 
//         }
//     };

//     return (
//         <SafeAreaView style={styles.container}>
//             <TouchableOpacity onPress={startRecognition} style={styles.button}>
//                 <Text style={styles.buttonText}>Start Voice Search</Text>
//             </TouchableOpacity>
//             <View style={styles.bookHeading}>
//                 <Text style={styles.stat}>{book.title}</Text>
//             </View>
//             <FlatList
//                 ref={flatListRef}
//                 data={book.chapters}
//                 keyExtractor={(item) => item.id.toString()}
//                 renderItem={({ item }) => (
//                     <View>
//                         <Text style={styles.chapterName}>{item.chapterName}</Text>
//                         {item.topics.map((topic) => (
//                             <View key={topic.heading}>
//                                 <Text style={styles.topicHeading}>{topic.heading}</Text>
//                                 <Text style={styles.topicBody}>{topic.textBody}</Text>
//                             </View>
//                         ))}
//                     </View>
//                 )}
//             />
//         </SafeAreaView>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         margin: 10
//     },
//     bookHeading: {
//         padding: 20,
//         backgroundColor: '#f8f8f8',
//     },
//     stat: {
//         fontSize: 24,
//         fontWeight: 'bold',
//     },
//     button: {
//         padding: 10,
//         backgroundColor: '#007bff',
//         alignItems: 'center',
//         margin: 10,
//     },
//     buttonText: {
//         color: '#fff',
//         fontSize: 16,
//     },
//     chapterName: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         marginVertical: 10,
//     },
//     topicHeading: {
//         fontSize: 18,
//         marginVertical: 5,
//     },
//     topicBody: {
//         fontSize: 16,
//         marginVertical: 5,
//     },
// });

// export default BookListContainer;
import React, { useState, useRef } from 'react';
import { View, Text, SectionList, TouchableOpacity, StyleSheet, SectionListRenderItemInfo, SectionListData } from 'react-native';
import Voice, { SpeechResultsEvent } from '@react-native-voice/voice';
import nlp from 'compromise';
import book from "../ReadBook/Book.json";

type Topic = {
    heading: string;
    textBody: string;
};

type Chapter = {
    chapterName: string;
    topics: Topic[];
};

type Book = {
    chapters: Chapter[];
};

const bookData: Book = book;

type HighlightedItem = {
    type: 'chapter' | 'topic' | 'textBody';
    index?: number;
    chapterIndex?: number;
    topicIndex?: number;
    keywords?: string[];
} | null;

type SectionData = Topic & { chapterIndex: number };

const BookListContainer: React.FC = () => {
    const [recognizedText, setRecognizedText] = useState<string>('');
    const [highlightedItem, setHighlightedItem] = useState<HighlightedItem>(null);
    const listRef = useRef<SectionList<SectionData> | null>(null);

    Voice.onSpeechResults = (e: SpeechResultsEvent) => {
        const spokenText = e.value?.[0];
        if (spokenText) {
            setRecognizedText(spokenText);
            handleSpeechRecognition(spokenText);
        }
    };

    const startRecognizing = async () => {
        try {
            await Voice.start('en-US');
        } catch (e) {
            console.error(e);
        }
    };

    const handleSpeechRecognition = (text: string) => {
        const doc = nlp(text);
        const keywords = doc.terms().out('array').map((term: any) => term.toLowerCase());
        let found = false;
        let firstOccurrence: any

        bookData.chapters.forEach((chapter, chapterIndex) => {
            if (!found && keywords.some((keyword: any) => chapter.chapterName.toLowerCase().includes(keyword))) {
                if (!firstOccurrence) firstOccurrence = { chapterIndex };
                setHighlightedItem({ type: 'chapter', index: chapterIndex, keywords });
                found = true;
            }

            if (!found) {
                chapter.topics.forEach((topic, topicIndex) => {
                    if (!found && keywords.some((keyword: any) => topic.heading.toLowerCase().includes(keyword))) {
                        if (!firstOccurrence) firstOccurrence = { chapterIndex, topicIndex };
                        setHighlightedItem({ type: 'topic', chapterIndex, topicIndex, keywords });
                        found = true;
                    }

                    if (!found) {
                        const bodyKeywords = keywords.filter((keyword: any) => topic.textBody.toLowerCase().includes(keyword));
                        if (!found && bodyKeywords.length > 0) {
                            if (!firstOccurrence) firstOccurrence = { chapterIndex, topicIndex };
                            setHighlightedItem({ type: 'textBody', chapterIndex, topicIndex, keywords: bodyKeywords });
                            found = true;
                        }
                    }
                });
            }
        });

        // Scroll to the first occurrence
        if (firstOccurrence) {
            scrollToIndex(firstOccurrence.chapterIndex, firstOccurrence.topicIndex ?? null);
        }

        // Highlight keywords in the entire book
        setHighlightedItem(prevState => ({
            ...prevState,
            type: prevState?.type || 'textBody',
            keywords,
        }));
    };

    const scrollToIndex = (chapterIndex: number, topicIndex: number | null = null) => {
        if (topicIndex === null) {
            listRef.current?.scrollToLocation({ sectionIndex: chapterIndex, itemIndex: 0 });
        } else {
            listRef.current?.scrollToLocation({ sectionIndex: chapterIndex, itemIndex: topicIndex });
        }
    };

    const highlightText = (text: string, keywords: string[]) => {
        const regex = new RegExp(`(${keywords.join('|')})`, 'gi');
        const parts = text.split(regex);
        return parts.map((part, index) =>
            keywords.some(keyword => keyword === part.toLowerCase()) ? (
                <Text key={index} style={styles.highlightedWord}>{part}</Text>
            ) : (
                <Text key={index}>{part}</Text>
            )
        );
    };

    const renderItem = ({ item, index, section }: SectionListRenderItemInfo<SectionData>) => {
        const highlightKeywords = highlightedItem?.keywords || [];

        const highlightedText = highlightKeywords.length > 0 ? highlightText(item.textBody, highlightKeywords) : item.textBody;

        return (
            <View style={[styles.item, highlightedItem?.type === 'topic' && highlightedItem.chapterIndex === section.chapterIndex && highlightedItem.topicIndex === index ? styles.highlight : null]}>
                <Text style={styles.heading}>{highlightText(item.heading, highlightKeywords)}</Text>
                <Text>{highlightedText}</Text>
            </View>
        );
    };

    const renderSectionHeader = ({ section }: { section: SectionListData<SectionData> }) => {
        const highlightKeywords = highlightedItem?.keywords || [];

        return (
            <View style={[styles.header, highlightedItem?.type === 'chapter' && highlightedItem.index === section.chapterIndex ? styles.highlight : null]}>
                <Text style={styles.headerText}>{highlightText(section.chapterName, highlightKeywords)}</Text>
            </View>
        );
    };

    const getItemLayout = (data: SectionData[] | null, index: number) => ({
        length: 100, // Adjust based on your item height
        offset: 100 * index, // Adjust based on your item height
        index,
    });

    const onScrollToIndexFailed = (info: { index: number; highestMeasuredFrameIndex: number; averageItemLength: number; }) => {
        console.warn('Scroll to index failed', info);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={startRecognizing} style={styles.button}>
                <Text>Start Recognizing</Text>
            </TouchableOpacity>
            <SectionList
                ref={listRef}
                sections={bookData.chapters.map((chapter, chapterIndex) => ({
                    ...chapter,
                    data: chapter.topics.map(topic => ({ ...topic, chapterIndex })),
                    chapterIndex,
                }))}
                keyExtractor={(item, index) => item.heading + index}
                renderItem={renderItem}
                renderSectionHeader={renderSectionHeader}
                // getItemLayout={getItemLayout}
                onScrollToIndexFailed={onScrollToIndexFailed}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
    },
    button: {
        padding: 10,
        backgroundColor: '#DDD',
        alignItems: 'center',
        marginBottom: 20,
    },
    header: {
        backgroundColor: '#EEE',
        padding: 10,
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    item: {
        padding: 10,
    },
    heading: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    highlight: {
        backgroundColor: '#FFFF00',
    },
    highlightedWord: {
        backgroundColor: '#FFFF00',
    },
});

export default BookListContainer;