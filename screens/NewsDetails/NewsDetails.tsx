import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { color } from '../../constants/Colors'

const NewsDetails = ({route}:any) => {
 console.log('route?.params', route?.params)
  return (
    <View style={styles.container}>
      <Text>NewsDetails</Text>
    </View>
  )
}

export default NewsDetails

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:color.background
    }
})