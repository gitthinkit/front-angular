import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConvComponent } from './add-conv.component';

describe('AddConvComponent', () => {
  let component: AddConvComponent;
  let fixture: ComponentFixture<AddConvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddConvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddConvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
