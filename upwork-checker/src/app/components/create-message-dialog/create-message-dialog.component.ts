import {Component, inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {FormBuilder, FormGroup, ReactiveFormsModule, UntypedFormGroup, Validators} from '@angular/forms';
import {IBaseMessage} from '../../interfaces/IMessage';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-create-message-dialog',
  imports: [CommonModule, MatButtonModule, ReactiveFormsModule, MatDialogModule, MatFormFieldModule],
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
      mail: [null, [Validators.required, Validators.email]],
      message: [null, [Validators.required, Validators.maxLength(100)]]
    });

    this.form.valueChanges.subscribe(() => console.log(this.form))
  }

  onSubmit(): void {
    console.log(12312)
  }
}
