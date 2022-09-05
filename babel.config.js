module.exports = function (api) {
	api.cache(true)
	return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        require.resolve('babel-plugin-module-resolver'),
        {
          alias: {
            src: './src',
            '@assets': './src/assets',
            '@components': './src/components',
            '@hooks': './src/hooks',
            '@navigators': './src/navigators',
            '@redux': './src/redux',
            '@services': './src/services',
            '@theme': './src/theme',
            '@utils': './src/utils'
          }
        }
      ]
    ]
  }
}
