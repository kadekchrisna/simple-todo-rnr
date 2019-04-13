import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import AddToDo from './containers/AddToDo'
import VisibleToDo from './containers/VisibleToDo'

export default class Main extends Component {
    render() {
        return (

            <View style={styles.container}>
                <AddToDo />
                <View>
                    <VisibleToDo />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
