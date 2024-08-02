import { Platform, StyleSheet } from "react-native";

export const bookListStyle = StyleSheet.create({
    cardContainer: {
        marginTop: 15,
        borderRadius: 4,
        backgroundColor: "white",
        elevation: 4,
        ...Platform.select({
            ios: {
                shadowColor: 'white',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.5,
                shadowRadius: 2,
            },
        }),
    },
    cardInnerContainer: {
        margin: 15
    },

    totalTxt: {
        fontSize: 15,
        color: "black",
        // lineHeight:20,
        textAlign: "justify",
        marginTop: 3

    },
    subTitleTxt: {
        fontSize: 15,
        color: "black",
        lineHeight: 20,
        textAlign: "center",
        marginTop: 15,
        fontWeight: "800",

    },
    chapterNumberr: {
        fontSize: 16,
        color: "black",
        fontWeight: "800",
        textAlign: "justify"

    },

})