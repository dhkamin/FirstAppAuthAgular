import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { MatTableDataSource } from '@angular/material';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  displayedColumns=['name','coef','note ds','note ex']
 matiers;

constructor(private dataService:DataService, private route:ActivatedRoute) { }
  name:any;
  lastname:any;
  sub:any;
  ngOnInit() {
    this.sub =  this.route.params.subscribe(params => {
      this.name = params['name'];
      this.lastname = params['lastname'];
   });
  console.log(this.name,this.lastname)
    this.dataService.getMatiersEtudiant(this.name,this.lastname).subscribe((res)=>{
      this.matiers = new MatTableDataSource<any>(res);
    })
  }

  ngOnDistroy(){
    this.sub.unsubscribe();
  }

}
