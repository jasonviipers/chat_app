import { Pressable, StyleSheet, ViewStyle } from "react-native";
import { Text, View } from "../Themed";
import { Avatar } from "../ui/Avatar";
import { StatusBadge } from "../ui/StatusBadge";
import { Message, User } from "@/types/types";
import { formatDate } from "@/utils";

interface ChatProps {
    user: User;
    lastMessage: Message;
    style?: ViewStyle;
    status?: boolean;
    badgeStyle?: ViewStyle;
    size: number;
}

export function Chat(props: ChatProps) {
    return (
        <Pressable style={[styles.container, props.style]}>
            <Avatar uri={props.user.image} size={props.size} status={props.user.status !== undefined} />
            <View style={styles.containerList}>
                <View style={styles.row} >
                    <Text style={styles.name}>{props.user.name}</Text>
                    <Text style={styles.time}>{formatDate(props.lastMessage.createdAt)}</Text>
                </View>
                <View>
                    <Text numberOfLines={1} style={styles.msg}>
                        {props.lastMessage.content}
                    </Text>
                    {props.status && <StatusBadge text="2" style={props.badgeStyle} />}
                </View>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
    },
    name: {
        fontSize: 17,
        fontWeight: 'bold',
        marginBottom: 3,
    },
    time: {
        color: 'grey',
    },
    msg: {
        color: 'grey',
    },
    containerList: {
        marginLeft: 10,
        flex: 1,
        justifyContent: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
