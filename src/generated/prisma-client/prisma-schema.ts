export const typeDefs = /* GraphQL */ `type AggregateGithubProfile {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type GithubProfile {
  avatarUrl: String!
  bio: String
  blog: String
  company: String
  email: String!
  githubId: Int!
  location: String
  name: String!
  profileUrl: String!
  type: String!
  username: String!
}

type GithubProfileConnection {
  pageInfo: PageInfo!
  edges: [GithubProfileEdge]!
  aggregate: AggregateGithubProfile!
}

input GithubProfileCreateInput {
  avatarUrl: String!
  bio: String
  blog: String
  company: String
  email: String!
  githubId: Int!
  location: String
  name: String!
  profileUrl: String!
  type: String!
  username: String!
}

input GithubProfileCreateOneInput {
  create: GithubProfileCreateInput
  connect: GithubProfileWhereUniqueInput
}

type GithubProfileEdge {
  node: GithubProfile!
  cursor: String!
}

enum GithubProfileOrderByInput {
  avatarUrl_ASC
  avatarUrl_DESC
  bio_ASC
  bio_DESC
  blog_ASC
  blog_DESC
  company_ASC
  company_DESC
  email_ASC
  email_DESC
  githubId_ASC
  githubId_DESC
  location_ASC
  location_DESC
  name_ASC
  name_DESC
  profileUrl_ASC
  profileUrl_DESC
  type_ASC
  type_DESC
  username_ASC
  username_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type GithubProfilePreviousValues {
  avatarUrl: String!
  bio: String
  blog: String
  company: String
  email: String!
  githubId: Int!
  location: String
  name: String!
  profileUrl: String!
  type: String!
  username: String!
}

type GithubProfileSubscriptionPayload {
  mutation: MutationType!
  node: GithubProfile
  updatedFields: [String!]
  previousValues: GithubProfilePreviousValues
}

input GithubProfileSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: GithubProfileWhereInput
  AND: [GithubProfileSubscriptionWhereInput!]
  OR: [GithubProfileSubscriptionWhereInput!]
  NOT: [GithubProfileSubscriptionWhereInput!]
}

input GithubProfileUpdateDataInput {
  avatarUrl: String
  bio: String
  blog: String
  company: String
  email: String
  githubId: Int
  location: String
  name: String
  profileUrl: String
  type: String
  username: String
}

input GithubProfileUpdateInput {
  avatarUrl: String
  bio: String
  blog: String
  company: String
  email: String
  githubId: Int
  location: String
  name: String
  profileUrl: String
  type: String
  username: String
}

input GithubProfileUpdateManyMutationInput {
  avatarUrl: String
  bio: String
  blog: String
  company: String
  email: String
  githubId: Int
  location: String
  name: String
  profileUrl: String
  type: String
  username: String
}

input GithubProfileUpdateOneInput {
  create: GithubProfileCreateInput
  update: GithubProfileUpdateDataInput
  upsert: GithubProfileUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: GithubProfileWhereUniqueInput
}

input GithubProfileUpsertNestedInput {
  update: GithubProfileUpdateDataInput!
  create: GithubProfileCreateInput!
}

input GithubProfileWhereInput {
  avatarUrl: String
  avatarUrl_not: String
  avatarUrl_in: [String!]
  avatarUrl_not_in: [String!]
  avatarUrl_lt: String
  avatarUrl_lte: String
  avatarUrl_gt: String
  avatarUrl_gte: String
  avatarUrl_contains: String
  avatarUrl_not_contains: String
  avatarUrl_starts_with: String
  avatarUrl_not_starts_with: String
  avatarUrl_ends_with: String
  avatarUrl_not_ends_with: String
  bio: String
  bio_not: String
  bio_in: [String!]
  bio_not_in: [String!]
  bio_lt: String
  bio_lte: String
  bio_gt: String
  bio_gte: String
  bio_contains: String
  bio_not_contains: String
  bio_starts_with: String
  bio_not_starts_with: String
  bio_ends_with: String
  bio_not_ends_with: String
  blog: String
  blog_not: String
  blog_in: [String!]
  blog_not_in: [String!]
  blog_lt: String
  blog_lte: String
  blog_gt: String
  blog_gte: String
  blog_contains: String
  blog_not_contains: String
  blog_starts_with: String
  blog_not_starts_with: String
  blog_ends_with: String
  blog_not_ends_with: String
  company: String
  company_not: String
  company_in: [String!]
  company_not_in: [String!]
  company_lt: String
  company_lte: String
  company_gt: String
  company_gte: String
  company_contains: String
  company_not_contains: String
  company_starts_with: String
  company_not_starts_with: String
  company_ends_with: String
  company_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  githubId: Int
  githubId_not: Int
  githubId_in: [Int!]
  githubId_not_in: [Int!]
  githubId_lt: Int
  githubId_lte: Int
  githubId_gt: Int
  githubId_gte: Int
  location: String
  location_not: String
  location_in: [String!]
  location_not_in: [String!]
  location_lt: String
  location_lte: String
  location_gt: String
  location_gte: String
  location_contains: String
  location_not_contains: String
  location_starts_with: String
  location_not_starts_with: String
  location_ends_with: String
  location_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  profileUrl: String
  profileUrl_not: String
  profileUrl_in: [String!]
  profileUrl_not_in: [String!]
  profileUrl_lt: String
  profileUrl_lte: String
  profileUrl_gt: String
  profileUrl_gte: String
  profileUrl_contains: String
  profileUrl_not_contains: String
  profileUrl_starts_with: String
  profileUrl_not_starts_with: String
  profileUrl_ends_with: String
  profileUrl_not_ends_with: String
  type: String
  type_not: String
  type_in: [String!]
  type_not_in: [String!]
  type_lt: String
  type_lte: String
  type_gt: String
  type_gte: String
  type_contains: String
  type_not_contains: String
  type_starts_with: String
  type_not_starts_with: String
  type_ends_with: String
  type_not_ends_with: String
  username: String
  username_not: String
  username_in: [String!]
  username_not_in: [String!]
  username_lt: String
  username_lte: String
  username_gt: String
  username_gte: String
  username_contains: String
  username_not_contains: String
  username_starts_with: String
  username_not_starts_with: String
  username_ends_with: String
  username_not_ends_with: String
  AND: [GithubProfileWhereInput!]
  OR: [GithubProfileWhereInput!]
  NOT: [GithubProfileWhereInput!]
}

input GithubProfileWhereUniqueInput {
  githubId: Int
}

scalar Long

type Mutation {
  createGithubProfile(data: GithubProfileCreateInput!): GithubProfile!
  updateGithubProfile(data: GithubProfileUpdateInput!, where: GithubProfileWhereUniqueInput!): GithubProfile
  updateManyGithubProfiles(data: GithubProfileUpdateManyMutationInput!, where: GithubProfileWhereInput): BatchPayload!
  upsertGithubProfile(where: GithubProfileWhereUniqueInput!, create: GithubProfileCreateInput!, update: GithubProfileUpdateInput!): GithubProfile!
  deleteGithubProfile(where: GithubProfileWhereUniqueInput!): GithubProfile
  deleteManyGithubProfiles(where: GithubProfileWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  githubProfile(where: GithubProfileWhereUniqueInput!): GithubProfile
  githubProfiles(where: GithubProfileWhereInput, orderBy: GithubProfileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GithubProfile]!
  githubProfilesConnection(where: GithubProfileWhereInput, orderBy: GithubProfileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GithubProfileConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  githubProfile(where: GithubProfileSubscriptionWhereInput): GithubProfileSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  email: String!
  githubProfile: GithubProfile
  id: ID!
  name: String!
  password: String
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  githubProfile: GithubProfileCreateOneInput
  name: String!
  password: String
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  email_ASC
  email_DESC
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  password_ASC
  password_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  email: String!
  id: ID!
  name: String!
  password: String
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  email: String
  githubProfile: GithubProfileUpdateOneInput
  name: String
  password: String
}

input UserUpdateManyMutationInput {
  email: String
  name: String
  password: String
}

input UserWhereInput {
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  githubProfile: GithubProfileWhereInput
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  email: String
  id: ID
}
`