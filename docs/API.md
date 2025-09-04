# Documentação da API

## Visão Geral

Esta API RESTful fornece endpoints para gerenciamento de usuários e autenticação. Todas as respostas são retornadas em formato JSON.

## Base URL

```
http://localhost:3000/api/v1
```

## Autenticação

A API utiliza JWT (JSON Web Tokens) para autenticação. Inclua o token no header Authorization:

```
Authorization: Bearer <seu_token_jwt>
```

## Endpoints

### Autenticação

#### POST /auth/register
Registra um novo usuário.

**Request Body:**
```json
{
  "name": "João Silva",
  "email": "joao@email.com",
  "password": "senha123"
}
```

**Response (201):**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "user_id",
      "name": "João Silva",
      "email": "joao@email.com"
    },
    "token": "jwt_token"
  }
}
```

#### POST /auth/login
Autentica um usuário existente.

**Request Body:**
```json
{
  "email": "joao@email.com",
  "password": "senha123"
}
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "user_id",
      "name": "João Silva",
      "email": "joao@email.com"
    },
    "token": "jwt_token"
  }
}
```

### Usuários

#### GET /users/profile
Retorna o perfil do usuário autenticado.

**Headers:**
```
Authorization: Bearer <token>
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "user_id",
      "name": "João Silva",
      "email": "joao@email.com",
      "createdAt": "2023-01-01T00:00:00.000Z"
    }
  }
}
```

#### PUT /users/profile
Atualiza o perfil do usuário autenticado.

**Headers:**
```
Authorization: Bearer <token>
```

**Request Body:**
```json
{
  "name": "João Santos",
  "email": "joao.santos@email.com"
}
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "user_id",
      "name": "João Santos",
      "email": "joao.santos@email.com",
      "updatedAt": "2023-01-02T00:00:00.000Z"
    }
  }
}
```

## Códigos de Status HTTP

- `200 OK`: Requisição bem-sucedida
- `201 Created`: Recurso criado com sucesso
- `400 Bad Request`: Dados inválidos na requisição
- `401 Unauthorized`: Token de autenticação inválido ou ausente
- `403 Forbidden`: Acesso negado
- `404 Not Found`: Recurso não encontrado
- `422 Unprocessable Entity`: Erro de validação
- `500 Internal Server Error`: Erro interno do servidor

## Formato de Erro

```json
{
  "success": false,
  "error": {
    "message": "Descrição do erro",
    "code": "ERROR_CODE",
    "details": {}
  }
}
```

## Rate Limiting

A API implementa rate limiting para prevenir abuso:

- **Limite**: 100 requisições por 15 minutos por IP
- **Headers de resposta**:
  - `X-RateLimit-Limit`: Limite total
  - `X-RateLimit-Remaining`: Requisições restantes
  - `X-RateLimit-Reset`: Timestamp do reset

## Versionamento

A API utiliza versionamento via URL. A versão atual é `v1`.

## CORS

A API suporta CORS (Cross-Origin Resource Sharing) para permitir requisições de diferentes domínios em desenvolvimento e produção.

