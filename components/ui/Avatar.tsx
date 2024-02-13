import React from "react";
import { Image, StyleSheet, ViewStyle } from "react-native";

import { View } from "../Themed";

interface AvatarProps {
    uri: string;
    size: number;
    style?: ViewStyle;
    status?: boolean;
}

export const Avatar: React.FC<AvatarProps> = ({ uri, size, style, status }) => {
    return (
        <View style={[styles.avatar, { width: size, height: size }, style]}>
            <Image source={{ uri }} style={{ width: size, height: size, borderRadius: size }} />
            {status && <View style={styles.badge} />}
        </View>
    );
}

const styles = StyleSheet.create({
    avatar: {
        justifyContent: "center",
        alignItems: "center",
    },
    badge: {
        backgroundColor: "#37D84F",
        borderRadius: 50,
        borderWidth: 1,
        borderColor: "#fff",
        width: 10,
        height: 10,
        position: "absolute",
        right: 5,
        bottom: 0,
    },
});