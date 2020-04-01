import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishRaceComponent } from './finish-race.component';

describe('FinishRaceComponent', () => {
  let component: FinishRaceComponent;
  let fixture: ComponentFixture<FinishRaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinishRaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishRaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
