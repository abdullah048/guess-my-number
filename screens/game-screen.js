import { Alert, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Title from '../components/title'
import Colors from '../utils/colors'
import PrimaryButton from '../components/primary-button'
import { Feather } from '@expo/vector-icons'

const generateRandomNumber = (min, max, exclude) => {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min

  if (randomNumber === exclude) {
    return generateRandomNumber(min, max, exclude)
  } else {
    return randomNumber
  }
}

let minBoundary = 1
let maxBoundary = 100

const GameScreen = ({ selectedNumber, setGameOver, setRoundsNumber }) => {
  const initailGuess = generateRandomNumber(1, 100, selectedNumber)
  const [randomNum, setRandomNum] = useState(initailGuess)
  const [GuessRounds, setGuessRounds] = useState([initailGuess])

  const nextGuessHandler = direction => {
    if (
      (direction === 'lower' && randomNum < selectedNumber) ||
      (direction === 'greater' && randomNum > selectedNumber)
    ) {
      Alert.alert(`Don't lie!`, `You know this is wrong!`, [
        { text: 'Sorry!', style: 'cancel' }
      ])
      return
    }
    if (direction === 'lower') {
      maxBoundary = randomNum
    } else {
      minBoundary = randomNum + 1
    }
    const newRandomNum = generateRandomNumber(
      minBoundary,
      maxBoundary,
      randomNum
    )
    setRandomNum(newRandomNum)
    setGuessRounds(prevState => [newRandomNum, ...prevState])
  }

  useEffect(() => {
    if (randomNum == selectedNumber) {
      setGameOver(true)
      setRoundsNumber(GuessRounds.length)
    }
  }, [randomNum])

  useEffect(() => {
    minBoundary = 1
    maxBoundary = 100
  }, [])

  return (
    <View style={styles.bg}>
      <Title>Opponent's Guess</Title>
      <View style={styles.container}>
        <Text style={styles.text}>{randomNum}</Text>
      </View>
      <View style={styles.card}>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: 30,
            textAlign: 'center'
          }}
        >
          Higher or lower?
        </Text>
        <View style={styles.buttonContainer}>
          <PrimaryButton
            style={styles.button}
            onPress={nextGuessHandler.bind(this, 'greater')}
          >
            <Feather name='plus-circle' size={24} color='white' />
          </PrimaryButton>
          <PrimaryButton
            style={styles.button}
            onPress={nextGuessHandler.bind(this, 'lower')}
          >
            <Feather name='minus-circle' size={24} color='white' />
          </PrimaryButton>
        </View>
      </View>
      <FlatList
        data={GuessRounds}
        renderItem={({ item, index }) => (
          <View style={styles.list}>
            <Text style={styles.listText}>#{GuessRounds.length - index}</Text>
            <Text style={styles.listText}>Opponent's Guess:{item}</Text>
          </View>
        )}
        keyExtractor={item => item}
      />
    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    padding: 24
  },
  container: {
    borderWidth: 3,
    borderColor: Colors.amber,
    padding: 24,
    margin: 30,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: Colors.amber,
    fontWeight: 'bold',
    fontSize: 32
  },
  buttonContainer: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  button: {
    margin: 12,
    borderRadius: 5,
    color: 'white',
    fontSize: 25,
    textAlign: 'center'
  },
  card: {
    backgroundColor: Colors.darkPlump,
    borderRadius: 8,
    paddingTop: 12
  },
  list: {
    backgroundColor: Colors.amber,
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 8,
    borderColor: 'black',
    borderWidth: 1
  },
  listText: {
    color: 'black',
    fontSize: 18,
    textAlign: 'center'
  }
})
