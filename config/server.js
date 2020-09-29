module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1336),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'f1fffc3e30aeaa611ac7b1ac95d067cd'),
    },
  },
});
