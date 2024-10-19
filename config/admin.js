module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "defaultAdminSecret"),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT", "zMXAZwPZ4a41+OGp9ezIdQ=="),
  },
});
