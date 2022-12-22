// module.exports = {
//     presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
//   };

// const config = {
//   verbose: true,
// };

// module.exports = config;
module.exports = {
  presets: [
    '@babel/preset-react',
    [ 
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};