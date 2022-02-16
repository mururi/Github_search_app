import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHeadingStyle]'
})
export class HeadingStyleDirective {

  constructor(private elem: ElementRef) {
    this.elem.nativeElement.style.color="#FF764C";
  }

}
