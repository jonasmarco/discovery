import React, { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components/native'
import { darkTheme, lightTheme } from '@assets/theme/theme'
import AsyncStorage from '@react-native-async-storage/async-storage'

import Button from '@components/atoms/Button'
import PageHome from '@components/pages/Home'
import SafeAreaView from '@components/atoms/SafeAreaView'

export default function App() {
	const [theme, setTheme] = useState<string>('light')
  const getTheme = async () => {
    try {
      const themeValue = await AsyncStorage.getItem('@theme')
      if (themeValue) setTheme(themeValue)
    } catch (err) {
      console.error(err)
    }
  }
  useEffect(() => {
    getTheme()
  }, [])
  const toggleTheme = async () => {
    const themeValue = theme === 'dark' ? 'light' : 'dark'
    try {
      await AsyncStorage.setItem('@theme', themeValue)
      setTheme(themeValue)
    } catch (err) {
      console.error(err)
    }
  }

	return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <SafeAreaView>
        <Button onPress={() => toggleTheme()}>
          {theme === 'dark' ? 'Tootle to Light Mode' : 'Tootle to Dark Mode'}
        </Button>
      </SafeAreaView>
      <PageHome />
    </ThemeProvider>
  )
}
