import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Auteurs } from '../auteurs';
import { AuteursService } from '../auteurs.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent implements OnInit{
  ngOnInit(): void {
    this.auteurServ.find(this.auteurId).subscribe((data: any) => {
      this.auteurs = data;
       });
  }
  @Input() auteurId: object;
  @ViewChild('myModal') myModal!: ElementRef;
  display = "none";
  auteurs:Auteurs=new Auteurs();
  constructor(private auteurServ :AuteursService){}
    
  updateAuteur=()=>{
    this.auteurServ.update(this.auteurs._id,this.auteurs).subscribe((data=>{
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
