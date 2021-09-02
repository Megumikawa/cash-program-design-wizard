// Output should be a valid TS-file:
module.exports = `// THIS FILE IS GENERATED BY 'npm run set-env-variables'

export const environment = {
  production: ${process.env.NG_PRODUCTION || true},

  // Configuration/Feature-switches:
  defaultLanguage: '${process.env.NG_DEFAULT_LOCALE || 'en'}',

  // URLS:
  apiUrl: '${process.env.API_URL || ''}',
};
`;
