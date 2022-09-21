import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
Ntask =""
tasklist:Array<string>  =[]
  constructor() { }

  ngOnInit(): void {
  }
  add(){
    this.tasklist.push(this.Ntask)
    }

}

