import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../Service/service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-data',
  templateUrl: './edit-data.component.html',
  styleUrls: ['./edit-data.component.css']
})
export class EditDataComponent implements OnInit{

  get: boolean=false;
  myForm!: FormGroup;  // <-- Declare the form group
  submittedData:any = null;
  backEndData:any=null;
  id:String="";


  constructor(private formBuilder: FormBuilder,
              private service:ServiceService, 
              private route:ActivatedRoute) 
  { this.initializeForm(); }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id')!; // ! is a non-null assertion operator, which tells TypeScript that params.get('id') will never be null or undefined.
    });
    this.getData();
  }

  initializeForm() {
    this.myForm = this.formBuilder.group({
      name: [ '', Validators.required],         // Use data from the backend or empty string
      age: ['', Validators.required],          // Use data from the backend or empty string
      salary: ['', Validators.required],       // Use data from the backend or empty string
      department: ['', Validators.required]    // Use data from the backend or empty string
    });
  }

  getData(){
    this.service.getById(this.id).subscribe((data: any) => {
      this.backEndData=data;
      this.updateFormValues();
    })
  }

  updateFormValues(){
    if(this.backEndData){
      this.myForm.patchValue({
        name: this.backEndData.name || '',
        age: this.backEndData.age || '',
        salary: this.backEndData.salary || '',
        department: this.backEndData.department || '',
      })
    }
  }

  // Submit method
  onSubmit():void {
    if (this.myForm.valid) {  // <-- Check if the form is valid before submission
      console.log(this.myForm.value);  // This logs the form's value
      this.submittedData = this.myForm.value;
      
      this.service.editData(this.myForm.value,this.id).subscribe(data=>{
        console.log(data);
        return this.myForm.value
      })

    } else {
      console.log('Form is invalid');
      console.log(this.myForm);
    }
  }


}
