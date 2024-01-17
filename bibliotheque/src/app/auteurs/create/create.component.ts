import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuteursService } from '../auteurs.service';
import { Auteurs } from '../auteurs';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent implements OnInit {

  @ViewChild('myModal') myModal!: ElementRef;
  display = "none";
  auteurs:Auteurs = new Auteurs()
  constructor(private auteurserv:AuteursService) { }
  ngOnInit(): void {
   // this.loadauteur()
  }
  // loadauteur(){
  //   return this.auteurserv.getAll().subscribe(data =>
  //     this.auteurs=data),
  //     (error: any) => console.log(error)

  // }
  ajoutAuteur = () => {
    this.auteurserv.create(this.auteurs).subscribe((data => {
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
