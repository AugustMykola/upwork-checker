import {Component, inject, OnInit} from '@angular/core';
import {selectAllMessages, selectLoading} from '../../state/selectors';
import {distinctUntilChanged, filter, first, map, Observable, Subscription, tap} from 'rxjs';
import {loadMessages, addMessage} from '../../state/actions';
import {Store} from '@ngrx/store';
import {MatTableModule} from '@angular/material/table';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {CommonModule} from '@angular/common';
import {CreateMessageDialogComponent} from '../../components/create-message-dialog/create-message-dialog.component';
import {MessageService} from '../../providers/message.service';
import {IMessage} from '../../interfaces/IMessage';
import {SpinnerComponent} from '../../components/spinner/spinner.component';

@Component({
  selector: 'app-message-page',
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    CreateMessageDialogComponent,
    SpinnerComponent
  ],
  templateUrl: './message-page.component.html',
  styleUrl: './message-page.component.scss',
  providers: [MessageService]
})
export class MessagePageComponent implements OnInit {

  store = inject(Store);
  dialog: MatDialog = inject(MatDialog);
  messageService: MessageService = inject(MessageService);

  messages$: Observable<any> = this.store.select(selectAllMessages).pipe(
    filter(res => Boolean(res)),
    distinctUntilChanged((prev, curr) => prev.length === curr.length),
    map((messages) =>
      [...messages].sort((a, b) => {
        const dateA = a?.createdOn ? new Date(a.createdOn).getTime() : 0;
        const dateB = b?.createdOn ? new Date(b.createdOn).getTime() : 0;
        return dateA - dateB;
      })
    )
  );
  loading$: Observable<boolean> = this.store.select(selectLoading);
  displayedColumns: string[] = ['id', 'email', 'message', 'date'];


  constructor() {
  }

  ngOnInit(): void {
    this.store.select(selectAllMessages).pipe(first()).subscribe(messages => {
      if (!messages.length) {
        this.store.dispatch(loadMessages());
      }
    });
  }

  openDialog(): Subscription {
    return this.dialog.open(CreateMessageDialogComponent).afterClosed().pipe(first()).subscribe(res => {
      if (res) {
        const message: IMessage = this.messageService.prepareDataToSubmit(res);
        this.store.dispatch(addMessage({ message }));
      }
    })
  }

}
