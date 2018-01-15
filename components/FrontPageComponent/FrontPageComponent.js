import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
  TouchableWithoutFeedback
} from 'react-native';

let { height, width } = Dimensions.get('window');

export default class FrontPageComponent extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TouchableWithoutFeedback onPress={() => console.log('pressed')}>
            <View style={styles.imageView}>
              <Image
                style={styles.mainImage}
                resizeMode="cover"
                source={require('../../assets/mattress.png')}
              />
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => console.log('pressed')}>
            <View style={styles.imageView}>
              <Image
                style={styles.mainImage}
                resizeMode="cover"
                source={require('../../assets/pillows.png')}
              />
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => console.log('pressed')}>
            <View style={styles.imageView}>
              <Image
                style={styles.mainImage}
                resizeMode="cover"
                source={require('../../assets/adjustable-bed.png')}
              />
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => console.log('pressed')}>
            <View style={styles.imageView}>
              <Image
                style={styles.mainImage}
                resizeMode="cover"
                source={require('../../assets/bed.png')}
              />
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => console.log('pressed')}>
            <View style={styles.imageView}>
              <Image
                style={styles.mainImage}
                resizeMode="cover"
                source={require('../../assets/sheets.png')}
              />
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainImage: {
    width: width,
    height: height * 0.3
  },
  imageView: {
    width: width,
    height: height * 0.3,
    marginVertical: '5%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2
  }
});
