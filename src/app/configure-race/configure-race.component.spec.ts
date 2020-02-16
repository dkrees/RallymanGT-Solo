import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureRaceComponent } from './configure-race.component';

describe('ConfigureRaceComponent', () => {
  let component: ConfigureRaceComponent;
  let fixture: ComponentFixture<ConfigureRaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigureRaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigureRaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
