import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailProductAdminComponent } from './detail-product-admin.component';

describe('DetailProductAdminComponent', () => {
  let component: DetailProductAdminComponent;
  let fixture: ComponentFixture<DetailProductAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailProductAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailProductAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
