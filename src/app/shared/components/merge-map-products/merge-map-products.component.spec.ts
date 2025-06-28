import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeMapProductsComponent } from './merge-map-products.component';

describe('MergeMapProductsComponent', () => {
  let component: MergeMapProductsComponent;
  let fixture: ComponentFixture<MergeMapProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MergeMapProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MergeMapProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
