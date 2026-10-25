package com.br.eduardosilva.bibliotecainteligente.Controller;

import com.br.eduardosilva.bibliotecainteligente.Model.LivroModel;
import com.br.eduardosilva.bibliotecainteligente.Service.LivroService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/livros")
@CrossOrigin(origins = "http://localhost:4200")
public class LivroController {

    private final LivroService livroService;

    public LivroController(LivroService livroService){
        this.livroService = livroService;
    }

    @GetMapping
    public ResponseEntity<List<LivroModel>> listarLivros(){
        List<LivroModel> livro = livroService.listarLivros();

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(livro);
    }

    @PostMapping
    public ResponseEntity<LivroModel> cadastrarLivro(@Valid @RequestBody LivroModel livro){
        LivroModel livroSalvo = livroService.cadastrarLivro(livro);

        URI uri = ServletUriComponentsBuilder
                .fromCurrentContextPath()
                .path("/livros/" + livroSalvo.getId())
                .build().toUri();

        return ResponseEntity
                .created(uri)
                .body(livroSalvo);
    }

    @GetMapping("/{id}")
    public ResponseEntity<LivroModel> buscarLivroPorId(@PathVariable Long id){
        return  livroService.buscarLivroPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/autor")
    public List<LivroModel> buscarLivroPorAutor(@RequestParam String nome){
        return livroService.buscarLivroPorAutor(nome);
    }

    @PutMapping("/{id}")
    public ResponseEntity<LivroModel> atualizarLivro(@PathVariable Long id, @Valid @RequestBody LivroModel dadosAtualizados){
        return livroService.atualizarLivro(id, dadosAtualizados)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> excluirLivro(@PathVariable Long id){
        Optional<LivroModel> livro = livroService.excluirLivro(id);
        if(livro.isEmpty()){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.noContent().build();
    }

}
