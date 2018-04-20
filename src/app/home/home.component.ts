import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    //define the table colums
  displayedColumns = ['name', 'lastname'];
   constructor(private dataService:DataService,private router: Router) { }
  name ='';
  lastname='';
  etudiants;
  matiers;
  ngOnInit() {
    this.dataService.getEtudiants().subscribe((res)=>{
      this.etudiants = new MatTableDataSource<any>(res);
    })
  }
  ClickOnTableLine(student){
 
    console.log(student.name);
   

  }



}
