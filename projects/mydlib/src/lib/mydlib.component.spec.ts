import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MydlibComponent } from './mydlib.component';

describe('MydlibComponent', () => {
  let component: MydlibComponent;
  let fixture: ComponentFixture<MydlibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MydlibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MydlibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
