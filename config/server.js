module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", process.env.PORT || 1337),
  url: env('RENDER_EXTERNAL_URL', 'https://strapi-tdge.onrender.com'),
  proxy: true,
  app: {
    keys: env.array("APP_KEYS", ["someRandomKeyA", "someRandomKeyB"]),
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
});
