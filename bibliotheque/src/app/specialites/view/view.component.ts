import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SpecialitesService } from '../specialites.service';
import { Specialites } from '../specialites';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent implements OnInit{
  ngOnInit(): void {
    this.specialitesserv.find(this.specialiteId).subscribe((data: any) => {
      this.specialites = data;
       });
  }
  @Input() specialiteId: object;
  @ViewChild('myModal') myModal!: ElementRef;
  display = "none";
  specialites:Specialites=new Specialites();
  constructor(private specialitesserv :SpecialitesService){}
    
  updateAuteur=()=>{
    this.specialitesserv.update(this.specialites._id,this.specialites).subscribe((data=>{
    console.log(data)
    this.closeModal() 
    window.location.reload();
    }))
    }
    openModal() { 
    this.display = "block";
    }
    closeModal() {
    this.display = "none";
    }
}
