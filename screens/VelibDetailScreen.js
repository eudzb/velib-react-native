import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView from 'react-native-maps';
import VelibProvider from '../provider/Provider';

const VelibDetailScreen = (props) => {
    
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         position : {
    //             coords: {
    //               latitude: 0,
    //               longitude: 0
    //             }
    //         }
    //     }
    // }

    // const velib = this.props.navigation.state.params.velib.fields
    const velib = props.navigation.getParam('velib');
    const stationName = velib.fields.station_name;
    const latitude = velib.fields.geo[0];
    const longitude = velib.fields.geo[1];
    const markers = {
        latitude: latitude,
        longitude: longitude,
    };
    const maj = velib.record_timestamp;

    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
        title: {
            fontSize: 22
        },
        map: {
            flex: 0.9,
        },
        info: {
            padding: 20
        },
        text: {
            paddingTop: 6,
            paddingBottom: 6,
        }
    });
    
    return(
        <View style={styles.container}>
            <MapView style={styles.map}
                initialRegion={{
                latitude: latitude,
                longitude: longitude,
                latitudeDelta: 0.004,
                longitudeDelta: 0.004,
                }}>
                <MapView.Marker coordinate={markers} title={stationName}/>
            </MapView>

            <View style={styles.info}>
                <Text style={styles.text} style={styles.title}>{stationName}</Text>

                <View style={{marginTop: 20}}>
                    <Text style={styles.text}>💳 Carte de crédit : {velib.fields.creditcard === 'yes' ? 'Acceptée' : 'Non acceptée'}</Text>
                    <Text style={styles.text}>🚲 Nombres de Velibs : {velib.fields.nbbike}</Text>
                    <Text style={styles.text}>🗓 Date d'échéance : {velib.fields.duedate}</Text>
                    <Text style={styles.text}>🔒 Code de la station : {velib.fields.station_code}</Text>
                    <Text style={styles.text, {marginTop: 20}}>État de la station : {velib.fields.station_state === 'Operative' ? '🟢' : '🔴'}</Text>
                    <Text style={styles.text}>Dernière mise à jour : {maj.substring(11, 19)}</Text>
                </View>
            </View>
        </View>
    )
}
    
export default VelibDetailScreen;