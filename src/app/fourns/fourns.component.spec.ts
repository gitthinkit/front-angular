import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FournsComponent } from './fourns.component';

describe('FournsComponent', () => {
  let component: FournsComponent;
  let fixture: ComponentFixture<FournsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FournsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FournsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
