import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-single-radio-input',
  templateUrl: './single-radio-input.component.html',
  styleUrls: ['./single-radio-input.component.css']
})
export class SingleRadioInputComponent {
  @Input() label:string='title'
  @Input() id:string=''
  @Input() placeholder:string=''
  @Input() name:string=''
}
