import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';

import { addToDo } from '../actions/Index';

class AddToDo extends Component {
    state = {
        text: ''
    }
    addTodo = (text) => {
        // redux store
        this.props.dispatch(addToDo(text))
        this.setState({ text: '' })
    }

render() {
    return (

        <View style={styles.container}>
            <TextInput
                onChangeText={(text) => this.setState({ text: text })}
                value={this.state.text}
                placeholder='Eg. Walking'
                style={styles.textInput}
            />
            <TouchableOpacity onPress={() => this.addTodo(this.state.text)}>
                <View style={styles.iconAdd}>
                    <Icon name="plus" size={30} color="#900" />
                </View>
            </TouchableOpacity>
        </View>
    );
}
}

export default connect()(AddToDo)

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        margin: 4,

    },
    textInput: {
        borderWidth: 1,
        borderColor: '#f2f2e1',
        backgroundColor: '#eaeaea',
        height: 50,
        flex: 1,
        padding: 5,
        borderRadius: 8,

    },
    iconAdd: {
        paddingHorizontal: 8,

    },
});
