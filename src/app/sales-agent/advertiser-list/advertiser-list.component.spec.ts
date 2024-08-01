import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertiserListComponent } from './advertiser-list.component';

describe('AdvertiserListComponent', () => {
  let component: AdvertiserListComponent;
  let fixture: ComponentFixture<AdvertiserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvertiserListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvertiserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
