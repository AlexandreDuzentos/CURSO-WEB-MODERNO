import { Directive } from '@angular/core';
import { ElementRef } from '@angular/core';

@Directive({
  selector: '[appRed]',
  standalone: true
})
export class RedDirective {

  constructor(private el: ElementRef<any>) {
       el.nativeElement.style.color = '#e35e6b'
   }
}
