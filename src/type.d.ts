interface IUser {
  id?: number;
  firstname?: string;
  middlename?: string;
  lastname?: string;
  avatar?: string;
  email?: string;
  phone?: string;
}

interface IStore {
  headers: string[];
  users: any[];
  loading: boolean;
  modal: boolean;
  user: [];
  item: {};
}

type UserState = {
  users: IUser[];
  headers: string[];
  loading: boolean;
  modal: boolean;
  user: [];
  item: {};
};
