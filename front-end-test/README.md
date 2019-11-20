# FrontEndTest

`https://github.com/nuveo/frontend-test`

## Requisitos

NodeJS: `https://nodejs.org/en/`
AngularCli: `https://www.npmjs.com/package/@angular/cli`

## Development server

Instale as dependências rodando `npm install` via linha de comando dentro da pasta do projeto.

Execute `ng serve` dentro da pasta do projeto. Navegue até `http://localhost:4200/` para acessar a aplicação.


PS: Não implementei o filtro avançado por questão de limitação da API, ela não me retorna esses filtros e só retorna dados páginados, assim a única forma seria fazer várias requisições para pegar todos os recursos que se torna inviável.

Existe um BUG na API que retorna 404 as vezes no filtro por nome mesmo possuindo aquele recurso.