import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  faChartPie,
  faChevronDown,
  faGears,
  faHeadset,
  faListUl,
  faRetweet,
  faScrewdriverWrench,
  faBoxesStacked,
  faCompass,
  faUserGroup,
  faClipboard
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private router: Router) { }

  faChartPie = faChartPie
  faScrewdriverWrench = faScrewdriverWrench
  faChevronDown = faChevronDown
  faRetweet = faRetweet
  faListUl = faListUl
  faHeadset = faHeadset
  faGears=faGears
  faBoxesStacked=faBoxesStacked
  faCompass=faCompass
  faUserGroup=faUserGroup
  faClipboard=faClipboard

  status: boolean = false

  dropdown() {
    this.status = !this.status
    console.log(this.status);

  }

}
