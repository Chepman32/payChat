module.exports = {
  arrowParens: 'avoid',
  bracketSameLine: true,
  bracketSpacing: false,
  singleQuote: false,
  trailingComma: 'all',
  rules: {
    'semi': 'off',  // Disable missing semicolon rule
    'react-hooks/exhaustive-deps': 'off',  // Disable the missing dependencies warning in useEffect
  },
};