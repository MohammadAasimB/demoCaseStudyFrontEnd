import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../Service/service.service';

@Component({
  selector: 'app-get-all-data',
  templateUrl: './get-all-data.component.html',
  styleUrls: ['./get-all-data.component.css']
})
export class GetAllDataComponent {

  result: any;

  constructor(
    private service: ServiceService 
  ){
    
  }


  onSubmit():void{
    this.service.getAllData().subscribe((data: any) => {
      console.log(data);
      this.result=data;
      console.log(this.result);
      return this.result
    })
  }

}
