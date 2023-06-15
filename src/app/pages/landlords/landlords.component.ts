import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle
} from "ng-apexcharts"; 
import { MatDialog } from '@angular/material/dialog';
import { CreateLandlordComponent } from 'src/app/components/create-landlord/create-landlord.component';



@Component({
  selector: 'app-landlords',
  templateUrl: './landlords.component.html',
  styleUrls: ['./landlords.component.scss']
})

export class LandlordsComponent implements AfterViewInit, OnInit { 
  displayedColumns: string[] = ['id', 'name', 'progress', 'fruit', 'action'];
  dataSource= new  MatTableDataSource<UserData>();


  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions!: ChartOptions;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private dialog: MatDialog){
    this.chartOptions = {
      series: [
        {
          name: "new landlords",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }
      ],
      chart: {
        height: 350,
        type: "bar"
      },
      title: {
        text: "total landlords"
      },
      xaxis: {
        categories: ["Jan", "Feb",  "Mar",  "Apr",  "May",  "Jun",  "Jul",  "Aug", "Sep"]
      }
    };
  }


  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  ngOnInit(): void {
    this.dataSource.data = this.generateDummyData() 
  }

  openDialog() {
    const dialogRef = this.dialog.open(CreateLandlordComponent, {
      minHeight: 'auto', width: '80%'
    }) 

    dialogRef.afterClosed().subscribe(result => {

    }) 
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


  assignStaff(row: any){
    console.log(row, 'clicked')
  }

}

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};


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

