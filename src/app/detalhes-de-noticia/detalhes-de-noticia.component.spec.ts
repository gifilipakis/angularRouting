import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesDeNoticiaComponent } from './detalhes-de-noticia.component';

describe('DetalhesDeNoticiaComponent', () => {
  let component: DetalhesDeNoticiaComponent;
  let fixture: ComponentFixture<DetalhesDeNoticiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhesDeNoticiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesDeNoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
