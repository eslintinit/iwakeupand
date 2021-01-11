import React, { Component } from 'react'
import { AppRegistry, StyleSheet, View, SafeAreaView } from 'react-native'
import Grid from './Grid'

export default class App extends Component {
  public render() {
    return (
      <SafeAreaView style={styles.container}>
        <Grid />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
})
