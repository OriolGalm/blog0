import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { ArticleI } from 'src/app/shared/models/article.interface';
import { ArticleService } from 'src/app/shared/services/article.service';
import { FileItem } from '../../../shared/models/file-items';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }
  };

  public image: any = [];
  public newPostForm!: FormGroup;

  constructor(private ArticleSvc: ArticleService, private router: Router, private fb: FormBuilder) {
    this.initForm();
   }

  private initForm(): void{ 
    this.newPostForm = this.fb.group ({
    titol: ['', Validators.required],
    imatge1: ['', Validators.required],
    alt1: ['', Validators.required],
    text1: ['', Validators.required],
    imatge2: ['', Validators.required],
    alt2: ['', Validators.required],
    text2: ['', Validators.required],
    imatge3: ['', Validators.required],
    alt3: ['', Validators.required],
    text3: ['', Validators.required]
  })
}

  ngOnInit(): void {
  }

  public newPost(post: ArticleI){
    
    this.ArticleSvc.preAddAndUpdatePost(post, this.image);
    this.navigationExtras.state = post;
    this.router.navigate(['admin/edit'], this.navigationExtras);
  //  this.newPostForm.reset();
  }

  public handleImage1(event: any){
  /*  for(var i=0; i<event.target.files.length; i++){
      this.image.push(event.target.files[i]);
    }*/
    this.image = event.target.files[0] ;
  //  this.varisImage.push(image);
    console.log("Imatge:", this.image);
  }
  public handleImage2(event: any){
      this.image = event.target.files[0] ;  
      console.log("Imatge:", this.image);
    }
  public handleImage3(event: any){
    this.image = event.target.files[0] ;
    console.log("Imatge:", this.image);
    }

}
