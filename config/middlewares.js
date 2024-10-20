module.exports = [
  'strapi::logger',
  'strapi::errors',
{
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        directives: {
          'script-src': ["'self'", "'unsafe-inline'", 'https:'],
          'connect-src': ["'self'", 'https:', 'wss://strapi-tdge.onrender.com:5173'], 
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
