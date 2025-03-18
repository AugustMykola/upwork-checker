import {Component, inject} from '@angular/core';
import {selectAllMessages, selectError, selectLoading} from '../../state/selectors';
import {Observable} from 'rxjs';
import {loadMessages} from '../../state/actions';
import {Store} from '@ngrx/store';
import {MatTableModule} from '@angular/material/table';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {CommonModule} from '@angular/common';
import {CreateMessageDialogComponent} from '../../components/create-message-dialog/create-message-dialog.component';

@Component({
  selector: 'app-message-page',
  imports: [CommonModule, MatTableModule, MatButtonModule, MatDialogModule, CreateMessageDialogComponent],
  templateUrl: './message-page.component.html',
  styleUrl: './message-page.component.scss'
})
export class MessagePageComponent {
  store = inject(Store);
  dialog: MatDialog = inject(MatDialog);


  messages$: Observable<any> = this.store.select(selectAllMessages);
  loading$: Observable<boolean> = this.store.select(selectLoading);
  error$: Observable<any> = this.store.select(selectError);
  displayedColumns: string[] = ['id', 'email', 'message', 'date'];


  constructor() {
    this.store.dispatch(loadMessages());
  }

  openDialog() {
    return this.dialog.open(CreateMessageDialogComponent);
  }

}
