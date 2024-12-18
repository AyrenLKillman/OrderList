import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopFiveComponent } from './top-five.component';

describe('TopFiveComponent', () => {
  let component: TopFiveComponent;
  let fixture: ComponentFixture<TopFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopFiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
