import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeLocatorComponent } from './office-locator.component';

describe('OfficeLocatorComponent', () => {
  let component: OfficeLocatorComponent;
  let fixture: ComponentFixture<OfficeLocatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficeLocatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeLocatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
