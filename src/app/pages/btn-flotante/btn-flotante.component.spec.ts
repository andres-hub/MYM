import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnFlotanteComponent } from './btn-flotante.component';

describe('BtnFlotanteComponent', () => {
  let component: BtnFlotanteComponent;
  let fixture: ComponentFixture<BtnFlotanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnFlotanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnFlotanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
