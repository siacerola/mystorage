import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-form-input',
  templateUrl: './single-form-input.component.html',
  styleUrls: ['./single-form-input.component.css']
})
export class SingleFormInputComponent {
  @Input() label:string='title'
  @Input() id:string=''
  @Input() placeholder:string=''

}
