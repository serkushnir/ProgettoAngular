import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabellaRegioniComponent } from './tabella-regioni.component';

describe('TabellaRegioniComponent', () => {
  let component: TabellaRegioniComponent;
  let fixture: ComponentFixture<TabellaRegioniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabellaRegioniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabellaRegioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
