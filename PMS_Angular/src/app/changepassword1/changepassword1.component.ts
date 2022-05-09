import { Component,Input, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-changepassword1',
  templateUrl: './changepassword1.component.html',
  styleUrls: ['./changepassword1.component.css']
})
export class Changepassword1Component implements OnInit {

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

  public data: Changepassword1Component[] = [

  ];
}
