import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DnisComponent } from './dnis.component';

describe('DnisComponent', () => {
  let component: DnisComponent;
  let fixture: ComponentFixture<DnisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DnisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DnisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
