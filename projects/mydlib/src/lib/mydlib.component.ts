import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-button',
  template: `
    <button nz-button nzType="primary" [nzDanger]="Danger">
      <ng-content></ng-content>
    </button>
  `,
  styles: [],
})
export class MydlibComponent implements OnInit {
  @Input() Danger: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
