import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Asset, AppLoading } from 'expo';

import FrontPageComponent from './components/FrontPageComponent/FrontPageComponent.js';

let { height, width } = Dimensions.get('window');

const RootNavigator = StackNavigator({
  Home: {
    screen: FrontPageComponent,
    navigationOptions: {
      headerTitle: 'Home'
    },
    drawerStack: { screen: DrawerNavigation }
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
      require('./assets/sheets.png')
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
    return <RootNavigator />;
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
