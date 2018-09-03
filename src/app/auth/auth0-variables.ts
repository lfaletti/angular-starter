interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'k-Vp9aaiopM6sA-PCFsr9sQypz_NSjcD',
  domain: 'autenticame.auth0.com',
  callbackURL: 'http://localhost:4200/auth/callback' // Set callback url
};
