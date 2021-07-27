import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IvrExitRulesComponent } from './ivr-exit-rules.component';

describe('IvrExitRulesComponent', () => {
  let component: IvrExitRulesComponent;
  let fixture: ComponentFixture<IvrExitRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IvrExitRulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IvrExitRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
