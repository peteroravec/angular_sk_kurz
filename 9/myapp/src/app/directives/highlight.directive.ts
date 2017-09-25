import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[Highlight]',
  host: {
    '(mouseover)': 'onHover()',
    '(mouseout)':  'basicStyle()'
  }
})
export class HighlightDirective implements OnInit {

  @Input() fontSize: number = 30;

  constructor(private elRef: ElementRef) { }

  ngOnInit() {

    //get font size by getAttribute
    console.log('font size:', this.elRef.nativeElement.getAttribute('fontSize'));

    //get inner text
    console.log('inner text:', this.elRef.nativeElement.innerText);

    this.basicStyle();
  }

  onHover() {
    this.elRef.nativeElement.style.color = '#439ccc';
    this.elRef.nativeElement.style.backgroundColor = '#ff84f3';
    this.elRef.nativeElement.style.fontSize = this.fontSize + 'px';
  }

  basicStyle() {
    this.elRef.nativeElement.style.color = '#cccb07';
    this.elRef.nativeElement.style.backgroundColor = '#fffd55';
    this.elRef.nativeElement.style.fontSize = this.fontSize + 'px';
  }

}
