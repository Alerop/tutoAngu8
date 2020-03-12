import { Component, OnInit, ViewChild, AfterViewInit, OnChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/core/interfaces/user-interface';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { UserService } from 'src/app/core/services/user.service';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

/** Constants used to fill up our data base. */
const COLORS: string[] = [
  'maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal',
  'aqua', 'blue', 'navy', 'black', 'gray'
];
const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  //table properties
  displayedColumns: string[];
  dataSource: MatTableDataSource<User>;

  //paginator properties
  pageSizeOptions: number[];

  //spinner properties
  color: ThemePalette;
  mode: ProgressSpinnerMode;
  value: number;
  showSpinner: boolean;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(public userService: UserService) {
    this.displayedColumns = ['id', 'name', 'username', 'email', 'phone', 'website'];
    this.color = 'accent';
    this.mode = 'indeterminate';
    this.value = 50;
    this.showSpinner = false;
    this.pageSizeOptions = [5, 10, 25, 100];
  }

  ngOnInit(): void {
    this.dataSource === undefined ? this.requestUsers() : console.warn(`The data is already loaded.`);

  }

  /**
   * @name requestUsers
   * @description
   * Request to the UserService from core.module the user data
   * 
   * @memberof HomePageComponent
   */
  requestUsers(): void {
    this.showSpinner = true;
    this.userService.getUsers().subscribe(
      (usersData) => {
        this.dataSource = new MatTableDataSource(usersData);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        console.log(usersData);
        this.showSpinner = false;

      },
      (usersError) => {
        console.error(`The request is failed: ${usersError}`);
        this.showSpinner = false;

      });
  }

  /**
   * @name applyFilter
   * @description
   * Function used to filter the data looking for some result that equal with the value in the input
   * 
   * @param {Event} event
   * @memberof HomePageComponent
   */
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
  };
}
