import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Specialites } from '../specialites';
import { SpecialitesService } from '../specialites.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent implements OnInit {

  @ViewChild('myModal') myModal!: ElementRef;
  display = "none";
  specialites :Specialites = new Specialites()
  constructor(private specialitesserv:SpecialitesService) { }
  ngOnInit(): void {
   // this.loadauteur()
  }
  // loadauteur(){
  //   return this.specialitesserv.getAll().subscribe(data =>
  //     this.specialites=data),
  //     (error: any) => console.log(error)

  // }
  ajoutSpecialite = () => {
    this.specialitesserv.create(this.specialites).subscribe((data => {
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
