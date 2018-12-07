import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFournComponent } from './edit-fourn.component';

describe('EditFournComponent', () => {
  let component: EditFournComponent;
  let fixture: ComponentFixture<EditFournComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFournComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFournComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
