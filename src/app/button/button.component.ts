import { Input, Component, ViewEncapsulation, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'custom-button',
  template: `<button (click)="handleClick()">{{label}}</button>`,
  styleUrls: ['button.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ButtonComponent {
  @Input()
  label = 'default label';
  @Output()
  action = new EventEmitter<number>();
  private clicksCounter = 0;

  handleClick() {
    this.clicksCounter++;
    this.action.emit(this.clicksCounter);
  }
}
