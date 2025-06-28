import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeProduct1Component } from './merge-product1.component';

describe('MergeProduct1Component', () => {
  let component: MergeProduct1Component;
  let fixture: ComponentFixture<MergeProduct1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MergeProduct1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MergeProduct1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
