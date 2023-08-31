import { ElementRef } from '@angular/core';
import { TDeleteConfirmDirective } from './tdelete-confirm.directive';

describe('TDeleteConfirmDirective', () => {
  it('should create an instance', () => {
    let element!: ElementRef;
    element.nativeElement = '<button></button>'
    const directive = new TDeleteConfirmDirective(element);
    expect(directive).toBeTruthy();
  });
});
