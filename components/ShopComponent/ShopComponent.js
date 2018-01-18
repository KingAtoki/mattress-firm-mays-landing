import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
  Button
} from 'react-native';

let { height, width } = Dimensions.get('window');

export default class ShopComponent extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      drawerLabel: 'Shop',
      headerLeft: (
        <TouchableWithoutFeedback
          style={{
            height: height * 0.05,
            width: height * 0.05,
            marginLeft: 10
          }}
          onPress={() => params.openMenu()}
        >
          <Image
            style={{
              height: height * 0.05,
              width: height * 0.05,
              marginLeft: 10
            }}
            source={require('../../assets/menu.png')}
          />
        </TouchableWithoutFeedback>
      )
    };
  };
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.props.navigation.setParams({
      openMenu: this.openMenu
    });
  }

  openMenu = () => {
    this.props.navigation.navigate('DrawerOpen');
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TouchableWithoutFeedback
            onPress={() => this.props.navigation.navigate('Mattresses')}
          >
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
