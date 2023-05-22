import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsDetilsComponent } from './products-detils.component';

describe('ProductsDetilsComponent', () => {
  let component: ProductsDetilsComponent;
  let fixture: ComponentFixture<ProductsDetilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsDetilsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsDetilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
