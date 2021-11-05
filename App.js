import React, { Component, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button, SectionList } from "react-native";
import { StatusBar } from "react"
import { FlatList } from "react-native-gesture-handler";



export default function App() {
    const [userID, setUserID] = useState('');
    const [repositories,getRepositories] = useState({
        data: '',
        loading: true
    })

    

    async function handleClick() {
        const repositories = await axios.get('https://api.github.com/users/' + userID + '/repos');
        getRepositories({
            data: repositories,
            loading: false
        });

    }
    // const Item = ({ repositories }) => (
    //     <View style={styles.greyBox}>
    //       <Text style={styles.inputSection}>{repositories}</Text>
    //     </View>
    // );


    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'First Item',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Second Item',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
        },
      ];
      
      const Item = ({ title }) => (
        <View style={styles.greyBox}>
          <Text style={styles.inputSection}>{title}</Text>
        </View>
      );
      
      const renderItem = ({ item }) => (
        <Item title={item.title} />
      );

    return (
    
        <SafeAreaView style={styles.container}>

        <Text style = {styles.topBox}>Github Viewer</Text>
        <Text style = {styles.inputSection}>github ID:</Text>
        <TextInput 
        placeholder= 'userID'
        style={[{fontSize: 32}]}
        onChangeText={(val) => setUserID(val)}
        />
        <Button
            style = {styles.repoButton}
            onClick= {handleClick}
            title = 'show repositories'>
        </Button>
        <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        /> 
        </SafeAreaView>

    );
  }

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  gitInputId: {
    flexDirection: 'row',
    backgroundColor: "#fff",
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
    borderWidth: 1,
    color: 'black'
  },
  topBox: {
    paddingTop: '5%',
    width: '100%',
    height: '15%',
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'red',
    fontSize: 40,
    },
  repoButton: {
    alignItems: 'flex-start'
    },
  showRepoButton: {
    fontSize: 18,
    color: '#3B39B2'
    },
  greyBox: {
    color: '#999999'
    }

});