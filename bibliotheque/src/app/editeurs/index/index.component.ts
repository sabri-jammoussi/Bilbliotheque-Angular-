import { Component, OnInit, ViewChild } from '@angular/core';
import { EditeursService } from '../editeurs.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Editeurs } from '../editeurs';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent implements OnInit {
  //auteurs: Auteurs[] = [];
  columns: String[] = ['maisonedit','siteweb','email','_id'];
  constructor(public editeurServ: EditeursService) { }
  editeurs:any;
  @ViewChild(MatPaginator,{static : true}) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  ngOnInit(): void {
    this.editeurServ.getAll().subscribe((data: Editeurs[]) => {
      this.editeurs = new MatTableDataSource<any>(data);
      this.editeurs.paginator=this.paginator;
      this.editeurs.sort=this.sort;
    })
  }
  filter(event: Event) {
    const filter = (event.target as HTMLInputElement).value;
    this.editeurs.filter = filter.trim().toLowerCase();
    }
  deleteEditeur(_id: object) {
    this.editeurServ.delete(_id).subscribe(res => {  
    console.log(res);
    const data = this.editeurs.filteredData.filter((item: { _id: object; 
    }) => item._id !== _id)
    this.editeurs = new MatTableDataSource<any>(data)
    this.editeurs.paginator = this.paginator;
    this.editeurs.sort = this.sort;
    })
  }

}
