import React from "react";
import { FlatList, Image, StyleSheet } from "react-native";
import { Text, View } from "../Themed";

type StoryProps = {
    uri: string;
    size: number;
    userName?: string;
    data?: any[];
};

export function Story(props: StoryProps) {
    const renderStory = ({ item }: { item: any }) => {
        return (
            <View style={styles.userContainer}>
                <Image source={{ uri: item.uri }}
                    style={[
                        {
                            width: props.size,
                            height: props.size,
                            borderRadius: props.size / 2,
                        },
                        styles.userImage,
                    ]} />
                <Text style={styles.userName}>{item.userName}</Text>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={props.data}
                renderItem={renderStory}
                keyExtractor={(_, index) => index.toString()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    userContainer: {
        marginRight: 15,
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        justifyContent: "center",
        alignItems: "center",
    },
    userName: {
        fontSize: 10,
        color: "gray",
        fontWeight: '400',
    },
    userImage: {
        borderWidth: 2,
        borderColor: "lightgray",
        backgroundColor: "lightgray",
    },
});
