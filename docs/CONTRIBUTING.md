# Guia de Contribuição

## Como Contribuir

Agradecemos seu interesse em contribuir para este projeto! Este guia fornece informações sobre como contribuir de forma efetiva.

## Configuração do Ambiente de Desenvolvimento

### 1. Fork e Clone

1. Faça um fork do repositório
2. Clone seu fork localmente:
   ```bash
   git clone https://github.com/seu-usuario/node-backend-project.git
   cd node-backend-project
   ```

### 2. Instalação

```bash
npm install
```

### 3. Configuração

1. Copie o arquivo de exemplo:
   ```bash
   cp .env.example .env
   ```

2. Configure as variáveis de ambiente no arquivo `.env`

### 4. Execução

```bash
npm run dev
```

## Padrões de Código

### ESLint

O projeto utiliza ESLint com a configuração Standard. Execute antes de fazer commit:

```bash
npm run lint
npm run lint:fix  # Para correções automáticas
```

### Convenções de Nomenclatura

- **Arquivos**: camelCase (ex: `userController.js`)
- **Variáveis e Funções**: camelCase (ex: `getUserById`)
- **Constantes**: UPPER_SNAKE_CASE (ex: `MAX_RETRY_ATTEMPTS`)
- **Classes**: PascalCase (ex: `UserService`)

### Estrutura de Arquivos

- **Controllers**: Responsáveis apenas por requisições/respostas HTTP
- **Services**: Contêm a lógica de negócio
- **Models**: Definem estruturas de dados
- **Utils**: Funções utilitárias reutilizáveis

## Processo de Desenvolvimento

### 1. Criação de Branch

Crie uma branch para sua feature/bugfix:

```bash
git checkout -b feature/nome-da-feature
# ou
git checkout -b bugfix/nome-do-bug
```

### 2. Commits

Use mensagens de commit descritivas seguindo o padrão:

```
tipo(escopo): descrição

Descrição mais detalhada se necessário

Closes #123
```

**Tipos de commit:**
- `feat`: Nova funcionalidade
- `fix`: Correção de bug
- `docs`: Documentação
- `style`: Formatação de código
- `refactor`: Refatoração
- `test`: Testes
- `chore`: Tarefas de manutenção

**Exemplo:**
```
feat(auth): adicionar autenticação JWT

Implementa sistema de autenticação usando JWT com
middleware de verificação de token.

Closes #45
```

### 3. Testes

Sempre adicione testes para novas funcionalidades:

```bash
npm test
npm run test:watch  # Para desenvolvimento
```

**Estrutura de Teste:**
```javascript
describe('UserService', () => {
  describe('createUser', () => {
    it('should create a new user successfully', async () => {
      // Arrange
      const userData = { name: 'Test', email: 'test@test.com' }
      
      // Act
      const result = await userService.createUser(userData)
      
      // Assert
      expect(result).toBeDefined()
      expect(result.email).toBe(userData.email)
    })
  })
})
```

### 4. Pull Request

1. **Push da branch:**
   ```bash
   git push origin feature/nome-da-feature
   ```

2. **Crie um Pull Request** com:
   - Título descritivo
   - Descrição detalhada das mudanças
   - Referência a issues relacionadas
   - Screenshots se aplicável

3. **Template de PR:**
   ```markdown
   ## Descrição
   Breve descrição das mudanças

   ## Tipo de Mudança
   - [ ] Bug fix
   - [ ] Nova funcionalidade
   - [ ] Breaking change
   - [ ] Documentação

   ## Como Testar
   1. Passos para testar
   2. Casos de teste específicos

   ## Checklist
   - [ ] Código segue os padrões do projeto
   - [ ] Testes foram adicionados/atualizados
   - [ ] Documentação foi atualizada
   - [ ] ESLint passou sem erros
   ```

## Diretrizes de Código

### Tratamento de Erros

```javascript
// ✅ Bom
try {
  const user = await userService.findById(id)
  if (!user) {
    throw new NotFoundError('Usuário não encontrado')
  }
  return user
} catch (error) {
  logger.error('Erro ao buscar usuário:', error)
  throw error
}

// ❌ Ruim
const user = await userService.findById(id)
return user
```

### Async/Await

```javascript
// ✅ Bom
const createUser = async (userData) => {
  try {
    const hashedPassword = await bcrypt.hash(userData.password, 10)
    const user = await User.create({
      ...userData,
      password: hashedPassword
    })
    return user
  } catch (error) {
    throw new Error('Erro ao criar usuário')
  }
}

// ❌ Ruim
const createUser = (userData) => {
  return bcrypt.hash(userData.password, 10)
    .then(hashedPassword => {
      return User.create({
        ...userData,
        password: hashedPassword
      })
    })
}
```

### Validação

```javascript
// ✅ Bom
const validateUserData = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(2).max(50).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
  })
  
  return schema.validate(data)
}

// ❌ Ruim
const validateUserData = (data) => {
  if (!data.name || !data.email || !data.password) {
    throw new Error('Dados inválidos')
  }
}
```

## Reportando Bugs

### Template de Issue

```markdown
**Descrição do Bug**
Descrição clara e concisa do bug.

**Para Reproduzir**
1. Vá para '...'
2. Clique em '....'
3. Role para baixo até '....'
4. Veja o erro

**Comportamento Esperado**
Descrição do que deveria acontecer.

**Screenshots**
Se aplicável, adicione screenshots.

**Ambiente:**
- OS: [ex: Ubuntu 20.04]
- Node.js: [ex: 16.14.0]
- Versão do projeto: [ex: 1.0.0]

**Contexto Adicional**
Qualquer outra informação relevante.
```

## Solicitando Funcionalidades

### Template de Feature Request

```markdown
**A funcionalidade está relacionada a um problema?**
Descrição clara do problema.

**Descreva a solução desejada**
Descrição clara da funcionalidade.

**Descreva alternativas consideradas**
Outras soluções que você considerou.

**Contexto Adicional**
Screenshots, mockups, etc.
```

## Código de Conduta

- Seja respeitoso e inclusivo
- Aceite críticas construtivas
- Foque no que é melhor para a comunidade
- Mostre empatia com outros membros

## Dúvidas

Se tiver dúvidas, abra uma issue com a tag `question` ou entre em contato com os mantenedores.

