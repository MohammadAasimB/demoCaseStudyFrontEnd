import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../Service/service.service';

@Component({
  selector: 'app-get-by-id',
  templateUrl: './get-by-id.component.html',
  styleUrls: ['./get-by-id.component.css']
})
export class GetByIdComponent implements OnInit{
  id: String='';
  data: any = {};
  value: boolean = false;

  constructor(
    private service: ServiceService 
  ){}

onSubmit() {
  this.service.getById(this.id).subscribe((data: any) => {
    this.value=true;
    // console.log(data);
    this.data=data;
    console.log(this.data);
    return this.data
  })
}



  ngOnInit(): void {
    
  }
}
