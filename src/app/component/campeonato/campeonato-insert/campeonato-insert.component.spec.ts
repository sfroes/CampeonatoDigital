import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampeonatoInsertComponent } from './campeonato-insert.component';

describe('CampeonatoInsertComponent', () => {
  let component: CampeonatoInsertComponent;
  let fixture: ComponentFixture<CampeonatoInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampeonatoInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampeonatoInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
