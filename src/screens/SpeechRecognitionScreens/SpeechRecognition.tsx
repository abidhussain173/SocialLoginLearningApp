import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { UserNavigationRootProps } from '../../ScreensTypes/ScreensTpes';
import { Button, SafeAreaView, Text,StyleSheet, View } from 'react-native';

export const SpeechRecognition: React.FC<UserNavigationRootProps<"SpeechRecognition">> = (props) => {
  // const navigation = props.navigation;

 

  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.content}>
      <Text style={styles.title}>Speech Recognition</Text>
      <Text style={styles.description}>
        Use the "Start Listening" button below to navigate through the app using your voice. 
        Simply say the name of the screen you want to go to, and you'll be taken there directly. 
        You can also say "Go back" to return to the previous screen.
      </Text>
    </View>
      <Text style={{
         fontSize: 18,
         color:"black",
         padding:10
      }}>List of screens</Text>
      <Text style={{
         fontSize: 14,
         color:"black",
         marginStart:10
      }}>{"1) Speech Recognition"}</Text>
      <Text style={{
         fontSize: 14,
         color:"black",
         marginStart:10
      }}>{"2) Order"}</Text>
      <Text style={{
         fontSize: 14,
         color:"black",
         marginStart:10
      }}>{"3) Profile"}</Text>
      <Text style={{
         fontSize: 14,
         color:"black",
         marginStart:10
      }}>{"4) Setting"}</Text>
  </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  content: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color:"black",
    marginBottom: 16,
  },
  description: {
    fontSize: 20,
    color: '#666',
  },
});


// import React, { useState, useEffect } from 'react';
// import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
// import Voice, { SpeechResultsEvent, SpeechErrorEvent } from '@react-native-voice/voice';
// import { UserNavigationRootProps } from '../../ScreensTypes/ScreensTpes';

// // Expanded sample book data
// const bookData = {
//   chapters: [
//     {
//       number: 1,
//       pages: [
//         {
//           number: 1,
//           text: "This is the first line of the first page of the first chapter."
//         },
//         {
//           number: 2,
//           text: "This is the first line of the second page of the first chapter."
//         },
//         {
//           number: 3,
//           text: "This is the first line of the third page of the first chapter."
//         },
//       ]
//     },
//     {
//       number: 2,
//       pages: [
//         {
//           number: 1,
//           text: "This is the first line of the first page of the second chapter."
//         },
//         {
//           number: 2,
//           text: "This is the first line of the second page of the second chapter."
//         },
//         {
//           number: 3,
//           text: "This is the first line of the third page of the second chapter."
//         },
//       ]
//     },
//     {
//       number: 3,
//       pages: [
//         {
//           number: 1,
//           text: "This is the first line of the first page of the third chapter."
//         },
//         {
//           number: 2,
//           text: "This is the first line of the second page of the third chapter."
//         },
//         {
//           number: 3,
//           text: "This is the first line of the third page of the third chapter."
//         },
//       ]
//     }
//     // Add more chapters and pages as needed
//   ]
// };


// export const SpeechRecognition: React.FC<UserNavigationRootProps<"SpeechRecognition">> = (props) => {
//     const [recognizedText, setRecognizedText] = useState('');
//     const [searchResults, setSearchResults] = useState<string[]>([]);
  
//     useEffect(() => {
//       Voice.onSpeechResults = onSpeechResults;
//       Voice.onSpeechError = onSpeechError;
  
//       return () => {
//         Voice.destroy().then(Voice.removeAllListeners);
//       };
//     }, []);
  
//     const onSpeechResults = (e: SpeechResultsEvent) => {
//       const text = e.value[0];
//       setRecognizedText(text);
//       searchBook(text);
//     };
  
//     const onSpeechError = (e: SpeechErrorEvent) => {
//       console.error('onSpeechError: ', e.error);
//     };
  
//     const startRecognizing = async () => {
//       setRecognizedText('');
//       setSearchResults([]);
//       try {
//         await Voice.start('en-US');
//       } catch (e) {
//         console.error('Error starting voice recognition: ', e);
//       }
//     };
  
//     const searchBook = (text: string) => {
//       const words = text.split(' ');
//       const chapterNumber = parseInt(words[1]);
//       const pageNumber = parseInt(words[3]);
  
//       const chapter = bookData.chapters.find(ch => ch.number === chapterNumber);
//       if (chapter) {
//         const page = chapter.pages.find(pg => pg.number === pageNumber);
//         if (page) {
//           setSearchResults([page.text]);
//         } else {
//           setSearchResults(["Page not found"]);
//         }
//       } else {
//         setSearchResults(["Chapter not found"]);
//       }
//     };
  
//     return (
//       <View style={styles.container}>
//         <Text style={styles.instructions}>
//           Say "Chapter [number] Page [number]" to search.
//         </Text>
//         <Button title="Start Recognizing" onPress={startRecognizing} />
//         <Text style={styles.stat}>Recognized Text: {recognizedText}</Text>
//         <FlatList
//           data={searchResults}
//           keyExtractor={(item, index) => index.toString()}
//           renderItem={({ item }) => <Text style={styles.result}>{item}</Text>}
//         />
//       </View>
//     );
//   };
//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//       padding: 16,
//     },
//     instructions: {
//       textAlign: 'center',
//       color: '#333333',
//       marginBottom: 5,
//     },
//     stat: {
//       textAlign: 'center',
//       color: '#B0171F',
//       marginBottom: 1,
//     },
//     result: {
//       textAlign: 'center',
//       color: '#333333',
//       marginBottom: 5,
//     },
//   });