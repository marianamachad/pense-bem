# 📱 Pense Bem Mobile

Aplicativo mobile inspirado no clássico brinquedo eletrônico **Pense Bem**, recriando digitalmente a experiência do encarte especial **Disney: Rumo às Estrelas**.

Projeto desenvolvido para a disciplina de **Desenvolvimento Mobile** da Universidade La Salle.

## 👥 Integrantes

- Mariana Machado Macedo
- Victoria Lacerda
- Rodrigo Veiga

---

## 🎯 Sobre o Projeto

O objetivo do projeto foi modernizar a experiência do tradicional Pense Bem, transformando as regras e desafios do brinquedo físico em uma aplicação mobile interativa.

O aplicativo apresenta perguntas de múltipla escolha distribuídas em diferentes programas temáticos, sistema de pontuação progressiva, feedback visual para respostas corretas e incorretas e armazenamento local de pontuações.

---

## 🚀 Funcionalidades

- Seleção de programas de perguntas
- Sistema de quiz interativo
- Pontuação baseada no número de tentativas
- Feedback visual para respostas
- Histórico de pontuações
- Armazenamento persistente utilizando AsyncStorage
- Interface adaptada para dispositivos móveis
- Programa especial de revisão com questões aleatórias

---

## 🏆 Sistema de Pontuação

Cada questão pode valer até **3 pontos**.

| Tentativa | Pontuação |
|------------|------------|
| 1ª tentativa | 3 pontos |
| 2ª tentativa | 2 pontos |
| 3ª tentativa | 1 ponto |
| Após 3 erros | 0 pontos |

Pontuação máxima por programa:

**150 pontos**

---

## 🛠️ Tecnologias Utilizadas

- React Native
- Expo
- JavaScript (ES6+)
- AsyncStorage
- React Hooks
  - useState
  - useEffect

---

## 📂 Estrutura do Projeto

```text
assets/
 ├── imagens
 └── background

data/
 ├── programa1
 ├── programa2
 ├── programa3
 ├── programa4
 ├── programa5
 ├── programa6
 └── questions

screens/
 ├── HomeScreen
 ├── InstructionsScreen
 ├── BookSelectScreen
 ├── QuizScreen
 ├── ResultScreen
 └── ScoreScreen

App.js
```

---

## 💾 Persistência de Dados

As pontuações são armazenadas localmente no dispositivo utilizando AsyncStorage.

Exemplo:

```json
[
  {
    "book": "Programa 1",
    "score": 86,
    "date": "2026-05-28T14:32:00.000Z"
  }
]
```

---

## 📸 Telas do Aplicativo

### Tela Inicial

![Tela Inicial](screenshots/tela_inicial.jpeg)

### Seleção de Programas

![Seleção de Programas](screenshots/seleção_programas.jpeg)

### Quiz

![Pergunta 1](screenshots/perguntas_penseBem.jpeg)

![Pergunta 2](screenshots/perguntas_penseBem2.jpeg)

![Pergunta 3](screenshots/perguntas_penseBem3.jpeg)

### Resultado

![Resultado](screenshots/resultado.jpeg)

### Ranking

![Ranking](screenshots/ranking.jpeg)

---

## 🎓 Contexto Acadêmico

Projeto desenvolvido como atividade prática da disciplina de Desenvolvimento Mobile da Universidade La Salle.

O trabalho teve como foco a aplicação de conceitos de:

- Desenvolvimento Mobile
- Gerenciamento de Estado
- Componentização
- Persistência Local de Dados
- Experiência do Usuário (UX)

---

## 📜 Licença

Projeto desenvolvido para fins acadêmicos e educacionais.
