import React, { Component } from 'react'
import { Button } from 'react-native';
import tailwind from 'tailwind-rn';

import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native'

class App extends Component {
  state = {
    count: 0
  }

  pressOn = () => {
    return fetch('https://dashboard.icheered.nl/api/on')
      .then((response) => response.json())
      .then((json) => {
        return json.movies;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  pressOff = () => {
    return fetch('https://dashboard.icheered.nl/api/off')
      .then((response) => response.json())
      .then((json) => {
        return json.movies;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={tailwind('bg-green-200 rounded-3xl m-5 w-full h-60 items-center justify-center')} onPress={this.pressOn}>
          <Text style={tailwind('text-black')}>Turn on</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tailwind('bg-red-200 rounded-3xl m-5 w-full h-60 items-center justify-center')} onPress={this.pressOff}>
          <Text style={tailwind('text-black')}>Turn off</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default App;