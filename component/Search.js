import { View, TextInput, Button } from 'react-native'
import React from 'react'

const Search = () => {
  return (
    <View>
      <TextInput placeholder='Titre du film...' />
      <Button title='Recherche' onPress={()=>{}}/>
    </View>
  )
}

export default Search