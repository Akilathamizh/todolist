import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-additional',
  templateUrl: './additional.component.html',
  styleUrls: ['./additional.component.scss']
})
export class AdditionalComponent implements OnInit {
@Input() value:any;
isActive:boolean=true
 constructor() { }

  ngOnInit(): void {
  }
  check(event:any){
    this.isActive=!this.isActive
    console.log((this.isActive));
    
  }

}
