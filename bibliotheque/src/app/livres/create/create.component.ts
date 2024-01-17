import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Livres } from '../livres';
import { LivresService } from '../livres.service';
import { Auteurs } from 'src/app/auteurs/auteurs';
import { AuteursService } from 'src/app/auteurs/auteurs.service';
import { FilePondComponent } from 'ngx-filepond';
import { SpecialitesService } from 'src/app/specialites/specialites.service';
import { Specialites } from 'src/app/specialites/specialites';
import { Editeurs } from 'src/app/editeurs/editeurs';
import { EditeursService } from 'src/app/editeurs/editeurs.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent implements OnInit {

  @ViewChild('myModal') myModal!: ElementRef;
  @ViewChild('myPond') myPond: FilePondComponent;
  display = "none";
  livres:Livres = new Livres()
  auteurs!:Auteurs[];
  specialites!:Specialites[];
  editeurs!:Editeurs[];
  constructor(private livreServ:LivresService, private auteurServ:AuteursService,private specialiteServ :SpecialitesService,private editeurServ:EditeursService) { }
  ngOnInit(): void {
    this.loadauteur()
    this.loadspecialite()
    this.loadediteur()
  }
  loadediteur() {
    return this.editeurServ.getAll().subscribe(data =>
      this.editeurs=data),
      (error:any)=>console.log(error)
  }
  loadspecialite() {
    return this.specialiteServ.getAll().subscribe(data =>
      this.specialites=data),
      (error:any)=>console.log(error)

  }
  loadauteur() {
    return this.auteurServ.getAll().subscribe(data=>
      
      this.auteurs=data),
      (error:any)=>console.log(error)
  }
  // loadauteur(){
  //   return this.livreServ.getAll().subscribe(data =>
  //     this.livres=data),
  //     (error: any) => console.log(error)

  // }
  ajoutLivre = () => {
    this.livreServ.create(this.livres).subscribe((data => {
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
  // onFileChanged(event:any) {
  //   const imageData=event.target.files[0]
  //   const data=new FormData();
  //   data.append('file', imageData);
  //   data.append('upload_preset', 'Gestion Biblio');
  //   data.append('cloud_name', 'iset-sfax')
  //   data.append('public_id', imageData.name)
  //   this.livreServ.uploadSignature(data).subscribe((res) => {
  //   this.livres.couverture = res.url;
  //   })
  //   }
    
  pondOptions = {
    class: 'my-filepond',
    multiple: false,
    labelIdle: 'Drop files here',
    acceptedFileTypes: 'image/jpeg, image/png',
    server: {
      process: (fieldName: any, file: any, metadata: any, load: any, error: any,
        progress: any, abort: any) => {
        const data = new FormData();
        data.append('file', file);
        data.append('upload_preset', 'Ecommerce_cloudinary');
        data.append('cloud_name', 'iset-sfax')
        data.append('public_id', file.name)
        this.livreServ.uploadSignature(data)
          .subscribe({
            next: (res) => {
              this.livres.couverture = res.url;
              load(res);
            },
            error: (e) => {
              console.log(e);
              error(e);
              return () => {
                abort();
              };
            },
            complete: () => {
              console.log('done');
              return () => {
                abort();
              };
            }
          })
      },
      revert: (uniqueFileId: any, load: any, error: any) => {
        error('Error');
        load();

      },
    }
  }

}
