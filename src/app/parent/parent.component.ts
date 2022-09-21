import { Component, OnInit, Output,EventEmitter } from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  @Output() newAdd = new EventEmitter
Ntask =""
tasklist:Array<string>  =[]
  constructor() { }

  ngOnInit(): void {
  }
  add(){
    // this.tasklist.push(this.Ntask)
    console.log(`----------------->`,this.Ntask);
    
    this.newAdd.emit(this.Ntask)

    }

}

