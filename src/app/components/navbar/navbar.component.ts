import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() collapse: boolean = true;
  menuItems!: any[];
  flag: any;
  ngOnInit(): void {

   
  }


  logout() {
  }
}
