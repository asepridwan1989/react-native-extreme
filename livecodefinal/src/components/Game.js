import React, { Component} from 'react';
import { View, Text,Button, TouchableHighlight, Alert} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Game extends Component {
  constructor(props) {
    super(props);
    this.touchBoard = this.touchBoard.bind(this)

    this.state = {
      playerTurn : true,
      boardValue : ['o','o','x','o','x','x','o','o','o']
    }
  }

  touchBoard(item) {
    console.log('masuk touchBoard')
  }

  render() {
    return (
      <View>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', marginBottom: 40, marginTop: 40}}>
           <View style={{width: 100, height: 100, backgroundColor: 'powderblue'}} >
             <Text onPress={() => this.touchBoard()}>{this.state.boardValue[0]}</Text>
           </View>
           <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} >
             <Text onPress={() => this.touchBoard()}>{this.state.boardValue[1]}</Text>
           </View>
           <View style={{width: 100, height: 100, backgroundColor: 'steelblue'}} >
             <Text onPress={() => this.touchBoard()}>{this.state.boardValue[2]}</Text>
           </View>
        </View>

        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', marginBottom: 40, marginTop: 40}}>
           <View style={{width: 100, height: 100, backgroundColor: 'powderblue'}} >
             <Text onPress={() => this.touchBoard()}>{this.state.boardValue[3]}</Text>
           </View>
           <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} >
             <Text onPress={() => this.touchBoard()}>{this.state.boardValue[4]}</Text>
           </View>
           <View style={{width: 100, height: 100, backgroundColor: 'steelblue'}} >
             <Text onPress={() => this.touchBoard()}>{this.state.boardValue[5]}</Text>
           </View>
        </View>

        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', marginBottom: 40, marginTop: 40}}>
           <View style={{width: 100, height: 100, backgroundColor: 'powderblue'}} >
             <Text onPress={() => this.touchBoard()}>{this.state.boardValue[6]}</Text>
           </View>
           <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} >
             <Text onPress={() => this.touchBoard()}>{this.state.boardValue[7]}</Text>
           </View>
           <View style={{width: 100, height: 100, backgroundColor: 'steelblue'}} >
             <Text onPress={() => this.touchBoard()}>{this.state.boardValue[8]}</Text>
           </View>
        </View>
        <Button style={ { marginTop: 750  }} onPress={ () => this.props.navigation.navigate('GameOver') } title="GameOver" />
      </View>
    );
  }
}


export default Game
