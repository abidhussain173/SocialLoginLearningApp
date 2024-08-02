import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { bookListStyle } from './BookListStyles'

const BookList = (props: any) => {
    const { item, index, highlightedIndex, searchResults, recognizedText } = props
    return (
        <View style={bookListStyle.cardContainer}>
            <View style={bookListStyle.cardInnerContainer}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", backgroundColor: highlightedIndex === index ? "#ffdbbb" : "white", padding: 10 }}>
                    <Text style={bookListStyle.chapterNumberr}>{item.chapterName}</Text>
                    <Text style={bookListStyle.chapterNumberr}>{item.id}</Text>
                </View>
                {item.topics.map((subItem: any, index: any) => (
                    <View
                        style={{ backgroundColor: "white" }}
                        key={index}
                    >
                        <View style={{ height: 50, backgroundColor: searchResults[0]?.content?.heading === subItem.heading ? "#ffdbbb" : "white" }}>
                            <Text style={bookListStyle.subTitleTxt}>{subItem.heading}</Text>
                        </View>
                        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                            {subItem?.textBody?.split(/\s+/).map((words: any, index: any) => (
                                <View
                                    key={index}
                                    style={{ marginEnd: 4, backgroundColor: recognizedText?.split(/\s+/)[index] === words ? "#ffdbbb" : "white" }}
                                >
                                    <Text style={bookListStyle.totalTxt}>{words}</Text>
                                </View>
                            ))}
                        </View>

                    </View>

                ))}

            </View>

        </View>
    )
}

export default BookList