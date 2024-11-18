import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

const RecordButton = ({ title, onPress }) => (
    <View style={styles.button}>
        <Button title={title} onPress={onPress} />
    </View>
);

const styles = StyleSheet.create({
    button: {
        marginVertical: 10,
        width: '80%',
    },
});

export default RecordButton;
