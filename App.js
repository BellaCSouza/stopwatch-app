import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      number: 0,
      button: 'GO',
      last: null,
    };

    // variável do timer do relógio
    this.timer = null;

    this.go = this.go.bind(this);
    this.clear = this.clear.bind(this);
  }

  go() {

    if(this.timer != null) {
      // parar o timer
      clearInterval(this.timer);
      this.timer = null;

      this.setState( {button: 'GO'} );
    } else {
      // começa rodar
      this.timer = setInterval( () => {
        this.setState( {number: this.state.number + 0.1} )
      }, 100);

      this.setState( {button: 'BREAK'} );
    }
  }

  clear() {
    if(this.timer != null) {
      //parar timer
      clearInterval(this.timer);
      this.timer = null;
    }

    this.setState({
      last: this.state.number,
      number: 0,
      button: 'GO'
    });
  }

  render() {
    return (
     <View style={styles.container}>
    
        <Image
       source={require('./src/cronometro.png')}
       style={styles.image}
       />

        <Text style={styles.timer}> {this.state.number.toFixed(1)} </Text>

       <View style={styles.areaBtn}>
         <TouchableOpacity style={styles.btn} onPress={this.go} >
           <Text style={styles.textBtn}> {this.state.button} </Text>
         </TouchableOpacity>

         <TouchableOpacity style={styles.btn} onPress={this.clear} >
           <Text style={styles.textBtn}>CLEAR</Text>
         </TouchableOpacity>

        <View style={styles.areaLast}>
          <Text style={styles.textLast}> 
            {this.state.last > 0 ? 'Last time: ' + this.state.last.toFixed(1) : ''}
            </Text>
        </View>

        </View>
      
     </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00aeef',
  },
  timer: {
    marginTop: -160,
    color: '#fff',
    fontSize: 65,
    fontWeight: 'bold'
  },
  areaBtn: {
    flexDirection: 'row',
    marginTop: 100,
    height: 40,
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 40,
    margin: 17,
    borderRadius: 9,
  },
  textBtn: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef',
  },
  areaLast: {
    marginTop: 40,
  },
  textLast: {
    fontSize: 25,
    fontStyle: 'italic',
    color: '#fff',
  }
});

export default App;
