import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import RecordButton from '../components/RecordButton';
import StopButton from '../components/StopRecordButton';

const MainScreen = () => {
    const [recordTitle, setRecordTitle] = useState('Start Recording');
    const [stopTitle, setStopTitle] = useState('Stop Recording');

    const handleRecordStart = () => {
        setRecordTitle('Recording...');
        setTimeout(() => {
            setRecordTitle('Start Recording');
        }, 2000); // Reset title after 2 seconds
    };

    const handleRecordStop = () => {
        setStopTitle('Recording stopping...');
        setTimeout(() => {
            setStopTitle('Stop Recording');
        }, 2000); // Reset title after 2 seconds
    };

    return (
        <View style={styles.container}>
            <RecordButton title={recordTitle} onPress={handleRecordStart} />
            <StopButton title={stopTitle} onPress={handleRecordStop} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
});

export default MainScreen;
