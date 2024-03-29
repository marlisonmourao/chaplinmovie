module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@dtos': './src/dtos',
            '@assets': './src/assets',
            '@components': './src/components',
            '@screens': './src/screens',
            '@storage': './src/storage',
            '@utils': './src/utils',
            '@services': './src/services',
            '@routes': './src/routes',
            '@hooks': './src/hooks',
            '@contexts': './src/contexts',
            '@styles': './src/styles'
          }
        },
      ],
      'inline-dotenv'
    ],
  };
};
