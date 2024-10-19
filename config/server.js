module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", process.env.PORT || 1337),
  app: {
    keys: env.array("APP_KEYS", ["someRandomKeyA", "someRandomKeyB"]),
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
});
