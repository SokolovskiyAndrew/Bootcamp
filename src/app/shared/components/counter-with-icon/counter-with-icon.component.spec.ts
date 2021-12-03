import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterWithIconComponent } from './counter-with-icon.component';

describe('CounterWithIconComponent', () => {
  let component: CounterWithIconComponent;
  let fixture: ComponentFixture<CounterWithIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterWithIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterWithIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
