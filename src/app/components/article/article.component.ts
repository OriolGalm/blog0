import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ArticleService } from 'src/app/shared/services/article.service';
import { ArticleI } from '../../shared/models/article.interface';
import { ArticleRoutingModule } from './article-routing.module';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  public post$!: Observable<ArticleI>;

  constructor(private route:ActivatedRoute, private articleSvc:ArticleService) { }

  ngOnInit(): void {
    const idPost = this.route.snapshot.params.id;
    this.post$ = this.articleSvc.getOnePost(idPost);
  }

}
