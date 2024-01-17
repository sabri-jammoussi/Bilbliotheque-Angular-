import { Component, OnInit,ViewChild } from '@angular/core';
import { Auteurs } from '../auteurs';
import { AuteursService } from '../auteurs.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent implements OnInit {
  //auteurs: Auteurs[] = [];
  columns: String[] = ['nomauteur', 'email', 'numtel','_id'];

  constructor(public auteursService: AuteursService) { }
  auteurs:any;
  @ViewChild(MatPaginator,{static : true}) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  ngOnInit(): void {
    this.auteursService.getAll().subscribe((data: Auteurs[]) => {
      this.auteurs = new MatTableDataSource<any>(data);
      this.auteurs.paginator=this.paginator;
      this.auteurs.sort=this.sort;
    })
  }
  filter(event: Event) {
    const filter = (event.target as HTMLInputElement).value;
    this.auteurs.filter = filter.trim().toLowerCase();
    }
  deleteAuteur(_id: object) {
    this.auteursService.delete(_id).subscribe(res => {  
    console.log(res);
    const data = this.auteurs.filteredData.filter((item: { _id: object; 
    }) => item._id !== _id)
    this.auteurs = new MatTableDataSource<any>(data)
    this.auteurs.paginator = this.paginator;
    this.auteurs.sort = this.sort;
    })
  }

}
