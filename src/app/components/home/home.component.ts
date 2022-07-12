import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../shared/services/article.service';
import { ArticleI } from '../../shared/models/article.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public article$!: Observable<ArticleI[]>;

  constructor(private articleSvc: ArticleService) { }

  ngOnInit() {
  //  return this.articleSvc.getAllPosts().subscribe(post => console.log(post));
    this.article$ = this.articleSvc.getAllPosts();
  }

}
