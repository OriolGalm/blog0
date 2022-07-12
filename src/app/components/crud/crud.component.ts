import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../shared/services/article.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  public dataSource: any;

  constructor(private articleSvc: ArticleService) { }

  ngOnInit(): void {
    this.articleSvc.getAllPosts().subscribe(posts => {this.dataSource = posts});
  }

}
