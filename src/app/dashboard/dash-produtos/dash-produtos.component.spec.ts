import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashProdutosComponent } from './dash-produtos.component';

describe('DashProdutosComponent', () => {
  let component: DashProdutosComponent;
  let fixture: ComponentFixture<DashProdutosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashProdutosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
