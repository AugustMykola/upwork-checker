import {Injectable} from '@angular/core';
import {IBaseMessage, IMessage} from '../interfaces/IMessage';

@Injectable()
export class MessageService {
  readonly idLength: number = 10;

  constructor() {
  }

  prepareDataToSubmit(data: IBaseMessage): IMessage {
    return {
      ...data,
      id: this.generateRandomId(this.idLength),
      createdOn: new Date().toISOString()
    }
  }

  generateRandomId(length: number): string {
    const characters: string = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let result: string = '';
    for (let i: number = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }
    return result;
  }
}
