import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Text, View } from "../Themed";
import { formatDate } from "@/utils";


interface MessageProps {
    message: string;
    createdAt: string;
}

export function Message(props: MessageProps) {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.msg}>{props.message}</Text>
                <Text style={styles.createdAt}>{formatDate(props.createdAt)}</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#703EFF',
        margin: 5,
        padding: 10,
        borderRadius: 10,
        maxWidth: '80%',
        alignSelf: 'flex-start',
    },
    msg: {
        
    },
    createdAt: {
        color: 'grey',
        alignSelf: 'flex-end',

    },
});