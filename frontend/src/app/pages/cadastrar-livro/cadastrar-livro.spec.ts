import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastrarLivro } from './cadastrar-livro';

describe('CadastrarLivro', () => {
  let component: CadastrarLivro;
  let fixture: ComponentFixture<CadastrarLivro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastrarLivro],
    }).compileComponents();

    fixture = TestBed.createComponent(CadastrarLivro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
