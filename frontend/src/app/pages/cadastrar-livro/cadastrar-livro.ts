import { Component, ViewChild } from '@angular/core';
import { Router, RouterLink} from '@angular/router';
import { FormsModule, NgForm} from '@angular/forms';
import {LivroService} from '../../services/livro';


@Component({
  imports: [FormsModule, RouterLink],
  selector: 'app-cadastrar-livro',
  styleUrl: './cadastrar-livro.css',
  templateUrl: './cadastrar-livro.html',
})
export class CadastrarLivro {
  novoLivro = {
    titulo: '',
    autor: '',
    isbn: ''
  };
  mensagemSucesso = '';

  @ViewChild('formulario') formulario!: NgForm;
  constructor(
    private livroService: LivroService,
    private router: Router,
  ) {}

  cadastrar() {
    this.livroService
      .cadastrarLivro(this.novoLivro)
      .subscribe({
        next: (livroSalvo) => {
          console.log('Livro cadastrado:', livroSalvo);
          this.router.navigate(['/']);
          this.formulario.resetForm()
        },
        error: (erro) => {
          console.error('Erro ao cadastrar livro:', erro);
        }
      });
  }
}
