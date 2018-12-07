import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditConvComponent } from './edit-conv.component';

describe('EditConvComponent', () => {
  let component: EditConvComponent;
  let fixture: ComponentFixture<EditConvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditConvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditConvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
