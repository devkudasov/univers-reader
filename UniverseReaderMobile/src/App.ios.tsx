import React, {Component} from 'react';
import {Text, View} from 'react-native';

import styles from './App.styles';

const instructions = 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu';

interface Props {}
export default class App extends Component<Props> {
  componentDidMount(): void {

  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.tsx</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}
