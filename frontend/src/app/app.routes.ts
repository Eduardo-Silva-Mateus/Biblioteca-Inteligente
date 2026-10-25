import { Routes } from '@angular/router';
import { CadastrarLivro } from './pages/cadastrar-livro/cadastrar-livro'
import {ListaLivros} from './pages/lista-livros/lista-livros';

export const routes: Routes = [
  {
    path: '',
    component: ListaLivros
  },
  {
    path: 'livros/cadastrar-livro',
    component: CadastrarLivro
  }
];
