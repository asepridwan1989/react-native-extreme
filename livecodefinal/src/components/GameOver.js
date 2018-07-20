import React, { Component } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return (
      <View>
        <Image
         style={styles.canvas}
         source={{uri: 'http://www.coolmath-games.com/sites/cmatgame/files/tic-tac-toe.png'}}
       />
       <Button
         style={{marginTop:50}}
         title='play again'
         onPress={()=> this.props.navigation.navigate('Game')}
       />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  canvas: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
