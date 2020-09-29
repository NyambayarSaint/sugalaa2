module.exports = ({ env }) => ({
  defaultConnection: 'default',
  // connections: {
  //   default: {
  //     connector: 'mongoose',
  //     settings: {
  //       host: env('DATABASE_HOST', '192.168.10.82'),
  //       srv: env.bool('DATABASE_SRV', false),
  //       port: env.int('DATABASE_PORT', 27017),
  //       database: env('DATABASE_NAME', 'smartlottery'),
  //       username: env('DATABASE_USERNAME', 'admin'),
  //       password: env('DATABASE_PASSWORD', 'nakyXdol!671'),
  //     },
  //     options: {
  //       authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
  //       ssl: env.bool('DATABASE_SSL', false),
  //     },
  //   },
  // },
  "connections": {
    "default": {
      "connector": "mongoose",
      "settings": {
        "uri": "mongodb+srv://web-master:Popersia12@cluster0.9crok.mongodb.net/smartlottery?retryWrites=true&w=majority"
      },
      "options": {
        "ssl": true
      }
    }
  }
});
