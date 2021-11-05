import React, { Component, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput, SectionList } from "react-native";

const DATA = [
  {
    title: "Github Viewer",
    data: []
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
//const [text, setText] = useState('');



class App extends Component {

  render() {
    return (<>
        <SafeAreaView style={styles.topBox}>
        <Text style = {styles.topText}>Github Viewer</Text>
        </SafeAreaView>
        <SafeAreaView style={styles.gitInputId}>
        <Text style = {styles.inputSection}>github ID:
        
        </Text>
        <TextInput 
        placeholder= 'userID'
        style={[{fontSize: 32}]}
        />
        </SafeAreaView>
        </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: StatusBar.currentHeight,
    alignItems: 'center',
  },
  gitInputId: {
    flexDirection: 'row',
    backgroundColor: "#fff",
    borderWidth: 1,
    padding: 5,
    marginVertical: 5
  },
  header: {
    fontSize: 32,
    color: 'red',
    backgroundColor: "black"
  },
  inputSection: {
    fontSize: 32,
    color: 'black'
  },
  topBox: {
        paddingTop: '5%',
        width: '100%',
        height: '15%',
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },

topText : {
    color: 'red',
    fontSize: 40,
    }
});

export default App;