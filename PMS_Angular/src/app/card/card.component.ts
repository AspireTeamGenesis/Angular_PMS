import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
 
  totalLength:any;
  page: number = 1;
  constructor() { }

  ngOnInit(): void {

  }
  cards: any[]= [{
     name:'Sam',
     designation:'Module Lead',
     reportingPerson:'Vijay',
     status:'Approved',
     profileImage:'./assets/img/profileImage.png'
  },{
    name:'Aju',
     designation:'SSE',
     reportingPerson:'Ram',
     status:'Approved',
     profileImage:'./assets/img/profileImage.png'
  },{
    name:'Aju',
     designation:'SSE',
     reportingPerson:'Ram',
     status:'Approved',
     profileImage:'./assets/img/profileImage.png'
  },{
    name:'Aju',
     designation:'SSE',
     reportingPerson:'Ram',
     status:'Approved',
     profileImage:'./assets/img/profileImage.png'
  },{
    name:'Aju',
     designation:'SSE',
     reportingPerson:'Ram',
     status:'Approved',
     profileImage:'./assets/img/profileImage.png'
  },{
    name:'Aju',
     designation:'SSE',
     reportingPerson:'Ram',
     status:'Approved',
     profileImage:'./assets/img/profileImage.png'
  }]

}
