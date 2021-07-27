import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageAdministrationComponent } from './message-administration.component';

describe('MessageAdministrationComponent', () => {
  let component: MessageAdministrationComponent;
  let fixture: ComponentFixture<MessageAdministrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageAdministrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
