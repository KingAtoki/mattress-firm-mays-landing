import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  Modal,
  StyleSheet,
  Dimensions
} from 'react-native';
import { ButtonGroup } from 'react-native-elements';

let { height, width } = Dimensions.get('window');

export default class HelpComponent extends Component {
  constructor() {
    super();
    this.state = {
      selectedComfortIndex: 0
    };
  }

  updateIndex = selectedComfortIndex => {
    this.setState({ selectedComfortIndex: selectedComfortIndex });
  };

  render() {
    const comfortButtons = ['Soft', 'Medium', 'Firm'];

    return (
      <ButtonGroup
        onPress={this.updateIndex}
        selectedIndex={this.state.selectedComfortIndex}
        buttons={comfortButtons}
        containerStyle={{ height: height * 0.1 }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
});
