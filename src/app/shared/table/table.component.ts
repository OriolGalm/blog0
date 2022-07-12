import { Component, OnInit, ViewChild, AfterViewInit, Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ArticleI } from '../models/article.interface';
import { ArticleService } from '../services/article.service';
import Swal from 'sweetalert2'
import { NavigationExtras, Router } from '@angular/router';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Injectable()

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit, AfterViewInit  {

  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }
  };

    displayedColumns: string[] = [ 'titol', 'borrar'];
    dataSource = new MatTableDataSource();

    @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private articleSvc: ArticleService, private router: Router) {
  }

  ngOnInit() { 
    this.articleSvc.getAllPosts().subscribe(posts => this.dataSource.data = posts);
  }

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onDelete(post: ArticleI){
    Swal.fire({
      title: 'Estàs segur?',
      text: "No es podrà desfer aquesta acció!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, borra!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.articleSvc.deletePost(post);
        Swal.fire(
          'Borrat!',
          'El fitxer ha estat borrat.',
          'success'
        )
      }
    })
  }

  onEdit(post: any){
    this.navigationExtras.state = post;
    this.router.navigate(['/admin/edit'], this.navigationExtras);
  }

}
