import { Alert, FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Header } from "../../components/Header";
import { useState } from "react";
import { Task } from "../../components/Tasks";

export function Home() {

    const [task, setTask] = useState<string[]>([])
    const [taskName, setTaskName] = useState('')

    function handleTask() {
        if (taskName.length <= 0) {
            return Alert.alert('Campo vazio', 'Digite algo no campo')
        }
        setTask(prevState => [...prevState, taskName])
        setTaskName('')
    }

    function handleRemoveTask(name: string) {
        Alert.alert('Remover', `Remover o tarefa ${name}?`, [

            {
                text: 'Sim',
                onPress: () => setTask(prevState => prevState.filter(task => task !== name))//deletar task
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
    }

    return (
        <View style={styles.container}>
            <Header />

            <View style={styles.main}>
                <TextInput
                    style={styles.input}
                    onChangeText={setTaskName}
                    value={taskName}
                    placeholder="Adicione uma tarefa"
                    placeholderTextColor='#808080'
                />
                <TouchableOpacity onPress={handleTask} style={styles.inputSome}>
                    <Text>+</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.containerText}>
                <Text style={styles.textFinish}>Criadas {task.length}</Text>
            </View>

            <FlatList
                data={task}
                keyExtractor={task => task}
                renderItem={({ item }) => (

                    <Task
                        key={item}
                        task={item}
                        onRemove={() => handleRemoveTask(item)}
                    />
                )}
                showsHorizontalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <View style={styles.footer}>
                        <Image source={require('../../assets/Clipboard.png')} tintColor='#808080' />
                        <Text style={styles.footerText}>
                            Você ainda não tem tarefas cadastradas
                            Crie tarefas e organize seus itens a fazer
                        </Text>
                    </View>
                )}
            />
        </View>
    )
}