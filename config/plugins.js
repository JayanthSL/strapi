module.exports = ({ env }) => ({
  "users-permissions": {
    config: {
      jwtSecret: env("JWT_SECRET", "8TxUvGBabmLJW2JSLFQBHA=="),
    },
  },
});
