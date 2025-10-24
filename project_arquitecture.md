projeto-saude-ocupacional/
│
├── frontend/                          # React ou Angular
│   ├── src/
│   │   ├── modules/
│   │   │   ├── empresas/
│   │   │   ├── funcionarios/
│   │   │   ├── agendamentos/
│   │   │   ├── exames/
│   │   │   ├── relatorios/
│   │   │   ├── afastamentos/
│   │   │   ├── treinamentos/
│   │   │   ├── compliance/
│   │   │   ├── comunicacao/
│   │   │   └── portal-cliente/
│   │   ├── shared/
│   │   │   ├── components/
│   │   │   ├── services/
│   │   │   ├── guards/
│   │   │   ├── interceptors/
│   │   │   └── utils/
│   │   └── core/
│   │       ├── auth/
│   │       ├── layout/
│   │       └── config/
│   └── package.json
│
└── backend/
    ├── src/
    │   ├── modules/                   # Módulos de domínio
    │   │   ├── empresas/
    │   │   │   ├── controllers/
    │   │   │   ├── services/
    │   │   │   ├── repositories/
    │   │   │   ├── models/
    │   │   │   ├── dto/
    │   │   │   ├── validators/
    │   │   │   └── routes.ts
    │   │   │
    │   │   ├── funcionarios/
    │   │   │   ├── controllers/
    │   │   │   ├── services/
    │   │   │   ├── repositories/
    │   │   │   ├── models/
    │   │   │   ├── dto/
    │   │   │   ├── validators/
    │   │   │   └── routes.ts
    │   │   │
    │   │   ├── agendamentos/
    │   │   │   ├── controllers/
    │   │   │   ├── services/
    │   │   │   │   ├── agendamento.service.ts
    │   │   │   │   └── calendario.service.ts
    │   │   │   ├── repositories/
    │   │   │   ├── models/
    │   │   │   ├── dto/
    │   │   │   ├── validators/
    │   │   │   └── routes.ts
    │   │   │
    │   │   ├── exames/
    │   │   │   ├── controllers/
    │   │   │   ├── services/
    │   │   │   │   ├── exame.service.ts
    │   │   │   │   ├── audiometria.service.ts
    │   │   │   │   ├── historico.service.ts
    │   │   │   │   └── alerta.service.ts
    │   │   │   ├── repositories/
    │   │   │   ├── models/
    │   │   │   │   ├── exame.model.ts
    │   │   │   │   ├── audiometria.model.ts
    │   │   │   │   └── resultado.model.ts
    │   │   │   ├── dto/
    │   │   │   ├── validators/
    │   │   │   └── routes.ts
    │   │   │
    │   │   ├── relatorios/
    │   │   │   ├── controllers/
    │   │   │   ├── services/
    │   │   │   │   ├── relatorio.service.ts
    │   │   │   │   ├── laudo.service.ts
    │   │   │   │   └── pdf-generator.service.ts
    │   │   │   ├── repositories/
    │   │   │   ├── models/
    │   │   │   ├── templates/
    │   │   │   ├── dto/
    │   │   │   ├── validators/
    │   │   │   └── routes.ts
    │   │   │
    │   │   ├── afastamentos/
    │   │   │   ├── controllers/
    │   │   │   ├── services/
    │   │   │   │   ├── afastamento.service.ts
    │   │   │   │   └── retorno.service.ts
    │   │   │   ├── repositories/
    │   │   │   ├── models/
    │   │   │   ├── dto/
    │   │   │   ├── validators/
    │   │   │   └── routes.ts
    │   │   │
    │   │   ├── treinamentos/
    │   │   │   ├── controllers/
    │   │   │   ├── services/
    │   │   │   │   ├── treinamento.service.ts
    │   │   │   │   └── certificado.service.ts
    │   │   │   ├── repositories/
    │   │   │   ├── models/
    │   │   │   ├── dto/
    │   │   │   ├── validators/
    │   │   │   └── routes.ts
    │   │   │
    │   │   ├── compliance/
    │   │   │   ├── controllers/
    │   │   │   ├── services/
    │   │   │   │   ├── documento.service.ts
    │   │   │   │   └── norma.service.ts
    │   │   │   ├── repositories/
    │   │   │   ├── models/
    │   │   │   ├── dto/
    │   │   │   ├── validators/
    │   │   │   └── routes.ts
    │   │   │
    │   │   ├── comunicacao/
    │   │   │   ├── controllers/
    │   │   │   ├── services/
    │   │   │   │   ├── mensagem.service.ts
    │   │   │   │   └── notificacao.service.ts
    │   │   │   ├── repositories/
    │   │   │   ├── models/
    │   │   │   ├── dto/
    │   │   │   ├── validators/
    │   │   │   └── routes.ts
    │   │   │
    │   │   ├── integracao-rh/
    │   │   │   ├── controllers/
    │   │   │   ├── services/
    │   │   │   │   ├── sincronizacao.service.ts
    │   │   │   │   └── webhook.service.ts
    │   │   │   ├── adapters/
    │   │   │   ├── dto/
    │   │   │   └── routes.ts
    │   │   │
    │   │   └── auth/
    │   │       ├── controllers/
    │   │       ├── services/
    │   │       │   ├── auth.service.ts
    │   │       │   ├── jwt.service.ts
    │   │       │   └── permission.service.ts
    │   │       ├── middlewares/
    │   │       ├── guards/
    │   │       ├── models/
    │   │       ├── dto/
    │   │       └── routes.ts
    │   │
    │   ├── shared/                    # Código compartilhado
    │   │   ├── database/
    │   │   │   ├── config/
    │   │   │   │   └── database.config.ts
    │   │   │   ├── migrations/
    │   │   │   ├── seeds/
    │   │   │   └── connection.ts
    │   │   │
    │   │   ├── interfaces/
    │   │   │   ├── base-repository.interface.ts
    │   │   │   ├── base-service.interface.ts
    │   │   │   └── pagination.interface.ts
    │   │   │
    │   │   ├── middlewares/
    │   │   │   ├── error-handler.middleware.ts
    │   │   │   ├── logger.middleware.ts
    │   │   │   ├── validation.middleware.ts
    │   │   │   └── rate-limit.middleware.ts
    │   │   │
    │   │   ├── utils/
    │   │   │   ├── encryption.util.ts
    │   │   │   ├── date.util.ts
    │   │   │   ├── file.util.ts
    │   │   │   └── response.util.ts
    │   │   │
    │   │   ├── constants/
    │   │   │   ├── error-messages.ts
    │   │   │   ├── http-status.ts
    │   │   │   └── roles.ts
    │   │   │
    │   │   ├── decorators/
    │   │   │   ├── roles.decorator.ts
    │   │   │   └── validate.decorator.ts
    │   │   │
    │   │   └── events/
    │   │       ├── event-emitter.ts
    │   │       └── events.ts
    │   │
    │   ├── config/
    │   │   ├── app.config.ts
    │   │   ├── cors.config.ts
    │   │   ├── security.config.ts
    │   │   └── logger.config.ts
    │   │
    │   ├── app.ts                     # Configuração Express
    │   └── server.ts                  # Entry point
    │
    ├── tests/
    │   ├── unit/
    │   ├── integration/
    │   └── e2e/
    │
    ├── docs/
    │   ├── api/
    │   └── architecture/
    │
    ├── .env.example
    ├── .env
    ├── .gitignore
    ├── package.json
    ├── tsconfig.json
    └── README.md