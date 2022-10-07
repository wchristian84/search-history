import { Directive, ElementRef, Renderer2, HostListener, OnInit} from '@angular/core';

@Directive({
  selector: '[appRandomBGColorDirective]'
})
export class RandomBGColorDirectiveDirective implements OnInit{

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', this.randomColorGenerator())
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', this.randomColorGenerator())
  }
  private randomColorGenerator () {
    return `#${Math.floor(Math.random()*16777215).toString(16)}`
  }
}
