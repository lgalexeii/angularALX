import { Directive,Input, OnInit,HostListener,ElementRef,Renderer } from '@angular/core';

@Directive({
  selector: '[appAyuda]'
})
export class AyudaDirective implements OnInit {
  @Input() appAyuda:string;

  @HostListener("click")
  putBorder()  {
     console.log(`Click on  => "${this.appAyuda}"`);
    this.renderer.setElementStyle(this.elRef.nativeElement,"border","2px solid #ccc" );
  }

  constructor(private elRef:ElementRef,private renderer:Renderer) {
    console.log("Nice directive!!");
   }

   ngOnInit(){
     console.log(`I have its value => "${this.appAyuda}"`);
   }

}
