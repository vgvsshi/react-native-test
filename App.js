import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native'
import { Navbar } from './src/Navbar'
import { AddTodo } from './src/AddTodo'
import { Todo } from './src/Todo'

export default function App() {
	const [todos, setTodos] = useState([])

	const addTodo = (title) => {
		// const newTodo = {
		// 	id: Date.now().toString(),
		// 	title
		// }
		// setTodos([...todos, newTodo])
		// setTodos((prevTodos) => {
		// 	return [
		// 		...prevTodos,
		// 		newTodo
		// 	]
		// })
		setTodos(prev => [...prev, {
			id: Date.now().toString(),
			title
		}])
	}

	return (
		<View>
			<Navbar title='Todo App!' />
			<View style={styles.container}>
				<AddTodo onSubmit={addTodo} />
				<FlatList
					keyExtractor={item => item.id}
					data={todos}
					renderItem={({ item }) => (<Todo todo={item} />)}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 30,
		paddingVertical: 20
	}

});
