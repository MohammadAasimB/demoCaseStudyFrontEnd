import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../../Service/service.service';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent {

  get: boolean=false;
  myForm: FormGroup;  // <-- Declare the form group
  submittedData:any = null;

  @Input()
  demo: number=0;

  constructor(private formBuilder: FormBuilder,private service:ServiceService) {  
    // Initialize the form using FormBuilder (use Validators if necessary)
    this.myForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],         // A form control for 'name' with validation
      age: ['', [Validators.required,Validators.min(18),Validators.max(65)]],          // A form control for 'age' with validation
      salary: ['', [Validators.required,Validators.min(30000),Validators.pattern("^[0-9]*$")]],       // A form control for 'salary' with validation
      department: ['', [Validators.required,Validators.maxLength(30)]]    // A form control for 'department' with validation
    });
  }

  // Submit method
  onSubmit():void {
    if (this.myForm.valid) {  // <-- Check if the form is valid before submission
      console.log(this.myForm.value);  // This logs the form's value
      this.submittedData = this.myForm.value;
      
      this.service.addData(this.myForm.value).subscribe(data=>{
        console.log(data);
        return this.myForm.value
      })

    } else {
      console.log('Form is invalid');
      console.log(this.myForm);
    }
  }
  
}
