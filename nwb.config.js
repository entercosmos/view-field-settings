module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'FieldSettings',
      externals: {
        react: 'React'
      }
    }
  }
}
