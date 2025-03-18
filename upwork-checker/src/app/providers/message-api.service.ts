import {inject, Injectable} from '@angular/core';
import {addDoc, collection, Firestore} from '@angular/fire/firestore';
import {from, Observable} from 'rxjs';
import {IMessage} from '../interfaces/IMessage';

@Injectable()
export class MessageApiService {
  firestore: Firestore = inject(Firestore)
  private messagesCollection;

  constructor() {
    this.messagesCollection = collection(this.firestore, 'messages');
  }

  addMessage(message: IMessage): Observable<any> {
    return from(addDoc(this.messagesCollection, message));
  }
}
