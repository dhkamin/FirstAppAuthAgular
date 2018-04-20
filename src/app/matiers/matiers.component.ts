import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { MatTableDataSource } from '@angular/material';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-matiers',
  templateUrl: './matiers.component.html',
  styleUrls: ['./matiers.component.css']
})
export class MatiersComponent implements OnInit {
  matiers;
  constructor(private dataService:DataService, private route:ActivatedRoute) { }
  name:any;
  coef:any; 
  ds:any;
  ex:any;
  sub:any;
  ngOnInit() {
    this.sub =  this.route.params.subscribe(params => {
      this.name = params['name'];
      this.coef = params['coef'];
      this.ds = params['ds'];
      this.ex = params['ex'];
   });
 
  }

  ngOnDistroy(){
    this.sub.unsubscribe();
  }
}
