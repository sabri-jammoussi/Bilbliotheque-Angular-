import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { EditeursService } from '../editeurs.service';
import { Editeurs } from '../editeurs';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent implements OnInit{
  ngOnInit(): void {
    this.editeurSErv.find(this.editeurId).subscribe((data: any) => {
      this.editeurs = data;
       });
  }
  @Input() editeurId: object;
  @ViewChild('myModal') myModal!: ElementRef;
  display = "none";
  editeurs:Editeurs=new Editeurs();
  constructor(private editeurSErv :EditeursService){}
    
  updateAuteur=()=>{
    this.editeurSErv.update(this.editeurs._id,this.editeurs).subscribe((data=>{
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