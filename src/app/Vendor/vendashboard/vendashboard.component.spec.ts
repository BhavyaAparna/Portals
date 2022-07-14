import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendashboardComponent } from './vendashboard.component';

describe('VendashboardComponent', () => {
  let component: VendashboardComponent;
  let fixture: ComponentFixture<VendashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
