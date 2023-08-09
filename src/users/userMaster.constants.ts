export const UserMasterTokens = {
  REPOSITORY: 'UserMasterRepository',
  USECASE: 'UserMasterUsecase',
} as const;
export type UserMasterTokens =
  (typeof UserMasterTokens)[keyof typeof UserMasterTokens];
