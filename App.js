// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Platform, StatusBar, Button, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';

export default function App() {
  console.log(StatusBar.currentHeight)
  const [a, setA] = useState('This Is A Text Line');
  const [name, setName] = useState('Anshumant');
  const [people, setPeople] = useState([
    { name: 'shaun', id: 1 },
    { name: 'yoshi', id: 2 },
    { name: 'karan', id: 3 },
    { name: 'pankaj', id: 4 },
    { name: 'sk', id: 5 },
    { name: 'harry', id: 6 },
    { name: 'logan', id: 7 },
  ]);

  const _changeText = () => {
    if (a === 'This Is A Text Line') {
      setA('This Text Was Changed By Pressing On It');
    } else {
      setA('This Is A Text Line');
    }
  }

  const _ChangeName = newName => {
    setName(newName)
  }

  const _deletePeople = id => {
    let list = people.filter(each => {
      return each.id !== id
    })
    setPeople(list);
  }

  let renderPeople = null;
  if (people.length) {
    renderPeople = people.map(each => (
        <View key={each.key} style={styles.item}>
          <Text>I'm {each.name} and my ID is {each.key}</Text>
        </View>
      )
    )
  }

  return (
    <View style={styles.container}>
      <Text>Enter The New Name : </Text>
      <TextInput
        style={styles.input}
        placeholder='e.g. John Doe'
        onChangeText={newName => _ChangeName(newName)} />
      <View>
        <Text>Name is : {name}</Text>
      </View>
      <Text></Text>
      <Text></Text>
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={ ({ item }) => (
          <TouchableOpacity onPress={() => _deletePeople(item.id)}>
            <Text style={styles.item}>I'm {item.name}</Text>
          </TouchableOpacity>
        )}
      />
      {/* <ScrollView>
      <View>
        {renderPeople}
      </View>
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === "android" ? 34 : null
  },
  header: {
    backgroundColor: 'pink',
    padding: 20
  },
  boldText: {
    fontWeight: 'bold'
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200
  },
  item : {
    marginTop: 204,
    padding: 30,
    backgroundColor : 'pink',
    fontSize : 24,
    marginHorizontal : 10,
    marginTop : 24 
  }
});
{/* <StatusBar style="auto" /> */ }
