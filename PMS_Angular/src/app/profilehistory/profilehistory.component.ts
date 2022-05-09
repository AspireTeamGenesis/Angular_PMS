import { Component,Input, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Profilehistory } from 'models/profilehistory';

@Component({
  selector: 'app-profilehistory',
  templateUrl: './profilehistory.component.html',
  styleUrls: ['./profilehistory.component.css']
})
export class ProfilehistoryComponent implements OnInit {

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

  public data: Profilehistory[] = [

  ];
}
