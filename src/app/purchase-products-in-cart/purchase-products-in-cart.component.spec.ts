import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseProductsInCartComponent } from './purchase-products-in-cart.component';

describe('PurchaseProductsInCartComponent', () => {
  let component: PurchaseProductsInCartComponent;
  let fixture: ComponentFixture<PurchaseProductsInCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseProductsInCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseProductsInCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
