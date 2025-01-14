import { Component } from '@angular/core';
import { ServiceService } from '../../Service/service.service';

@Component({
  selector: 'app-get-by-name',
  templateUrl: './get-by-name.component.html',
  styleUrls: ['./get-by-name.component.css']
})
export class GetByNameComponent {
     name: String='';
      data: any = {};
      value: boolean = false;
    
      constructor(
        private service: ServiceService 
      ){}
    
    onSubmit() {
      this.service.getByName(this.name).subscribe((data: any) => {
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
