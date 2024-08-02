import React, { useRef, useState, useEffect } from 'react';
import { SafeAreaView, View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Voice from '@react-native-voice/voice';
import book from "../ReadBook/Book.json"

const BookListContainer = () => {
    const [results, setResults] = useState([]);
    const flatListRef = useRef<any>();

    useEffect(() => {
        Voice.onSpeechResults = onSpeechResults;
        return () => {
            Voice.destroy().then(Voice.removeAllListeners);
        };
    }, []);

    const onSpeechResults = (e: any) => {
        setResults(e.value);
        searchBook(e.value[0]);
    };

    const startRecognition = async () => {
        try {
            await Voice.start('en-US');
        } catch (e) {
            console.error(e);
        }
    };

    const searchBook = (query: any) => {
        let foundIndex = -1;
        book.chapters.forEach((chapter, chapterIndex) => {
            if (chapter.chapterName.toLowerCase().includes(query.toLowerCase())) {
                foundIndex = chapterIndex;
            }
            chapter.topics.forEach((topic, topicIndex) => {
                if (topic.heading.toLowerCase().includes(query.toLowerCase()) || topic.textBody.toLowerCase().includes(query.toLowerCase())) {
                    foundIndex = chapterIndex;
                }
            });
        });

        if (foundIndex !== -1) {
            flatListRef.current.scrollToIndex({ index: foundIndex, animated: true });
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={startRecognition} style={styles.button}>
                <Text style={styles.buttonText}>Start Voice Search</Text>
            </TouchableOpacity>
            <View style={styles.bookHeading}>
                <Text style={styles.stat}>{book.title}</Text>
            </View>
            <FlatList
                ref={flatListRef}
                data={book.chapters}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View>
                        <Text style={styles.chapterName}>{item.chapterName}</Text>
                        {item.topics.map((topic) => (
                            <View key={topic.heading}>
                                <Text style={styles.topicHeading}>{topic.heading}</Text>
                                <Text style={styles.topicBody}>{topic.textBody}</Text>
                            </View>
                        ))}
                    </View>
                )}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10
    },
    bookHeading: {
        padding: 20,
        backgroundColor: '#f8f8f8',
    },
    stat: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    button: {
        padding: 10,
        backgroundColor: '#007bff',
        alignItems: 'center',
        margin: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    chapterName: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    topicHeading: {
        fontSize: 18,
        marginVertical: 5,
    },
    topicBody: {
        fontSize: 16,
        marginVertical: 5,
    },
});

export default BookListContainer;
