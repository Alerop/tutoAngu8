import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { PostService } from '../../services/post.service';
import { Post } from '../../interfaces/post-interface';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {
  //table properties
  displayedColumns: string[];
  dataSource: MatTableDataSource<Post>;

  //paginator properties
  pageSizeOptions: number[];

  //spinner properties
  color: ThemePalette;
  mode: ProgressSpinnerMode;
  value: number;
  showSpinner: boolean;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(public postService: PostService) {
    this.displayedColumns = ['id', 'title', 'body', 'userId'];
    this.color = 'accent';
    this.mode = 'indeterminate';
    this.value = 50;
    this.showSpinner = false;
    this.pageSizeOptions = [5, 10, 25, 100];
  }

  ngOnInit(): void {
    this.dataSource === undefined ? this.requestPosts() : console.warn(`The data is already loaded.`);

  }

  /**
   * @name requestPosts
   * @description
   * Request to the UserService from core.module the user data
   * 
   * @memberof PostPageComponent
   */
  requestPosts(): void {
    this.showSpinner = true;
    this.postService.getPosts().subscribe(
      (postsData: Post[]) => {
        this.dataSource = new MatTableDataSource(postsData);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        console.log(postsData);
        this.showSpinner = false;

      },
      (postsError: Error) => {
        console.error(`The request is failed: ${postsError}`);
        this.showSpinner = false;

      });
  }

  formPost(): void {
    console.log('should load a modal to fullfill a form to add new posts');
    this.showSpinner = true;
    //mockdata
    const title = "Awi, la mejor awita del mercado";
    const body = "Resulta que hace milenios existía el agua awi, lo que acabó marcado una nueva linguistica para el agua, la cual acabó transformandose en awita.";
    const userId = 1;

    this.postService.addPost(userId, title, body).subscribe(
      (postData) => {
        console.log('data: ', postData);
        this.requestPosts();
      },
      (postError: Error) => {
        console.error('error', postError);
        this.showSpinner = false;

      }
    );
  }

  getPost(idPost: number): void {
    this.postService.getPost(idPost).subscribe(
      (postData) => {
        console.log(postData);
      },
      (postError: Error) => {
        console.error(postError);
      }
    );
  }

  /**
   * @name applyFilter
   * @description
   * Function used to filter the data looking for some result that equal with the value in the input
   * 
   * @param {Event} event
   * @memberof PostPageComponent
   */
  applyFilter(event: Event) {//this function can be in shared inside of util folder
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
