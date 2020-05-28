export const environment = {
  production: true,
  apiUrl: 'https://erik-financial-api.herokuapp.com',
  tokenWhitelistedDomains: [new RegExp('erik-financial-api.herokuapp.com')],
  tokenBlacklistRoutes:    [new RegExp('\/oauth\/token')]
};
