import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvComponent } from './conv.component';

describe('ConvComponent', () => {
  let component: ConvComponent;
  let fixture: ComponentFixture<ConvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
