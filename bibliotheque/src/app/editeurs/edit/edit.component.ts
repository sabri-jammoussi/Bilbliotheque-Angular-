import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { EditeursService } from '../editeurs.service';
import { Editeurs } from '../editeurs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit{
  ngOnInit(): void {
    this.editeurServ.find(this.editeurId).subscribe(data => {
      this.editeurs = data;
       });
  }
  @Input() editeurId: object;
  @ViewChild('myModal') myModal!: ElementRef;
  display = "none";
  editeurs:Editeurs=new Editeurs();

  constructor(private editeurServ :EditeursService){}
    
  updateAuteur=()=>{
    this.editeurServ.update(this.editeurs._id,this.editeurs).subscribe((data=>{
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