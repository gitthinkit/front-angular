import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFournComponent } from './add-fourn.component';

describe('AddFournComponent', () => {
  let component: AddFournComponent;
  let fixture: ComponentFixture<AddFournComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFournComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFournComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
