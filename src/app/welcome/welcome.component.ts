import { Component, OnInit,Renderer2 } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  showFiller = true;

  constructor(private render :Renderer2) { }

  ngOnInit(): void {
    var subheader = document.getElementById("subheader")

  }
  hidemenu(){
  }
  showmenu(){

  }
  scroll()
  {document.querySelector('#home')?.scrollIntoView({behavior:'smooth',block:'center'})}

}
