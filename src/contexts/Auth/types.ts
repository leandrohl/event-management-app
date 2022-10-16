export interface IAuthContext {
  signIn: (email: string, password: string) => Promise<boolean>;
  signOut: () => Promise<void>;
  signed: boolean;
  user: IUserInfo;
  loadingScreen: boolean;
  updateUserName: (name: string) => void
}

export interface IUserInfo {
  userId: string,
  name: string;
  email: string;
}
