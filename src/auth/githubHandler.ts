import { pick } from 'lodash/fp';
import { prisma } from '../generated/prisma-client';

export interface GithubJSON {
  avatar_url: string;
  bio?: string;
  blog?: string;
  company?: string;
  email: string;
  id: number;
  location?: string;
  login: string;
  name: string;
  type: string;
  url: string;
}

const githubStratHandler = async (
  accessToken: string,
  refreshToken: string,
  user: any,
  done: (err: Error | null, profile: any) => void,
) => {
  const { _json } = user;
  const {
    login, id, email, avatar_url, url,
    name, company, location, blog, bio, type,
  }: GithubJSON = _json;

  const githubProfile = await prisma.upsertGithubProfile({
    create: {
      avatarUrl: avatar_url,
      bio,
      blog,
      company,
      email,
      githubId: id,
      location,
      name,
      profileUrl: url,
      type,
      username: login,
    },
    update: {
      avatarUrl: avatar_url,
      bio,
      blog,
      company,
      email,
      githubId: id,
      location,
      name,
      profileUrl: url,
      type,
      username: login,
    },
    where: { githubId: id },
  });

  const userProfile = await prisma.upsertUser({
    create: {
      email,
      githubProfile: {
        connect: {
          githubId: id,
        },
      },
      name,
    },
    update: {
      email,
      githubProfile: {
        connect: {
          githubId: id,
        },
      },
      name,
    },
    where: { email },
  });

  return done(null, pick(['email', 'id', 'name'], userProfile));
};

export default githubStratHandler;
