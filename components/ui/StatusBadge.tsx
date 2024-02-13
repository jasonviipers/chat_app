import { StyleSheet, ViewStyle } from "react-native";
import { Text, View } from "../Themed";

type StatusBadgeProps = {
    text: string;
    style?: ViewStyle;
};

export function StatusBadge(props: StatusBadgeProps) {
    return (
        <View style={[styles.badge, props.style]}>
            <Text style={styles.badgeText}>{props.text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    badge: {
        backgroundColor: "#703EFF",
        borderRadius: 50,
        width: 20,
        height: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    badgeText: {
        color: "white",
        fontSize: 12,
    },
});