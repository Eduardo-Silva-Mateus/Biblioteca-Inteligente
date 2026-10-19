package com.br.eduardosilva.bibliotecainteligente;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class MensagemController {

    @GetMapping("/mensagem")
    public String mensagem(){
       return ("Olá, Resposta enviada pelo Spring Boot");
    }
}
