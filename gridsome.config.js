// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [{
    use: '@gridsome/source-strapi',
    options: {
      // apiURL: 'http://localhost:1337',
      apiURL: process.env.GRIDSOME_API_URL,
      queryLimit: 1000, // Defaults to 100
      contentTypes: ['post'], //后面在strapi上建的集合
      //singleTypes: ['impressum'],
      // Possibility to login with a Strapi user,
      // when content types are not publicly available (optional).
      loginData: {
        identifier: '',
        password: ''
      }
    }
  }],
  templates: {
    StrapiPost: [{
      path: '/post/:id',
      component: './src/templates/Post.vue'
    }]
  }
}