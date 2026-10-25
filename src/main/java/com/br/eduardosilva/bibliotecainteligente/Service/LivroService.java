package com.br.eduardosilva.bibliotecainteligente.Service;

import com.br.eduardosilva.bibliotecainteligente.Model.LivroModel;
import com.br.eduardosilva.bibliotecainteligente.Repository.LivroRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LivroService {

    private final LivroRepository livroRepository;

    public LivroService(LivroRepository livroRepository){
        this.livroRepository = livroRepository;
    }

    public List<LivroModel> listarLivros(){
        return livroRepository.findAll();
    }

    public LivroModel cadastrarLivro(LivroModel livro){
        return livroRepository.save(livro);
    }

    public  Optional<LivroModel> buscarLivroPorId(Long id){
        return livroRepository.findById(id);
    }

    public List<LivroModel> buscarLivroPorAutor(String autor){
        return livroRepository.findByAutorContainingIgnoreCase(autor);
    }

    public Optional<LivroModel> atualizarLivro(Long id, LivroModel informacoesAtualizadas){
        return  livroRepository.findById(id)
                .map(livro -> {
                    livro.setTitulo(informacoesAtualizadas.getTitulo());
                    livro.setAutor(informacoesAtualizadas.getAutor());
                    livro.setIsbn(informacoesAtualizadas.getIsbn());

                    return livroRepository.save(livro);
                });
    }

    public Optional<LivroModel> excluirLivro(Long id){
        Optional<LivroModel> optionalLivro = livroRepository.findById(id);
        if(optionalLivro.isEmpty()){
            return  Optional.empty();
        }
        livroRepository.deleteById(id);

        return optionalLivro;


    }

}
