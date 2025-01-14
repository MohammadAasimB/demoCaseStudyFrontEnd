import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnDestroy{

  interval: any;
  counter = 0;

  constructor(){
    console.log("this is constructor of child");
  }
  
  ngOnInit(): void {
    console.log("this is onInit of child component")
    this.interval = setInterval(() =>{
      this.counter=this.counter+1;
      console.log(this.counter);
    },1000);
  }

  ngOnDestroy(): void {
    console.log("this is onDestroy of child component")
    clearInterval(this.interval);
  }

}
