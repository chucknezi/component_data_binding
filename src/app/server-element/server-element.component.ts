import { Component, OnInit, Input, ViewEncapsulation, SimpleChanges, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements 
OnInit,
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy
{
  @Input('srvElement') element: {type:string, name:string, content:string};
  @Input() name: string;

  constructor() { 
    console.log('constructor')
  }
  

  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges called!')
    console.log(changes)
  }

  ngOnInit(): void {
    console.log('ngOnInit Called');
  }

  ngDoCheck(){
    console.log('do check')
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit called!')
  }


  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called!')
  }

  ngAfterViewInit(){
    console.log('ngAfterContentInit called!')
  }


  ngAfterViewChecked(){
    console.log('ngAfterContentChecked called!')
  }

  ngOnDestroy(){
    console.log('ngOnDestroy called');
  }

}
