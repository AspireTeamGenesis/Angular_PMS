import { Component, Input, OnInit } from '@angular/core';
//import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }

}
//   @Input() artsrc: string = " ";
//   //data: any;
//   totalLength: any;

//   constructor(private http: HttpClient) { }

//   ngOnInit(): void {
//     this.http
//       .get<any>(this.artsrc)
//       .subscribe((data) => {
//         this.data = data;
//         this.totalLength = data.length;
//         console.log(data);
//       });
//   }

//   public data: HomeComponent[] = [

//   ];
// }
