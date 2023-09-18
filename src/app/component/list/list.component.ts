import { Component ,Input,OnInit} from '@angular/core';
import { PicModel } from 'src/app/model/pic.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  @Input() headerList: string[] = []
  @Input() picList:PicModel[]=[]

  ngOnInit(): void {

  }

}
