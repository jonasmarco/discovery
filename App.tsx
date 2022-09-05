import React from 'react'
import { ThemeProvider } from 'styled-components/native'
import { darkTheme, lightTheme } from '@assets/theme/theme'

import Button from '@components/atoms/Button'
import PageHome from '@components/pages/Home'
import SafeAreaView from '@components/atoms/SafeAreaView'

export default function App() {
	const [theme, setTheme] = React.useState<string>('light')
  const toggleTheme = async () => {
    const themeValue = theme === 'dark' ? 'light' : 'dark'
    setTheme(themeValue)
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
