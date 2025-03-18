export interface IBaseMessage {
  mail: string;
  message: string;
}


interface IMessage extends IBaseMessage{
  id?: string;
  createdOn?: string;
}
