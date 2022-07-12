import { Component, OnInit, Inject } from '@angular/core';
import { ArticleService } from 'src/app/shared/services/article.service';
import { TableComponent } from 'src/app/shared/table/table.component';

@Component({
  selector: 'app-capsa',
  templateUrl: './capsa.component.html',
  styleUrls: ['./capsa.component.css']
})
export class CapsaComponent implements OnInit {

//  public article: any = this.data;
  public post: any;

  constructor(@Inject(TableComponent) public data: any) { }

  ngOnInit(): void {
  //  console.log(this.data.onEdit(this.post));
  }

  

}
