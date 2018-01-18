import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import { Asset, AppLoading } from 'expo';

import ShopComponent from './components/ShopComponent/ShopComponent';
import MattressComponent from './components/MattressComponent/MattressComponent';
import HelpComponent from './components/HelpComponent/HelpComponent';

let { height, width } = Dimensions.get('window');

const RootNavigator = StackNavigator({
  Home: {
    screen: ShopComponent,
    navigationOptions: {
      headerTitle: (
        <Image
          style={{ height: height * 0.25, width: height * 0.3, marginTop: 3 }}
          source={require('./assets/mfrm.png')}
          resizeMode="contain"
        />
      )
    }
  },
  Mattresses: {
    screen: MattressComponent
    // navigationOptions: {
    //   headerTitle: 'Mattresses'
    // }
  },
  Help: {
    screen: HelpComponent,
    navigationOptions: {
      headerTitle: 'Guide'
    }
  }
});

const MyDrawer = DrawerNavigator({
  Home: {
    screen: RootNavigator
  }
});

export default class App extends React.Component {
  state = {
    isReady: false
  };

  async _cacheResourcesAsync() {
    const images = [
      require('./assets/mattress.png'),
      require('./assets/pillows.png'),
      require('./assets/adjustable-bed.png'),
      require('./assets/bed.png'),
      require('./assets/sheets.png'),
      require('./assets/mfrm.png'),
      require('./assets/menu.png')
    ];

    const cacheImages = images.map(image => {
      return Asset.fromModule(image).downloadAsync();
    });
    return Promise.all(cacheImages);
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._cacheResourcesAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }
    return <MyDrawer />;
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: height * 0.1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
