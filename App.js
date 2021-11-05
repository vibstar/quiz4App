import React, { Component, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button, SectionList } from "react-native";
import { StatusBar } from "react"
import { FlatList } from "react-native-gesture-handler";



export default function App() {
    const DATA = [
        {
            title: 'Repository 1',
        },
        {
            title: 'Repository 2',
        },
        {
            title: 'Repository 3',
        },
        {
            title: 'Repository 4',
        },
        {
            title: 'Repository 5',
        },
        {
            title: 'Repository 6',
        },
        {
            title: 'Repository 7',
        },
        {
            title: 'Repository 8',
        },
        {
            title: 'Repository 9',
        },
        {
            title: 'Repository 10',
        },
        {
            title: 'Repository 11',
        },
        {
            title: 'Repository 12',
        },
        {
            title: 'Repository 13',
        },
        {
            title: 'Repository 14',
        },
        {
            title: 'Repository 15',
        },
        {
            title: 'Repository 16',
        },
    ];

    const [userID, setUserID] = useState('');
    const [submitted, SetSubmitted] = useState(false);
    const handleClick = () => {
        SetSubmitted(!submitted);
    }
    // const Item = ({ repositories }) => (
    //     <View style={styles.greyBox}>
    //       <Text style={styles.inputSection}>{repositories}</Text>
    //     </View>
    // );






    const Item = ({ title }) => (
        <View style={styles.greyBox}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );


    const renderItem = ({ item }) => (
        <Item title={item.title} />
    );

    return (

        <SafeAreaView style={styles.container}>

            <Text style={styles.topBox}>Github Viewer</Text>
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.inputSection}>github ID:</Text>
                <TextInput
                    placeholder='userID'
                    style={[{ fontSize: 32 }]}
                    onChangeText={(val) => setUserID(val)}
                />
            </View>
            <Button
                style={styles.repoButton, { textAlign: 'left' }}

                onPress={handleClick}
                title={submitted ? 'hide repositories' : 'show repositories'}>
            </Button>
            {submitted ?
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
                :
                null
            }

            <View style={styles.debuggingSection}>
                <Text>DEBUGGING</Text>
                <Text>userID: {userID}</Text>
                {submitted ?
                <Text>showReps: true</Text>
                :
                <Text>showReps: false</Text>
                }
                {submitted ?
                <Text>Repos.length:{DATA.length}</Text>
                :
                <Text>Repos.length:0</Text>
                }
                
            </View>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    gitInputId: {
        flexDirection: 'row',
        direction: 'ltr',
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
        width: 130,
        direction: 'ltr',
        color: 'black'
    },
    debuggingSection: {
        padding: 15,
        fontSize: 18,
        width: 150,
        direction: 'ltr',
        color: 'black'
    },
    topBox: {
        paddingTop: '5%',
        width: '100%',
        height: '10%',
        backgroundColor: '#000',
        textAlign: 'center',
        color: 'red',
        fontSize: 40,
    },
    showRepoButton: {
        fontSize: 18,
        justifyContent: "flex-start",
        textAlign: 'left',
        color: '#007AFF'
    },
    greyBox: {
        backgroundColor: '#808080',
        padding: 15,
        marginVertical: 15,
        marginHorizontal: "5%",
        width: '70%'
    },
    title: {
        fontSize: 24
    }

});