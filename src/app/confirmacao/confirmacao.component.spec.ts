import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CofirmacaoComponent } from './confirmacao.component';

describe('CofirmacaoComponent', () => {
  let component: CofirmacaoComponent;
  let fixture: ComponentFixture<CofirmacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CofirmacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CofirmacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
