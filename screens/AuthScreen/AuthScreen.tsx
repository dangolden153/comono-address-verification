import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AuthScreen = () => {
  return (
    <View style={styles.container}>
      <Text>AuthScreen</Text>
    </View>
  )
}

export default AuthScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})