import { Component, OnInit, ViewChild, ElementRef, Input } from  '@angular/core';
import { FilePondComponent } from 'ngx-filepond';
import { FilePondOptions } from 'filepond';
import { Livres } from '../livres';
import { LivresService } from '../livres.service';
import { Auteurs } from 'src/app/auteurs/auteurs';
import { Specialites } from 'src/app/specialites/specialites';
import { Editeurs } from 'src/app/editeurs/editeurs';
import { AuteursService } from 'src/app/auteurs/auteurs.service';
import { SpecialitesService } from 'src/app/specialites/specialites.service';
import { EditeursService } from 'src/app/editeurs/editeurs.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit {
  @Input() LivreId: object;
  @ViewChild('myModal') myModal!: ElementRef;
  @ViewChild('myPond') myPond: FilePondComponent;
  display = "none";
  livres: Livres = new Livres();
  auteurs!:Auteurs[];
  specialites!:Specialites[];
  editeurs!:Editeurs[];
  constructor(private livreServ:LivresService, private auteurServ:AuteursService,private specialiteServ :SpecialitesService,private editeurServ:EditeursService) { }
  ngOnInit() {
    this.loadauteur()
    this.loadspecialite()
    this.loadediteur()
    this.livreServ.find(this.LivreId).subscribe(data => {
      this.livres = data;
      this.updatePondFiles();
    });
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
  updateLivre = () => {
    this.livreServ.update(this.livres._id, this.livres).subscribe((data => {
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
  pondFiles: FilePondOptions["files"]
  updatePondFiles() {
    this.pondFiles = [
      {
        source: this.livres.couverture,
        options: {
          type: 'local'
        },
      },
    ];
  }
  pondOptions = {
    class: 'my-filepond',
    multiple: false,
    labelIdle: 'Drop files here',
    acceptedFileTypes: 'image/jpeg, image/png',
    server: {
      load: (source: any, load: any, error: any, progress: any, abort: any,
        headers: any) => {
        if (typeof source === 'string' && source !== '') {
          var myRequest = new Request(source);
          fetch(myRequest).then(function (response) {
            response.blob().then(function (myBlob) {
              load(myBlob);
            });
          });
        }
        else {
          error('Invalid URL');
        }
      },
      process: (fieldName: any, file: any, metadata: any, load: any, error: any,
        progress: any, abort: any) => {
        const data = new FormData();
        data.append('file', file);
        data.append('upload_preset', 'Ecommerce_cloudinary');
        data.append('cloud_name', 'iset-sfax')
        data.append('public_id', file.name)
        this.livreServ
          .uploadSignature(data)
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