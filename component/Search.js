import { View, TextInput, Button, StyleSheet } from 'react-native'
import React from 'react'

const Search = () => {
  return (
    <View style={styles.main_container}>
      <TextInput placeholder='Titre du film...' style={styles.textinput}/>
      <Button style={{height: 70}} title='Rechercher' onPress={()=>{}}/>
    </View>
  )
}


const styles =StyleSheet.create({
    main_container:{
        marginTop: 20,
        flex: 1,
    },
    textinput:{
        marginLeft: 5,
        marginRigth: 5,
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 5
    }
})
export default Search