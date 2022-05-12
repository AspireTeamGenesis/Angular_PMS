import { Component,Input, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Skilldetails } from 'models/skilldetails';
@Component({
  selector: 'app-skilldetails',
  templateUrl: './skilldetails.component.html',
  styleUrls: ['./skilldetails.component.css']
})
export class SkilldetailsComponent implements OnInit {

  //   data: any;
  //   totalLength: any;

  //   constructor(private http: Httpclient) { }

  //   ngOnInit(): void {
  //     this.http
  //     .get<any>(' ')
  //     .subscribe((data) =>{
  //       this.data = data;
  //       this.totalLength = data.length;
  //     });
  //   }
  // }

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

  public data: Skilldetails[] = [

  ];
}
