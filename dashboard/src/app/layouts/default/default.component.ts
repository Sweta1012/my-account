import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  sidebarOpen:Boolean = false;
  @ViewChild('drawer', { read: ViewContainerRef }) target:any;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    console.log(this.target.nativeElement);
  }

  sideBarToggle() {
    console.log(this.target);
    this.sidebarOpen = !this.sidebarOpen;
  }

}
