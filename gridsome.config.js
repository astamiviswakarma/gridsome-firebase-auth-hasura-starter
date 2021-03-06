// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [{
    use: 'gridsome-plugin-typescript',
  },
  {
    use: '@gridsome/source-graphql',
    options: {
      url: 'http://localhost:8080/v1/graphql',
      fieldName: 'hasura',
      headers: {
        // Authorization: `Bearer ${process.env.AUTH_TOKEN}`,
      },
    },
  }]
}
