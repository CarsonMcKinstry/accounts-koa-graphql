import dotenv from 'dotenv';
import { Strategy } from 'passport';
import { Strategy as GithubStrategy } from 'passport-github';

import githubHandler from './githubHandler';

dotenv.config();

export interface AuthConfig {
  [key: string]: Strategy;
}

const {
  GITHUB_CALLBACK_URL,
  GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET,
} = process.env;

const authConfig: AuthConfig = {};

if (
  typeof GITHUB_CALLBACK_URL === 'string'
  && typeof GITHUB_CLIENT_ID === 'string'
  && typeof GITHUB_CLIENT_SECRET === 'string') {
    const githubStrategy = new GithubStrategy({
      callbackURL: GITHUB_CALLBACK_URL,
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      scope: ['openid'],
    }, githubHandler);

    authConfig.github = githubStrategy;
  }

export default authConfig;
