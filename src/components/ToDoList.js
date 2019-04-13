import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ToDoList = ({ todos, toggleToDo }) => (
    <View style={styles.containers}>
        {todos.map(todo =>
            <TouchableOpacity key={todo.id} onPress={() => toggleToDo(todo.id)}>
                <Text style={{ fontSize: 24, textDecorationLine: todo.completed ? 'line-through' : 'none' }}>{todo.text}</Text>
            </TouchableOpacity>
        )}
    </View>
)

export default ToDoList;

const styles = StyleSheet.create({
    containers: {
        padding: 20,
    },
})