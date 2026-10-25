package com.br.eduardosilva.bibliotecainteligente.Repository;

import com.br.eduardosilva.bibliotecainteligente.Model.LivroModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LivroRepository extends JpaRepository<LivroModel, Long> {

    List<LivroModel> findByAutorContainingIgnoreCase(String autor);

}
