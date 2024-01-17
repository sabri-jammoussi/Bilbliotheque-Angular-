import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Specialites } from '../specialites';
import { SpecialitesService } from '../specialites.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit{
  ngOnInit(): void {
    this.specialitesserv.find(this.specialiteId).subscribe(data => {
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
