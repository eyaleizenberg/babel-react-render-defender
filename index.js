module.exports = {
  plugins: [
    [require('babel-plugin-react-transform').default, {
      transforms: [
        {
          transform: require.resolve('react-render-defender'),
          imports: ['react']
        },
      ],
    }],
  ]
};
