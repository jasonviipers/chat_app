import { Pressable, StyleSheet, ViewStyle } from "react-native";

import { Calls, User } from "@/types/types";
import { Text, View } from "../Themed";
import { Avatar } from "../ui/Avatar";
import { formatDate } from "@/utils";

interface CallProps {
    user: User;
    lastCall: Calls;
    size: number;
    style?: ViewStyle;
}

export function Call(props: CallProps) {
    if(!props.user || !props.lastCall) return null
    const isUserOnline = props.user.status !== undefined;
    return (
        <Pressable style={[styles.container]}>
            <Avatar uri={props.user.image} size={props.size} status={isUserOnline} />
            <View style={styles.containerList}>
                <View style={styles.row} >
                    <Text style={styles.name}>{props.user.name}</Text>
                    <Text style={styles.time}>{formatDate(props.lastCall.createdAt)}</Text>
                </View>
                <View>
                    <Text numberOfLines={1} style={styles.msg}>
                        {props.lastCall.content}
                    </Text>
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
    }
});