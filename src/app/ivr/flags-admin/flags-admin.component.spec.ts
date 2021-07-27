import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagsAdminComponent } from './flags-admin.component';

describe('FlagsAdminComponent', () => {
  let component: FlagsAdminComponent;
  let fixture: ComponentFixture<FlagsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlagsAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlagsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
