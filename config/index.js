require('dotenv')

module.exports = {
  isProduction: process.env.NODE_ENV === 'production',
  uri: process.env.NODE_ENV === 'production' ? process.env.DB_URI_ONLINE : process.env.DB_URI_LOCAL
}