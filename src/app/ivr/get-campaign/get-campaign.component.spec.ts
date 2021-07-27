import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCampaignComponent } from './get-campaign.component';

describe('GetCampaignComponent', () => {
  let component: GetCampaignComponent;
  let fixture: ComponentFixture<GetCampaignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetCampaignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
