import {inject, Injectable} from '@angular/core';
import {addDoc, collection, collectionData, Firestore} from '@angular/fire/firestore';
import {from, Observable} from 'rxjs';
import {IMessage} from '../interfaces/IMessage';

@Injectable()
export class MessageApiService {
  firestore: Firestore = inject(Firestore)
  private messagesCollection;

  constructor() {
    this.messagesCollection = collection(this.firestore, 'messages');
  }

  getMessages(): Observable<IMessage[]> {
    return collectionData(this.messagesCollection, { idField: 'id' }) as Observable<IMessage[]>;
  }

  addMessage(message: IMessage): Observable<any> {
    return from(addDoc(this.messagesCollection, message));
  }
}
