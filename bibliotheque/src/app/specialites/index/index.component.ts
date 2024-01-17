import { Component, OnInit, ViewChild } from '@angular/core';
import { SpecialitesService } from '../specialites.service';
import { MatSort } from '@angular/material/sort';
import { Specialites } from '../specialites';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent implements OnInit {
  //auteurs: Auteurs[] = [];
  columns: String[] = ['nomspecialite','_id'];
  constructor(public specialiteServ: SpecialitesService) { }
  specialites:any;
  @ViewChild(MatPaginator,{static : true}) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  ngOnInit(): void {
    this.specialiteServ.getAll().subscribe((data: Specialites[]) => {
      this.specialites = new MatTableDataSource<any>(data);
      this.specialites.paginator=this.paginator;
      this.specialites.sort=this.sort;
    })
  }
  filter(event: Event) {
    const filter = (event.target as HTMLInputElement).value;
    this.specialites.filter = filter.trim().toLowerCase();
    }
  deleteSpecialite(_id: object) {
    this.specialiteServ.delete(_id).subscribe(res => {  
    console.log(res);
    const data = this.specialites.filteredData.filter((item: { _id: object; 
    }) => item._id !== _id)
    this.specialites = new MatTableDataSource<any>(data)
    this.specialites.paginator = this.paginator;
    this.specialites.sort = this.sort;
    })
  }

}
