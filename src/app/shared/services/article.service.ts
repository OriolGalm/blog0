import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ArticleI } from '../models/article.interface';
import { FileI } from '../models/file.interface';
import { FileItem } from '../models/file-items';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  //public post$: Observable<ArticleI[]>;
  private postsCollection!: AngularFirestoreCollection<ArticleI>;
  private filePath: any;
  private downloadURL!: Observable<string>;

  constructor(private afs: AngularFirestore, private storage: AngularFireStorage, private router: Router) {
    this.postsCollection = afs.collection<ArticleI>('posts');
   }

  public getAllPosts():Observable<ArticleI[]>{
    return this.postsCollection
    .snapshotChanges()
    .pipe(
      map(actions => 
        actions.map(a =>{
          const data = a.payload.doc.data() as ArticleI;
          const id = a.payload.doc.id;
          return { id, ...data };
      }))
    );
  }

  public getOnePost(id: ArticleI):any{
    return this.afs.doc<ArticleI>(`posts/${id}`).valueChanges();
  }

  public editPost(post: ArticleI, newImage?: FileI){
    if(newImage){
      return this.uploadImage(post, newImage);
    }else
      return this.postsCollection.doc(post.id).update(post);
  }

  public deletePost(post: ArticleI){
    this.postsCollection.doc(post.id).delete();
    return this.router.navigate(['admin/new']);
  }

  private savePost(post: ArticleI){
    const postObj: ArticleI = {
      titol: post.titol,
      imatge1: this.downloadURL,
      fileRef: this.filePath,
      alt1: post.alt1,
      text1: post.text1,
      imatge2: this.downloadURL,
      alt2: post.alt1,
      text2: post.text2,
      imatge3: this.downloadURL,
      alt3: post.alt1,
      text3: post.text3
    };
    if(post.id){
      return this.postsCollection.doc(post.id).update(postObj);
    }else
      return this.postsCollection.add(postObj);
  }

  private uploadImage(post: ArticleI, image: FileI){
  /*  for(const item of image){
      this.filePath = `images/${item.name}`;
      const fileRef = this.storage.ref(this.filePath);
      const task = this.storage.upload(this.filePath, item.file);
      task.snapshotChanges()
      .pipe(
        finalize(() => {
          item.downloadURL = fileRef.getDownloadURL();
        })
      ).subscribe();
    }
    this.savePost(post);*/
    
    this.filePath = `images/${image.name}`;
    const fileRef = this.storage.ref(this.filePath);
    const task = this.storage.upload(this.filePath, image);
    task.snapshotChanges()
    .pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe(urlImage => {
          this.downloadURL = urlImage;
          this.savePost(post);
          console.log("Imatge:", image);
        })
      })
    ).subscribe();
  }

  public preAddAndUpdatePost(post: ArticleI, image?:  FileI): void{
    if(image){
      this.uploadImage(post, image);
    }else{
      this.savePost(post);
    }
  }
}
