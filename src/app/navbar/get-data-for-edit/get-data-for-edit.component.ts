import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../Service/service.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-get-data-for-edit',
  templateUrl: './get-data-for-edit.component.html',
  styleUrls: ['./get-data-for-edit.component.css']
})
export class GetDataForEditComponent implements OnInit{

  result: any;
  fakeid: String='67029ea4bbeb8e7012b20506';

  constructor(
    private service: ServiceService, private router: Router
  ){}

  ngOnInit(): void {
    this.service.getAllData().subscribe((data: any) => {
      this.result=data;
      return this.result;
    })
  }

  edit(id: string){
    console.log(this.result);
    console.log(id);
    this.router.navigate(['/editData', id]);
  }


  

}
