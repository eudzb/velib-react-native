import React from 'react';
import { View, StyleSheet, Text, Animated, TouchableOpacity } from 'react-native';

export default class Exo1Screen extends React.Component {
  state = {
    bool: true,
    dark: new Animated.Value(.5),
    light: new Animated.Value(.5)
  }

  onPress = (b) => {
    if (b) {
      Animated.timing(this.state.dark, {
        toValue: .8,
        duration: 1000
      }).start();
      Animated.timing(this.state.light, {
        toValue: .2,
        duration: 1000
      }).start();
    } else {
      Animated.timing(this.state.light, {
        toValue: .8,
        duration: 1000
      }).start();
      Animated.timing(this.state.dark, {
        toValue: .2,
        duration: 1000
      }).start();
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={{flex: 1}} onPress={() => this.onPress(this.state.bool = !this.state.bool)}>

          <Animated.View style={{ flex: this.state.dark, backgroundColor: '#353535'}}>
          <View style={{backgroundColor: '#353535'}}>
              <Text style={styles.textLight}>DARK</Text>
            </View>
          </Animated.View>

          <Animated.View onPress={() => this.onPress('light')} style={{ flex: this.state.light, backgroundColor: '#F3EFEF' }}>
            <View style={{backgroundColor: '#F3EFEF'}}>
              <Text style={styles.textDark}>LIGHT</Text>
            </View>
          </Animated.View>
          
        </TouchableOpacity>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgDark: {
    backgroundColor: '#353535',
    justifyContent: 'center',
  },
  textLight: {
    fontSize: 30,
    fontWeight: '700',
    letterSpacing: 8,
    textAlign: 'center',
    color: '#F3EFEF',
    justifyContent: 'center'
  },
  bgLight: {
    backgroundColor: '#F3EFEF',
    justifyContent: 'center',
  },
  textDark: {
    fontSize: 30,
    fontWeight: '700',
    letterSpacing: 8,
    textAlign: 'center',
    color: '#353535',
    justifyContent: 'center'
  },
});
