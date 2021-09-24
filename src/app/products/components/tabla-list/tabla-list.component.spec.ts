import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaListComponent } from './tabla-list.component';

describe('TablaListComponent', () => {
  let component: TablaListComponent;
  let fixture: ComponentFixture<TablaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
