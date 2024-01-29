export const helmetConf = {
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: [
        "'self'",
        "'unsafe-inline'",
        "code.jquery.com",
        "maxcdn.bootstrapcdn.com",
        "cdn.jsdelivr.net",
      ],
      styleSrc: [
        "'self'",
        "'unsafe-inline'",
        "maxcdn.bootstrapcdn.com",
        "cdn.jsdelivr.net",
        "use.fontawesome.com",
        "fonts.googleapis.com",
      ],
      fontSrc: [
        "'self'",
        "'unsafe-inline'",
        "maxcdn.bootstrapcdn.com",
        "use.fontawesome.com",
        "fonts.gstatic.com",
      ],
    },
  },
};
