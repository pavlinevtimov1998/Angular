import { ITheme } from './theme';
import { IUser } from './user';

export interface IPost {
  created_at: string;
  likes: string[];
  text: string;
  userId: IUser;
  themeId: ITheme;
}
