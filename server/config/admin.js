module.exports = ({ env }) => ({
  url: "http://qunwaadmin.emrani.co.uk",
  auth: {
    secret: env("ADMIN_JWT_SECRET"),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT"),
  },
});
