import {Component, inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {FormBuilder, ReactiveFormsModule, UntypedFormGroup, Validators} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {IBaseMessage} from '../../interfaces/IMessage';

@Component({
  selector: 'app-create-message-dialog',
  imports: [CommonModule, MatButtonModule, ReactiveFormsModule, MatDialogModule, MatFormFieldModule, MatInputModule],
  templateUrl: './create-message-dialog.component.html',
  styleUrl: './create-message-dialog.component.scss'
})
export class CreateMessageDialogComponent {
  form: UntypedFormGroup

  dialogRef = inject(MatDialogRef<CreateMessageDialogComponent>);
  data = inject(MAT_DIALOG_DATA);
  formBuilder: FormBuilder = inject(FormBuilder);

  constructor() {
    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      message: [null, [Validators.required, Validators.maxLength(100)]]
    });
  }

  onSubmit(): void {
    const res: IBaseMessage = this.form.getRawValue();
    this.dialogRef.close(res);
  }
}
