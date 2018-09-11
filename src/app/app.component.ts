import {Component} from '@angular/core';
import {FormControl, Validators, FormGroupDirective} from '@angular/forms'
import { ErrorStateMatcher } from '@angular/material/core';

export class NameErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
  }
  //Default
  title = 'app';

  //Validation with Material
  nameFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[A-Za-z]+$/)
  ]);
  nameStateMatcher = new NameErrorStateMatcher();

  //Date Time picker
  private currentDate = new Date();
  private currentTime = new Date();
  public minDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), this.currentDate.getDate(), 0, 0);
}
