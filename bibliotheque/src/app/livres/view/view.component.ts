import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { LivresService } from '../livres.service';
import { Livres } from '../livres';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent implements OnInit{
  ngOnInit(): void {
    this.livreServ.find(this.livreId).subscribe((data: any) => {
      this.livres = data;
       });
  }
  @Input() livreId: object;
  @ViewChild('myModal') myModal!: ElementRef;
  display = "none";
  livres:Livres=new Livres();
  constructor(private livreServ :LivresService){}
    
  updateAuteur=()=>{
    this.livreServ.update(this.livres._id,this.livres).subscribe((data=>{
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

