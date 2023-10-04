import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent {
@Input() title:string=""
@Input() progress:number=50

bar=this.progress+'%'

}
