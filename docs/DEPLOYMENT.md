# Guia de Deploy

## Pré-requisitos

- Node.js 16+ instalado
- MongoDB configurado
- Variáveis de ambiente configuradas

## Deploy Local

### 1. Instalação das Dependências

```bash
npm install
```

### 2. Configuração das Variáveis de Ambiente

Copie o arquivo `.env.example` para `.env` e configure as variáveis:

```bash
cp .env.example .env
```

Edite o arquivo `.env` com suas configurações:

```env
PORT=3000
NODE_ENV=development
DATABASE_URL=mongodb://localhost:27017/seu_banco
JWT_SECRET=sua_chave_secreta_muito_segura
```

### 3. Execução

**Desenvolvimento:**
```bash
npm run dev
```

**Produção:**
```bash
npm start
```

## Deploy em Produção

### Heroku

1. **Instale o Heroku CLI**
2. **Faça login no Heroku:**
   ```bash
   heroku login
   ```

3. **Crie uma aplicação:**
   ```bash
   heroku create nome-da-sua-app
   ```

4. **Configure as variáveis de ambiente:**
   ```bash
   heroku config:set NODE_ENV=production
   heroku config:set DATABASE_URL=sua_string_de_conexao_mongodb
   heroku config:set JWT_SECRET=sua_chave_secreta
   ```

5. **Deploy:**
   ```bash
   git push heroku main
   ```

### Docker

1. **Crie um Dockerfile:**
   ```dockerfile
   FROM node:16-alpine
   
   WORKDIR /app
   
   COPY package*.json ./
   RUN npm ci --only=production
   
   COPY . .
   
   EXPOSE 3000
   
   USER node
   
   CMD ["npm", "start"]
   ```

2. **Build da imagem:**
   ```bash
   docker build -t node-backend .
   ```

3. **Execute o container:**
   ```bash
   docker run -p 3000:3000 --env-file .env node-backend
   ```

### AWS EC2

1. **Configure uma instância EC2**
2. **Instale Node.js e PM2:**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
   sudo apt-get install -y nodejs
   sudo npm install -g pm2
   ```

3. **Clone o repositório:**
   ```bash
   git clone seu-repositorio.git
   cd node-backend-project
   ```

4. **Instale dependências:**
   ```bash
   npm install --production
   ```

5. **Configure PM2:**
   ```bash
   pm2 start src/index.js --name "node-backend"
   pm2 startup
   pm2 save
   ```

## Configurações de Produção

### Variáveis de Ambiente Obrigatórias

- `NODE_ENV=production`
- `DATABASE_URL`: String de conexão com MongoDB
- `JWT_SECRET`: Chave secreta para JWT (mínimo 32 caracteres)
- `PORT`: Porta do servidor (padrão: 3000)

### Configurações de Segurança

1. **HTTPS**: Configure certificados SSL
2. **Firewall**: Abra apenas as portas necessárias
3. **Rate Limiting**: Configure limites apropriados
4. **Monitoring**: Configure logs e monitoramento

### Performance

1. **Clustering**: Use PM2 ou cluster nativo do Node.js
2. **Load Balancer**: Configure um load balancer (Nginx, HAProxy)
3. **CDN**: Use CDN para assets estáticos
4. **Database**: Configure réplicas e índices otimizados

## Monitoramento

### Logs

Configure logs estruturados para produção:

```javascript
const winston = require('winston')

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
})
```

### Health Check

Implemente um endpoint de health check:

```javascript
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  })
})
```

## Backup e Recuperação

1. **Backup do Banco de Dados**: Configure backups automáticos
2. **Backup do Código**: Use controle de versão (Git)
3. **Plano de Recuperação**: Documente procedimentos de recuperação

## Troubleshooting

### Problemas Comuns

1. **Erro de Conexão com Banco**: Verifique a string de conexão
2. **Porta em Uso**: Verifique se a porta está disponível
3. **Variáveis de Ambiente**: Confirme se todas estão configuradas
4. **Permissões**: Verifique permissões de arquivo e rede

