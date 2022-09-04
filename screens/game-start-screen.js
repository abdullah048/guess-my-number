import { Alert, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import PrimaryButton from '../components/primary-button'
import Colors from '../utils/colors'
import Title from '../components/title'

const GameStartScreen = ({ setSelectedNumber }) => {
  const [numberInput, setNumberInput] = useState('')
  return (
    <View style={styles.outerContainer}>
      <View style={{ marginHorizontal: 23 }}>
        <Title>Guess My Number?</Title>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.text}>Enter a number between 1 & 99</Text>
        <TextInput
          style={styles.input}
          maxLength={2}
          keyboardType='number-pad'
          value={numberInput}
          onChangeText={text => setNumberInput(text)}
          placeholder='0'
          placeholderTextColor={Colors.amber}
        />
        <View style={styles.buttonContainer}>
          <PrimaryButton
            style={styles.button}
            onPress={() => {
              setNumberInput('')
            }}
          >
            Reset
          </PrimaryButton>
          <PrimaryButton
            style={styles.button}
            onPress={() => {
              const number = parseInt(numberInput)
              if (isNaN(number) || number <= 0 || number > 99) {
                Alert.alert(
                  'Invalid number',
                  'Number has to be a number between 1 and 99',
                  [
                    {
                      text: 'Okay',
                      style: 'destructive',
                      onPress: () => setNumberInput('')
                    }
                  ]
                )
                return
              } else {
                setSelectedNumber(numberInput)
              }
            }}
          >
            Confirm
          </PrimaryButton>
        </View>
      </View>
    </View>
  )
}

export default GameStartScreen

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    padding: 16,
    backgroundColor: Colors.darkPlump,
    marginHorizontal: 24,
    borderRadius: 6,
    elevation: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 6,
    shadowOpacity: 0.5
  },
  button: {
    color: 'white'
  },
  input: {
    color: Colors.amber,
    height: 50,
    fontSize: 30,
    alignSelf: 'center',
    fontWeight: 'bold',
    borderBottomColor: Colors.amber,
    borderBottomWidth: 2,
    padding: 5
  },
  buttonContainer: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 7
  },
  outerContainer: {
    marginTop: 100
  }
})
