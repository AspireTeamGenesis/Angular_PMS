import { Component, Input, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from'@angular/common/http';

@Component({
  selector: 'app-educationaldetails',
  templateUrl: './educationaldetails.component.html',
  styleUrls: ['./educationaldetails.component.css']
})
export class EducationaldetailsComponent implements OnInit {

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

  public data: EducationaldetailsComponent[] = [

  ];
}
