# Arquitetura do Projeto Node.js Backend

## Visão Geral

Este documento descreve a arquitetura e os padrões de design utilizados neste projeto Node.js backend escalável. A estrutura foi projetada seguindo as melhores práticas da indústria para garantir manutenibilidade, escalabilidade e testabilidade.

## Princípios Arquiteturais

### Separação de Responsabilidades

O projeto segue o princípio da separação de responsabilidades, onde cada camada tem uma função específica:

- **Controllers**: Responsáveis por receber requisições HTTP e retornar respostas
- **Services**: Contêm a lógica de negócio da aplicação
- **Models**: Definem a estrutura dos dados e interagem com o banco de dados
- **Routes**: Definem os endpoints da API e conectam às controllers
- **Middlewares**: Executam funções intermediárias no pipeline de requisições
- **Utils**: Funções utilitárias reutilizáveis

### Arquitetura em Camadas

```
┌─────────────────┐
│     Routes      │ ← Definição de endpoints
├─────────────────┤
│   Controllers   │ ← Manipulação de requisições/respostas
├─────────────────┤
│    Services     │ ← Lógica de negócio
├─────────────────┤
│     Models      │ ← Acesso aos dados
├─────────────────┤
│    Database     │ ← Persistência
└─────────────────┘
```

## Estrutura de Pastas Detalhada

```
src/
├── controllers/     # Controladores da aplicação
│   ├── authController.js
│   ├── userController.js
│   └── index.js
├── services/        # Lógica de negócio
│   ├── authService.js
│   ├── userService.js
│   └── index.js
├── models/          # Modelos de dados
│   ├── User.js
│   ├── index.js
│   └── schemas/
├── routes/          # Definição de rotas
│   ├── auth.js
│   ├── users.js
│   └── index.js
├── middlewares/     # Middlewares customizados
│   ├── auth.js
│   ├── validation.js
│   ├── errorHandler.js
│   └── index.js
├── utils/           # Utilitários
│   ├── logger.js
│   ├── helpers.js
│   └── constants.js
└── index.js         # Ponto de entrada da aplicação
```

## Padrões de Design Implementados

### 1. Repository Pattern
Abstrai o acesso aos dados, facilitando testes e mudanças de banco de dados.

### 2. Service Layer Pattern
Centraliza a lógica de negócio, mantendo os controllers simples e focados.

### 3. Dependency Injection
Facilita testes unitários e reduz acoplamento entre componentes.

### 4. Factory Pattern
Utilizado para criação de instâncias de objetos complexos.

### 5. Middleware Pattern
Implementa funcionalidades transversais como autenticação, logging e validação.

## Configurações e Variáveis de Ambiente

O projeto utiliza variáveis de ambiente para configurações sensíveis e específicas do ambiente:

- `PORT`: Porta do servidor
- `NODE_ENV`: Ambiente de execução (development, production, test)
- `DATABASE_URL`: String de conexão com o banco de dados
- `JWT_SECRET`: Chave secreta para tokens JWT
- `FRONTEND_URL`: URL do frontend para configuração de CORS

## Segurança

### Medidas Implementadas

1. **Helmet**: Configuração de headers de segurança
2. **CORS**: Controle de acesso entre origens
3. **Rate Limiting**: Limitação de requisições por IP
4. **JWT**: Autenticação baseada em tokens
5. **Bcrypt**: Hash de senhas
6. **Validação de Entrada**: Sanitização e validação de dados

## Performance

### Otimizações

1. **Compression**: Compressão de respostas HTTP
2. **Connection Pooling**: Pool de conexões com o banco de dados
3. **Caching**: Estratégias de cache para dados frequentemente acessados
4. **Indexação**: Índices otimizados no banco de dados

## Monitoramento e Logging

### Sistema de Logs

- **Morgan**: Logging de requisições HTTP
- **Winston**: Sistema de logs estruturado
- **Níveis de Log**: Error, Warn, Info, Debug

### Métricas

- Tempo de resposta das APIs
- Taxa de erro
- Uso de memória e CPU
- Conexões ativas com o banco de dados

