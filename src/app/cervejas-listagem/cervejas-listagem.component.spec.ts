import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CervejasListagemComponent } from './cervejas-listagem.component';

describe('CervejasListagemComponent', () => {
  let component: CervejasListagemComponent;
  let fixture: ComponentFixture<CervejasListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CervejasListagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CervejasListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
