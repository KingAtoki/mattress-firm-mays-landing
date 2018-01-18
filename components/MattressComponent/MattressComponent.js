import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity
} from 'react-native';

let { height, width } = Dimensions.get('window');

export default class MattressComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 25, marginTop: 15 }}>
          Would you like some help?
        </Text>
        <View
          style={{
            flexDirection: 'row'
          }}
        >
          <TouchableOpacity
            style={{
              marginHorizontal: width * 0.2,
              marginVertical: height * 0.25
            }}
            onPress={() => this.props.navigation.navigate('Help')}
          >
            <Image
              style={{
                height: height * 0.1,
                width: height * 0.1
              }}
              source={require('../../assets/thumbs-up.png')}
            />
            <Text>Yes please</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginHorizontal: width * 0.2,
              marginVertical: height * 0.25
            }}
            onPress={() => console.log('pressed no thanks')}
          >
            <Image
              style={{
                height: height * 0.1,
                width: height * 0.1
              }}
              source={require('../../assets/thumbs-down.png')}
            />
            <Text>No thanks</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});
