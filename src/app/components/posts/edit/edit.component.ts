import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ArticleI } from 'src/app/shared/models/article.interface';
import { ArticleService } from 'src/app/shared/services/article.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  private image!: any;
  public imageOriginal: any;

  public article: any = null;
//  public post$!: Observable<ArticleI>;
//  public post!: ArticleI;
  editPostForm!: FormGroup;
//  novesImatges!: FormGroup;

  constructor(private router: Router, 
  //  private route: ActivatedRoute, 
    private fb: FormBuilder,
    private articleSvc: ArticleService) {
    const navigation = router.getCurrentNavigation();
    this.article = navigation?.extras?.state;
    this.reload();
    this.initForm();
   }
  
  private initForm(){
    this.editPostForm = this.fb.group ({
      id: ['', Validators.required],
      titol: ['', Validators.required],
      imatge1: ['', Validators.required],
      alt1: ['', Validators.required],
      text1: ['', Validators.required],
      text2: ['', Validators.required],
      text3: ['', Validators.required]
    })/*
    this.novesImatges = this.fb.group({
      imatge2: ['', Validators.required],
      alt2: ['', Validators.required],
      imatge3: ['', Validators.required],
      alt3: ['', Validators.required]
  })*/
  }

  ngOnInit(): void {
  /*  const idPost = this.route.snapshot.params.id;
    this.post = this.articleSvc.getOnePost(idPost);*/
    this.image = this.imageOriginal;
    if(this.imageOriginal !== ''){
      this.imageOriginal = this.article.imatge1;
    }

    if(typeof this.article === 'undefined'){
      this.router.navigate(['admin/new']);
    }else{
      this.editPostForm.patchValue(this.article);
    }
  }

  reload(){
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
   // this.router.navigate(['/admin/edit']);
  }

  toNew(){
    this.router.navigate(['admin/new']);
  }

  editPost(post: ArticleI){
    if(this.image === this.imageOriginal){
      this.article.imatge1 = this.imageOriginal;
      this.articleSvc.editPost(post);
    }else{
      this.articleSvc.editPost(post, this.image);
    }
  }

  handleImage(event: any): void{
  /*  for(var i=0; i<event.target.files.length; i++){
      this.image = event.target.files[i];
    }*/
    this.image = event.target.files[0];
  }
}
