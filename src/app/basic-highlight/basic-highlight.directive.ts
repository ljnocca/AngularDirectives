import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]' // recognized when it's added to an element
})

export class BasicHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }
}
