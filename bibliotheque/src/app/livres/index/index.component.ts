import { Component, OnInit, ViewChild } from '@angular/core';
import { LivresService } from '../livres.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Livres } from '../livres';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent implements OnInit {
  //auteurs: Auteurs[] = [];
  columns: String[] = [ 'titre', 'anneedition','prix','qtestock','couverture','_id'];

  constructor(public livreServ: LivresService) { }
  livres:any;
  @ViewChild(MatPaginator,{static : true}) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  ngOnInit(): void {
    this.livreServ.getAll().subscribe((data: Livres[]) => {
      this.livres = new MatTableDataSource<any>(data);
      this.livres.paginator=this.paginator;
      this.livres.sort=this.sort;
    })
  }
  filter(event: Event) {
    const filter = (event.target as HTMLInputElement).value;
    this.livres.filter = filter.trim().toLowerCase();
    }
  deleteLivre(_id: object) {
    this.livreServ.delete(_id).subscribe(res => {  
    console.log(res);
    const data = this.livres.filteredData.filter((item: { _id: object; 
    }) => item._id !== _id)
    this.livres = new MatTableDataSource<any>(data)
    this.livres.paginator = this.paginator;
    this.livres.sort = this.sort;
    })
  }

}