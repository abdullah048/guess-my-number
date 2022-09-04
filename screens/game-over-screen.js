import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Title from '../components/title'
import Colors from '../utils/colors'
import PrimaryButton from '../components/primary-button'

const GameOverScreen = ({
  setGameOver,
  setSelectedNumber,
  selectedNumber,
  roundsNumber
}) => {
  return (
    <View style={styles.container}>
      <Title>Game Over !</Title>
      <Image
        source={require('../assets/success.png')}
        style={styles.image}
        resizeMode='contain'
      />
      <Text style={styles.outerText}>
        Your phone needed <Text style={styles.innerText}>{roundsNumber}</Text>{' '}
        rounds to guess the number{' '}
        <Text style={styles.innerText}>{selectedNumber}</Text>
      </Text>
      <View style={{ alignSelf: 'center' }}>
        <PrimaryButton
          onPress={() => {
            setGameOver(false)
            setSelectedNumber(null)
          }}
          style={styles.button}
        >
          Play Again
        </PrimaryButton>
      </View>
    </View>
  )
}

export default GameOverScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 35,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 200,
    overflow: 'hidden',
    alignSelf: 'center',
    marginVertical: 20
  },
  outerText: {
    fontSize: 24,
    textAlign: 'center'
  },
  innerText: {
    color: Colors.darkPlump,
    fontWeight: 'bold'
  },
  button: {
    marginVertical: 20,
    fontWeight: 'bold',
    fontSize: 20,
    color: Colors.amber,
    backgroundColor: Colors.plump,
    padding: 12,
    borderRadius: 10,
    textAlign: 'center'
  }
})
