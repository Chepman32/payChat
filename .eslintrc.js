module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    'semi': 'off',  // Disable missing semicolon rule
    'react-hooks/exhaustive-deps': 'off',  // Disable missing dependencies warning in useEffect
    'quotes': 'off',  // Disable single quote enforcement rule
    'comma-dangle': 'off',  // Disable missing trailing comma rule
  },
};