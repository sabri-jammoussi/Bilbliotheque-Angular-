import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Editeurs } from '../editeurs';
import { EditeursService } from '../editeurs.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent implements OnInit {

  @ViewChild('myModal') myModal!: ElementRef;
  display = "none";
  editeurs :Editeurs = new Editeurs()
  constructor(private editeurServ:EditeursService) { }
  ngOnInit(): void {
   // this.loadauteur()
  }
  // loadauteur(){
  //   return this.specialitesserv.getAll().subscribe(data =>
  //     this.specialites=data),
  //     (error: any) => console.log(error)

  // }
  ajoutEditeur = () => {
    this.editeurServ.create(this.editeurs).subscribe((data => {
      console.log(data)
      console.log("test ajouter ")
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
