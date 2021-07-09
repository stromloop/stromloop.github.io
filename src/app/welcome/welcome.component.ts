import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

@Input()deviceXs!:boolean;
@Input()deviceSm!:boolean;


  constructor() { }

  ngOnInit(): void {

  }
  scroll()
  {document.querySelector('#home')?.scrollIntoView({behavior:'smooth',block:'center'})}

}
