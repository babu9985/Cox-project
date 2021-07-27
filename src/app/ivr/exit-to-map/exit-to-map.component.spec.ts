import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExitToMapComponent } from './exit-to-map.component';

describe('ExitToMapComponent', () => {
  let component: ExitToMapComponent;
  let fixture: ComponentFixture<ExitToMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExitToMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExitToMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
