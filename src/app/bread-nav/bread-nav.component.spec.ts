import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadNavComponent } from './bread-nav.component';

describe('BreadNavComponent', () => {
  let component: BreadNavComponent;
  let fixture: ComponentFixture<BreadNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
