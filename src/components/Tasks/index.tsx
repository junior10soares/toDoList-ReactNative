import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type PropsName = {
    task: string
    onRemove: () => void
}

export function Task({ task, onRemove }: PropsName) {
    return (
        <View style={styles.container} >
            <Text style={styles.containerText}>{task}</Text>
            <TouchableOpacity style={styles.button}>
                <Text onPress={onRemove} style={styles.buttonText}>Remover</Text>
            </TouchableOpacity>
        </View>
    )
}