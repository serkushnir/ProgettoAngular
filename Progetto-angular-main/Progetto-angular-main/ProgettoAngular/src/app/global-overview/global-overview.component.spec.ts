import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalOverviewComponent } from './global-overview.component';

describe('GlobalOverviewComponent', () => {
  let component: GlobalOverviewComponent;
  let fixture: ComponentFixture<GlobalOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
