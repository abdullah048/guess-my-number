import { StyleSheet, Text } from 'react-native'
import React from 'react'
import Colors from '../utils/colors'

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>
}

export default Title

const styles = StyleSheet.create({
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 34,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'white',
    padding: 12,
    marginTop: 20,
    borderRadius: 5
  }
})
