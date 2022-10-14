export interface IAuthContext {
  signed: boolean;
  loading: boolean;
  user: IUserInfo | null;
}


export interface IUserInfo {
  name: string;
  email: string;
}
