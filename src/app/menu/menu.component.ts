import { Component, Input, OnInit } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input()deviceXs!:boolean;
  @Input()deviceSm!:boolean;
  
  
  mediaSub!: Subscription;
  
  constructor(public mediaObserver:MediaObserver){
  
  }
  ngOnInit(){
     this.mediaSub=this.mediaObserver.media$.subscribe((result:MediaChange)=>{
       console.log(result.mqAlias);
       this.deviceXs=result.mqAlias ==='xs' ? true:false;
       this.deviceSm=result.mqAlias === 'sm' ? true:false;
    })
  }
  
  ngOnDestroy(){
    this.mediaSub.unsubscribe();
  }
}
