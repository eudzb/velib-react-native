import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const VelibItemScreen = ({velib, displayDetails}) => {

    const styles = StyleSheet.create({
        item: {
            flex: 1,
            borderWidth: 1,
            padding: 20,
            marginBottom: 10,
            backgroundColor: '#A2B43A',
            borderColor: 'transparent',
            borderRadius: 30,
        },
        text: {
            fontSize: 14,
            color: '#F3EFEF'
        }
    });

    return(
        <TouchableOpacity onPress={() => displayDetails(velib)}>
            <View style={styles.item}>
                <Text style={styles.text}>{velib.fields.station_name}</Text>
            </View>
        </TouchableOpacity>
    )
}
