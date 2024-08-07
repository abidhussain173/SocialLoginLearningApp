import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import Voice from '@react-native-voice/voice';
import { UserNavigationRootProps } from '../../ScreensTypes/ScreensTpes';

// Sample book data
const bookData = {
    chapters: [
        {
            number: 1,
            pages: [
                {
                    number: 1,
                    text: "This is the first line of the first page of the first chapter."
                },
                {
                    number: 2,
                    text: "This is the first line of the second page of the first chapter."
                },
                {
                    number: 3,
                    text: "This is the first line of the third page of the first chapter."
                },
            ]
        },
        {
            number: 2,
            pages: [
                {
                    number: 1,
                    text: "This is the first line of the first page of the second chapter."
                },
                {
                    number: 2,
                    text: "This is the first line of the second page of the second chapter."
                },
                {
                    number: 3,
                    text: "This is the first line of the third page of the second chapter."
                },
            ]
        },
        {
            number: 3,
            pages: [
                {
                    number: 1,
                    text: "This is the first line of the first page of the third chapter."
                },
                {
                    number: 2,
                    text: "This is the first line of the second page of the third chapter."
                },
                {
                    number: 3,
                    text: "This is the first line of the third page of the third chapter."
                },
            ]
        }
        // Add more chapters and pages as needed
    ]
};

const HomeScreen: React.FC<UserNavigationRootProps<"Home">> = (props) => {
    const [recognizedText, setRecognizedText] = useState('');
    const [searchResults, setSearchResults] = useState<string[]>([]);

    useEffect(() => {
        Voice.onSpeechResults = onSpeechResults;

        return () => {
            Voice.destroy().then(Voice.removeAllListeners);
        };
    }, []);

    const onSpeechResults = (e: any) => {
        const text = e.value[0];
        setRecognizedText(text);
        searchBook(text);
    };

    const startRecognizing = async () => {
        setRecognizedText('');
        setSearchResults([]);
        try {
            await Voice.start('en-US');
        } catch (e) {
            console.error(e);
        }
    };

    const searchBook = (text: string) => {
        const words = text.split(' ');
        const chapterNumber = parseInt(words[1]);
        const pageNumber = parseInt(words[3]);

        const chapter = bookData.chapters.find(ch => ch.number === chapterNumber);
        if (chapter) {
            const page = chapter.pages.find(pg => pg.number === pageNumber);
            if (page) {
                setSearchResults([page.text]);
            } else {
                setSearchResults(["Page not found"]);
            }
        } else {
            setSearchResults(["Chapter not found"]);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.instructions}>
                Say "Chapter [number] Page [number]" to search.
            </Text>
            <Button title="Start Recognizing" onPress={startRecognizing} />
            <Text style={styles.stat}>Recognized Text: {recognizedText}</Text>
            <FlatList
                data={searchResults}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => <Text style={styles.result}>{item}</Text>}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    stat: {
        textAlign: 'center',
        color: '#B0171F',
        marginBottom: 1,
    },
    result: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

export default HomeScreen;
