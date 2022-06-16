import React from 'react';
import { View, TextInput, Button, StyleSheet, FlatList, Text } from 'react-native'
import FilmItem from './FilmItem.js';
import films from '../Helpers/filmData.js';

 
const Search = () => {
  return (
    <View style={styles.main_container}>
      <TextInput placeholder='Titre du film...' style={styles.textinput}/>
      <Button title='Rechercher' onPress={()=>{}}/>
      <FlatList
        data={films}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => <FilmItem film={item}/>}
        />

    </View>
  )
}


const styles =StyleSheet.create({
    main_container:{
        marginTop: 40,
        flex: 1,
    },
    textinput:{
        // marginLeft: 5,
        // marginRigth: 5,
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 5
    }
})
export default Search