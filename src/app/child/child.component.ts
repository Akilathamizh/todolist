import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  isActive:boolean=true;
@Input() passvalue:string="";
array:any=[]


constructor() { }

  ngOnInit(): void {
  }
  // check(event:any){
  //   this.isActive=!this.isActive
  //   console.log((this.isActive));
    
  // }
  get(event:any){
    this.array.push(event)
  }

}

