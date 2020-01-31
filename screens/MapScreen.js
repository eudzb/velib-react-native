import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export default class MapScreen extends React.Component {
  state = {
    location: null,
    errorMessage: null,
  };

  componentDidMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._getLocationAsync();
    }
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }
    
    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location: location })
  }

  render() {
    let text = 'Waiting..';
    let latitude;
    let longitude;
    if (this.state.errorMessage) {
      text = this.state.errorMessage;
    } else if (this.state.location) {
      text = JSON.stringify(this.state.location);
      latitude = this.state.location.coords.latitude;
      longitude = this.state.location.coords.longitude;
    }
    
    const styles = StyleSheet.create({
      container: { flex: 1, backgroundColor: '#fff' },
      map: { flex: 1 }
    });

    return (
      <View style={styles.container}>
          <MapView style={styles.map}
              region={{
              latitude: latitude,
              longitude: longitude,
              latitudeDelta: 0.05,
              longitudeDelta: 0.05,
              }}>
                <MapView.Marker coordinate={{latitude: latitude, longitude: longitude}} title="Vous êtes ici"/>
          </MapView>
      </View>
    );
  }
}
