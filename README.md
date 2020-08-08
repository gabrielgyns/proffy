<p align="center">
  <img src="/imagens_projeto/logo.svg" />
  <br /><br /> 
  Projeto realizado para a segunda edição da Next Level Week promovido pela <a href="https://rocketseat.com.br/" target="_blank">Rocketseat</a>.
</p>

A proposta do Proffy, é produzir um site single-page-application (SPA), na qual possamos encontrar pessoas que querem aprender sobre alguma matéria escola e outras que querem ensinar. O contexto pode ser aplicado para matérias escolares, universitárias, etc.
Nessa aplicação podemos selecionar se queremos Estudar ou Ensinar. Caso escolha Estudar, você será direcionado a uma página para filtrar professores de determina matéria a sua escolha que estejam disponíveis no dia da semana e hora selecionada. Caso escolha Ensinar, será direcionado para uma página na qual poderá preencher um formulário afim de ser listado para pessoas interessadas!

A estrutura do projeto está divida da seguinte forma, temos um back end feito em **NodeJS** com algumas bibliotecas, na qual irá dispor de APIs RESTful e armazenar os dados em um banco **SQLite** (pode ser adaptado, mudando a conexão, estamos usando Knex, onde nos permitem criar queries em JavaScript para em seguida ser convertida ao banco usado).
Também temos um front end criado em **ReactJS** + **TypeScript** que consome as APIs em questão.

>O projeto BACK END está em um repositório separado, para ir ao repositório [clique aqui](https://github.com/gabrielgyns/proffy-server).

## Informações Front-end

Foi utilizado o Yarn como gerenciador de pacotes do projeto.

Esse Front-end foi codificado em **ReacJS** e **TypeScript**. A maioria dos códigos não utilizamos bibliotecas externas, porém para economia de tempo poderia ser boa opção utilizar algumas. Para requisições foi utilizado **Axios**. Para rotas, foi utilizado o famoso **react-router-dom**.
Além disso, utilizamos o contexto de **hooks**.

## Clone e Instalação

Para fazer clone do projeto, basta no console, no diretório que deseja clonar rodar o seguinte comando:

`git clone https://github.com/gabrielgyns/proffy.git`

Após ter feito clone, ainda no mesmo diretório, digite:

`yarn add`

## Próximas Etapas: Proffy 2.0 :nerd_face:

- [ ] Autenticação de Usuários
- [ ] Recuperação de Senhas
- [ ] Perfil do Proffy
- [ ] Screen de Confirmação (Sucesso e Falha)
- [ ] Paginação na Listagem de Proffys
- [ ] Horários Disponíveis dos Proffys 
- [ ] Salvar Proffys Favoritos
- [ ] Logout da Aplicação
- [ ] Deploy da Aplicação

## Segue imagens do projeto

<img src="/imagens_projeto/landing.png" />
<img src="/imagens_projeto/TeacherList.png" />
<img src="/imagens_projeto/TeacherForm.gif" />
