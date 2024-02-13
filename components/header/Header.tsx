import { StyleSheet } from "react-native";
import { Text, View } from "../Themed";
import { Avatar } from "../ui/Avatar";
import { Icons } from "../Icons";

type HeaderProps = {
    uri: string;
    size: number;
};

export function Header(props: HeaderProps) {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Avatar uri={props.uri} size={props.size} />
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>Chats</Text>
            </View>
            <View style={styles.row}>
                <Icons name="edit" color="black" style={styles.Icon} size={20}/>
                <Icons name="edit" color="black" style={styles.Icon} size={20}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
    },
    Icon: {
        marginHorizontal: 5,
        marginVertical: 10,
    },
})