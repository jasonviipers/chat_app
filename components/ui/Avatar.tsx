import { Image, StyleSheet, ViewStyle } from "react-native";

import { View } from "../Themed";

type AvatarProps = {
    uri: string;
    size: number;
    style?: ViewStyle;
    status?: boolean;
};

export function Avatar(props: AvatarProps) {
    return (
        <View style={[styles.avatar, props.style]}>
            <Image source={{ uri: props.uri }} style={{ width: props.size, height: props.size, borderRadius: props.size }} />
            {props.status && <View style={styles.badge} />}
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