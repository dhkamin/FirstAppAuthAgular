import { Injectable } from '@angular/core';

import { Http ,Headers, RequestOptions  } from "@angular/http";
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';


@Injectable()
export class DataService {
  
  

  constructor(private http:Http) { }

  getEtudiants(){
    return this.http.get('http://localhost:3000/api/etudient')
    .map((res)=>{return res.json()})
  }
  getMatiersEtudiant(name ,lastname) {
    return this.http.get('http://localhost:3000/api/etudient/matiers/'+name+'&'+lastname)
    .map((res)=>{return res.json()})
  }
  
  
  

  postEtudiant(etudiant){    
    
    console.log(etudiant);
     
      return this.http.post('http://localhost:3000/api/etudient',etudiant )
      .map((res)=>{return res.json()});
      
      
    }
}

