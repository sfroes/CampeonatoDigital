import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampeonatoListComponent } from './campeonato-list.component';

describe('CampeonatoReadComponent', () => {
  let component: CampeonatoListComponent;
  let fixture: ComponentFixture<CampeonatoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampeonatoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampeonatoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
