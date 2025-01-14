import { Component } from '@angular/core';
import { ServiceService } from '../../Service/service.service';

@Component({
  selector: 'app-delete-data',
  templateUrl: './delete-data.component.html',
  styleUrls: ['./delete-data.component.css']
})
export class DeleteDataComponent {

  id: String='';

  constructor(private service: ServiceService){}

  onSubmit() {
    return this.service.deleteById(this.id).subscribe((data) => {});
  }

}
