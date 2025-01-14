import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit{

check: boolean= false;
constructor(){console.log("this is constructor of parent");}

  ngOnInit(): void {
    console.log("this is onInit of parent");
  }

  call_Child() {
    this.check= !this.check;
  }

}
