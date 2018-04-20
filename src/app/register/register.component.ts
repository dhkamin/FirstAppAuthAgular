import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  ch;
  selectsexe;
  sexes = [
    {value: 'male-0', viewValue: 'Male'},
    {value: 'female-1', viewValue: 'Female'}
  
  ];


  rForm: FormGroup;

  constructor(private fb: FormBuilder, private dataService:DataService) { 

      this.rForm =fb.group({
      'name' : ['', Validators.required],
      'lastname' : ['', Validators.required],
      'selectsexe':[''],
      'email':['',[Validators.required,Validators.email]],
      'borndate':['',Validators.required],
      'pwd':['',Validators.required],
      'Telephone':['',Validators.required]
     
      
    });

  }
  MyFormSubmit(objJson){
   
      console.log(objJson);
      this.dataService.postEtudiant(objJson).subscribe(
        (data:any) => {
          console.log(data);
        });
    }


  ngOnInit() {
 
  }

}
