export {};

declare global {
  type IRef = MutableRefObject<HTMLDivElement>;

  type IChangeEvent = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

  type ICallback = () => void;

  type IUserName = {
    first: string;
    last: string;
    title: string;
  };

  type IUserImages = {
    large: string;
    medium: string;
    thumbnail: string;
  };

  type IUserId = {
    name: string;
    value: string;
  };

  type IUser = {
    id: IUserId;
    name: IUserName;
    nat: string;
    picture: IUserImages;
  };

  type UsersContextType = {
    users: IUser[];
    setUsers: (users: IUser[]) => void;
  };

  type StateReducer = {
    users: IUsers[];
  };
}
