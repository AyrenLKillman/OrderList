import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastFiveComponent } from './last-five.component';

describe('LastFiveComponent', () => {
  let component: LastFiveComponent;
  let fixture: ComponentFixture<LastFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LastFiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
