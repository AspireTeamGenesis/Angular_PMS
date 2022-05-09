import { Component,Input, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Viewprofile } from 'models/viewprofile';
@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent implements OnInit {
  @Input() artsrc: string = " ";
  //data: any;
  totalLength: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http
      .get<any>(this.artsrc)
      .subscribe((data) => {
        this.data = data;
        this.totalLength = data.length;
        console.log(data);
      });
  }

  public data: Viewprofile[] = [];
}

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
