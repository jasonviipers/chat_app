import { StyleSheet, TextInput, ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "../Themed";
import { Icons } from "../Icons";

type InputProps = {
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
    style?: ViewStyle;
    icon?: string;
    type?: 'trigger' | 'notTrigger';
};

export function Input(props: InputProps) {
    return (
        <SafeAreaView edges={['bottom']} style={[styles.container]}>
            <Icons name={'plus'} size={20} color={"black"} />
            <View style={[props.style, styles.InputContainer]} >
                <TextInput
                    style={props.style}
                    placeholder={props.placeholder}
                    value={props.value}
                    onChangeText={props.onChangeText}
                    multiline
                />
                {/* emojis */}
            </View>
            {props.type === "trigger" ? null : (
                <>
                    <Icons name="camera" size={20} color={"black"} style={styles.send} />
                    <Icons name="mic" size={20} color={"black"} style={styles.send} />
                </>
            )}
            {props.type === "trigger" ? (
                <Icons name="send" size={20} color={"black"} style={styles.send} />
            ) : null}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: 'white',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    InputContainer: {
        flex: 1,
        backgroundColor: 'white',
        padding: 5,
        paddingHorizontal: 10,
        marginHorizontal: 10,

        borderRadius: 50,
        borderColor: 'lightgray',
        borderWidth: StyleSheet.hairlineWidth,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    send: {
        padding: 7,
        borderRadius: 15,
        overflow: 'hidden',
        marginLeft: 5,
    },
});