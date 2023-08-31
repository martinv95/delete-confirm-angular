import {
  Directive,
  ElementRef,
  Input,
  HostListener,
  Output,
  EventEmitter,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[terreDeleteConfirm]',
})
export class TDeleteConfirmDirective {
  @Output()
  public delete = new EventEmitter<void>();

  // @HostBinding('class')
  // elementClass = 'custom-theme';

  private clickCount:number=0;

  private trashIcon =
    'url("data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjEwMDAiIHdpZHRoPSI4NzUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMjgxLjI5NmwwIC02OC4zNTVxMS45NTMgLTM3LjEwNyAyOS4yOTUgLTYyLjQ5NnQ2NC40NDkgLTI1LjM4OWw5My43NDQgMGwwIC0zMS4yNDhxMCAtMzkuMDYgMjcuMzQyIC02Ni40MDJ0NjYuNDAyIC0yNy4zNDJsMzEyLjQ4IDBxMzkuMDYgMCA2Ni40MDIgMjcuMzQydDI3LjM0MiA2Ni40MDJsMCAzMS4yNDhsOTMuNzQ0IDBxMzcuMTA3IDAgNjQuNDQ5IDI1LjM4OXQyOS4yOTUgNjIuNDk2bDAgNjguMzU1cTAgMjUuMzg5IC0xOC41NTMgNDMuOTQzdC00My45NDMgMTguNTUzbDAgNTMxLjIxNnEwIDUyLjczMSAtMzYuMTMgODguODYydC04OC44NjIgMzYuMTNsLTQ5OS45NjggMHEtNTIuNzMxIDAgLTg4Ljg2MiAtMzYuMTN0LTM2LjEzIC04OC44NjJsMCAtNTMxLjIxNnEtMjUuMzg5IDAgLTQzLjk0MyAtMTguNTUzdC0xOC41NTMgLTQzLjk0M3ptNjIuNDk2IDBsNzQ5Ljk1MiAwbDAgLTYyLjQ5NnEwIC0xMy42NzEgLTguNzg5IC0yMi40NnQtMjIuNDYgLTguNzg5bC02ODcuNDU2IDBxLTEzLjY3MSAwIC0yMi40NiA4Ljc4OXQtOC43ODkgMjIuNDZsMCA2Mi40OTZ6bTYyLjQ5NiA1OTMuNzEycTAgMjUuMzg5IDE4LjU1MyA0My45NDN0NDMuOTQzIDE4LjU1M2w0OTkuOTY4IDBxMjUuMzg5IDAgNDMuOTQzIC0xOC41NTN0MTguNTUzIC00My45NDNsMCAtNTMxLjIxNmwtNjI0Ljk2IDBsMCA1MzEuMjE2em02Mi40OTYgLTMxLjI0OGwwIC00MDYuMjI0cTAgLTEzLjY3MSA4Ljc4OSAtMjIuNDZ0MjIuNDYgLTguNzg5bDYyLjQ5NiAwcTEzLjY3MSAwIDIyLjQ2IDguNzg5dDguNzg5IDIyLjQ2bDAgNDA2LjIyNHEwIDEzLjY3MSAtOC43ODkgMjIuNDZ0LTIyLjQ2IDguNzg5bC02Mi40OTYgMHEtMTMuNjcxIDAgLTIyLjQ2IC04Ljc4OXQtOC43ODkgLTIyLjQ2em0zMS4yNDggMGw2Mi40OTYgMGwwIC00MDYuMjI0bC02Mi40OTYgMGwwIDQwNi4yMjR6bTMxLjI0OCAtNzE4LjcwNGwzNzQuOTc2IDBsMCAtMzEuMjQ4cTAgLTEzLjY3MSAtOC43ODkgLTIyLjQ2dC0yMi40NiAtOC43ODlsLTMxMi40OCAwcS0xMy42NzEgMCAtMjIuNDYgOC43ODl0LTguNzg5IDIyLjQ2bDAgMzEuMjQ4em0xMjQuOTkyIDcxOC43MDRsMCAtNDA2LjIyNHEwIC0xMy42NzEgOC43ODkgLTIyLjQ2dDIyLjQ2IC04Ljc4OWw2Mi40OTYgMHExMy42NzEgMCAyMi40NiA4Ljc4OXQ4Ljc4OSAyMi40NmwwIDQwNi4yMjRxMCAxMy42NzEgLTguNzg5IDIyLjQ2dC0yMi40NiA4Ljc4OWwtNjIuNDk2IDBxLTEzLjY3MSAwIC0yMi40NiAtOC43ODl0LTguNzg5IC0yMi40NnptMzEuMjQ4IDBsNjIuNDk2IDBsMCAtNDA2LjIyNGwtNjIuNDk2IDBsMCA0MDYuMjI0em0xNTYuMjQgMGwwIC00MDYuMjI0cTAgLTEzLjY3MSA4Ljc4OSAtMjIuNDZ0MjIuNDYgLTguNzg5bDYyLjQ5NiAwcTEzLjY3MSAwIDIyLjQ2IDguNzg5dDguNzg5IDIyLjQ2bDAgNDA2LjIyNHEwIDEzLjY3MSAtOC43ODkgMjIuNDZ0LTIyLjQ2IDguNzg5bC02Mi40OTYgMHEtMTMuNjcxIDAgLTIyLjQ2IC04Ljc4OXQtOC43ODkgLTIyLjQ2em0zMS4yNDggMGw2Mi40OTYgMGwwIC00MDYuMjI0bC02Mi40OTYgMGwwIDQwNi4yMjR6Ii8+PC9zdmc+")';

  constructor(private element: ElementRef) {
    this.defaultSettings();
  }

  private defaultSettings() {
    this.highlight('#e48a8a');
    console.warn(this.element.nativeElement.style.confirm);
    this.setBackground();
    this.element.nativeElement.style['border-radius'] = '3px'
    this.element.nativeElement.style.margin = '5px';
    this.element.nativeElement.style.border = 0;
    this.element.nativeElement.style.height = '40px';
    this.element.nativeElement.style.width = '40px';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('#e02f2f');
    this.element.nativeElement.style.innerText="Realy?"
    this.setBackground();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('#e48a8a');
    this.setBackground();
    this.element.nativeElement.style.width = '40px';
    this.element.nativeElement.style['background-image'] = this.trashIcon;
    this.element.nativeElement.innerText='';
    this.clickCount = 0;
  }

  @HostListener('click', ['$event.target'])
  onClick(btn: any) {
    if(this.clickCount == 0){
      this.element.nativeElement.innerText='DELETE?';
      this.element.nativeElement.style.width = '80px';
      this.element.nativeElement.style['background-image'] = '';
      this.clickCount++;
    }else if(this.clickCount == 1){
      this.element.nativeElement.innerText='Realy?';
      this.clickCount++;
    } else {
      this.element.nativeElement.style.width = '40px';
      this.element.nativeElement.style['background-image'] = this.trashIcon;
      this.element.nativeElement.innerText='';
      this.delete.emit();
    }

  }

  private highlight(color: string) {
    this.element.nativeElement.style.background = color;
  }

  private setBackground(){
    this.element.nativeElement.style['background-image'] = this.trashIcon;
    this.element.nativeElement.style['background-size'] = '20px 24px';
    this.element.nativeElement.style['background-repeat'] = 'no-repeat';
    this.element.nativeElement.style['background-position']='center';
  }
}
