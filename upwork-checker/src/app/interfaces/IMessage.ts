export interface IBaseMessage {
  email: string;
  message: string;
}


export interface IMessage extends IBaseMessage{
  id?: string;
  createdOn?: string;
}
