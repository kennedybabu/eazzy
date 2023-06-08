import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-landlords',
  templateUrl: './landlords.component.html',
  styleUrls: ['./landlords.component.scss']
})

export class LandlordsComponent implements AfterViewInit, OnInit { 
  displayedColumns: string[] = ['id', 'name', 'progress', 'fruit'];
  dataSource= new  MatTableDataSource<UserData>();



  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(){}


  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  ngOnInit(): void {
    this.dataSource.data = this.generateDummyData()
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  private generateDummyData(): UserData[] {
    // Generate dummy data using the FRUITS and NAMES arrays
    const data: UserData[] = [];
    for (let i = 0; i < 10; i++) {
      const user: UserData = {
        id: (i + 1).toString(),
        name: NAMES[Math.floor(Math.random() * NAMES.length)],
        progress: Math.floor(Math.random() * 100).toString(),
        fruit: FRUITS[Math.floor(Math.random() * FRUITS.length)],
      };
      data.push(user);
    }
    return data;
  }

}




export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}

/** Constants used to fill up our data base. */
const FRUITS: string[] = [
  'blueberry',
  'lychee',
  'kiwi',
  'mango',
  'peach',
  'lime',
  'pomegranate',
  'pineapple',
];
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];

