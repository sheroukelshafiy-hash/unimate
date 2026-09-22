import { DataService } from './../data-service';
import { Component, inject, Injector } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  imports: [FormsModule],
  selector: 'app-project-search',
  styleUrl: './project-search.css',
  templateUrl: './project-search.html',
})
export class ProjectSearch {
  dataService:any;
    constructor(injector:Injector){
      this.dataService=injector.get(DataService)
    }
  }





