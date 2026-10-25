import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Livro, NovoLivro } from '../models/livro';

@Injectable({
  providedIn: "root",
})

export class LivroService{
  private apiUrl = "http://localhost:8080/livros";

  constructor(private http: HttpClient) {}

  listarLivros(){
    return this.http.get<Livro[]>(this.apiUrl)
  }

  cadastrarLivro(livro: NovoLivro){
    return this.http.post<Livro>(this.apiUrl, livro);
  }

  excluirLivro(id: number){
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  buscarLivroPorId(id: number){
    return this.http.get<Livro>(`${this.apiUrl}/${id}`);
  }

  atualiazarLivro(id: number, livro: NovoLivro){
    return this.http.put<Livro>(`${this.apiUrl}/${id}`, livro);
  }

}
