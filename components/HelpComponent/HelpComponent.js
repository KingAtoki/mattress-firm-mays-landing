import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import { ButtonGroup } from 'react-native-elements';

let { height, width } = Dimensions.get('window');

export default class HelpComponent extends Component {
  constructor() {
    super();
    this.state = {
      selectedComfortIndex: 0,
      selectedMoneyIndex: 0,
      selectedPeopleIndex: 0,
      selectedSizeIndex: 0
    };
  }

  updateComfortIndex = selectedComfortIndex => {
    this.setState({ selectedComfortIndex: selectedComfortIndex });
  };

  updateMoneyIndex = selectedMoneyIndex => {
    this.setState({ selectedMoneyIndex: selectedMoneyIndex });
  };

  updatePeopleIndex = selectedPeopleIndex => {
    this.setState({ selectedPeopleIndex: selectedPeopleIndex });
  };
  updateSizeIndex = selectedSizeIndex => {
    this.setState({ selectedSizeIndex: selectedSizeIndex });
  };

  render() {
    const comfortButtons = ['Soft', 'Medium', 'Firm'];
    const moneyOptions = [
      "I'm on a tight budget.",
      'I can be a little flexible.',
      "You can't put a price on sleep."
    ];
    const numberOfPeople = [
      'Just me.',
      'Me and my partner.',
      'Just for a guest.'
    ];
    const sizes = ['Twin', 'Full', 'Queen', 'King'];
    return (
      <View style={styles.container}>
        <View style={{ marginTop: '5%' }}>
          <Text>What kind of comfort are you looking for?</Text>
        </View>
        <ButtonGroup
          onPress={this.updateComfortIndex}
          selectedIndex={this.state.selectedComfortIndex}
          buttons={comfortButtons}
          containerStyle={{
            height: height * 0.1
          }}
        />
        <View style={{ marginTop: '5%' }}>
          <Text>Who is this for?</Text>
        </View>
        <ButtonGroup
          onPress={this.updatePeopleIndex}
          selectedIndex={this.state.selectedPeopleIndex}
          buttons={numberOfPeople}
          containerStyle={{ height: height * 0.1 }}
        />
        <View style={{ marginTop: '5%' }}>
          <Text>How much did you budget for this purchase?</Text>
        </View>
        <ButtonGroup
          onPress={this.updateMoneyIndex}
          selectedIndex={this.state.selectedMoneyIndex}
          buttons={moneyOptions}
          containerStyle={{ height: height * 0.1 }}
        />
        <View style={{ marginTop: '5%' }}>
          <Text>What size do you need?</Text>
        </View>
        <ButtonGroup
          onPress={this.updateSizeIndex}
          selectedIndex={this.state.selectedSizeIndex}
          buttons={sizes}
          containerStyle={{ height: height * 0.1 }}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log('Done pressed')}
        >
          <Text style={{ color: 'white' }}>Done</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'rgb(0, 122, 255)',
    padding: 10,
    width: 100,
    marginVertical: height * 0.1,
    borderRadius: 90
  }
});
