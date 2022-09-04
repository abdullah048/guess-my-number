import { StatusBar } from 'expo-status-bar'
import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native'
import GameStartScreen from './screens/game-start-screen'
import { LinearGradient } from 'expo-linear-gradient'
import { useState } from 'react'
import GameScreen from './screens/game-screen'
import Colors from './utils/colors'
import GameOverScreen from './screens/game-over-screen'

export default function App() {
  const [selectedNumber, setSelectedNumber] = useState(null)
  const [roundsNumber, setRoundsNumber] = useState(null)
  const [gameOver, setGameOver] = useState(false)

  return (
    <LinearGradient colors={[Colors.plump, Colors.amber]} style={styles.bg}>
      <StatusBar style='auto' />
      <ImageBackground
        source={require('./assets/background.jpg')}
        resizeMode='cover'
        style={styles.bg}
        imageStyle={styles.bg_image}
      >
        <SafeAreaView style={styles.bg}>
          {gameOver ? (
            <GameOverScreen
              setGameOver={setGameOver}
              setSelectedNumber={setSelectedNumber}
              selectedNumber={selectedNumber}
              roundsNumber={roundsNumber}
            />
          ) : selectedNumber ? (
            <GameScreen
              selectedNumber={selectedNumber}
              setGameOver={setGameOver}
              setRoundsNumber={setRoundsNumber}
            />
          ) : (
            <GameStartScreen setSelectedNumber={setSelectedNumber} />
          )}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  bg: {
    flex: 1
  },
  bg_image: {
    opacity: 0.13
  }
})
