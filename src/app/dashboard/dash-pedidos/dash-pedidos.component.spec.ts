import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashPedidosComponent } from './dash-pedidos.component';

describe('DashPedidosComponent', () => {
  let component: DashPedidosComponent;
  let fixture: ComponentFixture<DashPedidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashPedidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
