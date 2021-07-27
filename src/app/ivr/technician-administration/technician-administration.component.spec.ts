import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicianAdministrationComponent } from './technician-administration.component';

describe('TechnicianAdministrationComponent', () => {
  let component: TechnicianAdministrationComponent;
  let fixture: ComponentFixture<TechnicianAdministrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicianAdministrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicianAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
