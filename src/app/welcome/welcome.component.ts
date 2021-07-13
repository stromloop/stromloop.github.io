import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FlexLayoutModule, MediaChange,MediaObserver } from "@angular/flex-layout";
import * as AOS from 'aos';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

@Input()deviceXs!:boolean;
@Input()deviceSm!:boolean;
@Input()deviceMd!:boolean;
@Input()deviceLg!:boolean;
@Input()deviceXl!:boolean;

mediaSub!: Subscription;

constructor(public mediaObserver:MediaObserver){

}
ngOnInit(){
  AOS.init();

   this.mediaSub=this.mediaObserver.media$.subscribe((result:MediaChange)=>{
     console.log(result.mqAlias);
     this.deviceXs=result.mqAlias ==='xs' ? true:false;
     this.deviceSm=result.mqAlias === 'sm' ? true:false;
     this.deviceMd=result.mqAlias === 'md' ? true:false;
     this.deviceLg=result.mqAlias === 'lg' ? true:false;
     this.deviceXl=result.mqAlias === 'xl' ? true:false;


  })
}

ngOnDestroy(){
  this.mediaSub.unsubscribe();
}
  scroll()
  {document.querySelector('#home')?.scrollIntoView({behavior:'smooth',block:'center'})}

}
