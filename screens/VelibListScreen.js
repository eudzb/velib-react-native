import React, { useContext } from 'react';
import { StyleSheet, FlatList, Text, TouchableOpacity, View } from 'react-native';
import { VelibContext } from '../App';

const ListScreen = ({navigation}) => {
    const velibs = useContext(VelibContext);

    return (
        <FlatList
        style={styles.container}
        data={velibs.records}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('VelibDetails', {velib: item})}>
                <View style={styles.item}>
                    <Text style={styles.text}>{item.fields.station_name}</Text>
                </View>
            </TouchableOpacity>
          )
         }
        }
        keyExtractor={({recordid}) => recordid}
      />
    );
  }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 20,
   },
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

export default ListScreen;
