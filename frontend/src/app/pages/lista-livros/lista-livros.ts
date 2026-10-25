import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule, NgForm} from '@angular/forms';
import { Livro } from '../../models/livro';
import { LivroService } from '../../services/livro';

@Component({
  imports: [RouterLink, FormsModule],
  selector: 'app-lista-livros',
  styleUrl: './lista-livros.css',
  templateUrl: './lista-livros.html',
})
export class ListaLivros {
  livros = signal<Livro[]>([]);
  livroEncontrado = signal<Livro | null>(null);
  livroEmEdicao = signal<Livro | null>(null);

  constructor(private livroService: LivroService) {
    this.livroService.listarLivros().subscribe({
      next: (resposta) => {
        this.livros.set(resposta);
      },
      error: (erro) => {
        console.error('Erro ao listar livros: ', erro);
      }
    });
  }

  buscarLivroId(id: number){
    this.livroService.buscarLivroPorId(id).subscribe({
      next: (livro) => {
        this.livroEncontrado.set(livro);
      },
      error: (erro) => {
        console.error('Erro ao listar livros: ', erro);
      }
    });
  }

  editarLivro(id: number){
    this.livroService.buscarLivroPorId(id).subscribe({
      next: (livro) => {
        this.livroEmEdicao.set(livro);
      }
    });
  }

  salvarEdicao(){
    const livro = this.livroEmEdicao();
    if(!livro){
      return;
    }
    this.livroService.atualiazarLivro(livro.id, livro).subscribe({
      next: (livroAtualizado) => {
        this.livros.update((listaAtual) =>
        listaAtual.map((livroDaLista)=>
          livroDaLista.id === livroAtualizado.id
          ? livroAtualizado
          :livroDaLista
        ));
        this.livroEmEdicao.set(null);
      },
      error: (erro) => {
        console.error('Erro ao editar livro: ', erro);
      }
    })
  }

  fecharEdicao(){
    this.livroEmEdicao.set(null);
  }

  excluirLivro(id: number){
    const confirmou = confirm('Deseja excluir o Livro?')
    if(confirmou){
      this.livroService.excluirLivro(id).subscribe({
        next: () => {
          this.livros.update((listaAtual) =>
            listaAtual.filter(livro => livro.id !== id)
          )
        }
      });
    }
  }


}
