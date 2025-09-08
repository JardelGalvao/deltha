--
-- PostgreSQL database cluster dump
--

-- Started on 2025-09-08 09:20:48

\restrict 5rIk4MddUEiMSEpNYI1u8GYD5b6MrdtXiObAseHnOAcfSrov201l19F399eqD3j

SET default_transaction_read_only = off;

SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;

--
-- Roles
--

CREATE ROLE dba;
ALTER ROLE dba WITH SUPERUSER INHERIT CREATEROLE CREATEDB LOGIN NOREPLICATION BYPASSRLS PASSWORD 'SCRAM-SHA-256$4096:WTmlKTTD05dQpt5+7+fkAw==$2hu2MEHfFXP6iLqwIJU2mgoSm8gA8ZoTRc2O4TloWvs=:tpTOi0huprk629viceYwF0xCiiYI5SmFB4cNj3JVzDc=';
CREATE ROLE postgres;
ALTER ROLE postgres WITH SUPERUSER INHERIT CREATEROLE CREATEDB LOGIN REPLICATION BYPASSRLS PASSWORD 'SCRAM-SHA-256$4096:7DdGvlZveaOLhmGGfXBXfw==$N86fcQ7WITwxut8eWeE/pd1uN5ei3KTSzU815qEwrvE=:6D9vjwyDgYr2nrYn25WNoZqFelSbvDo0Hncv65GuotM=';

--
-- User Configurations
--








\unrestrict 5rIk4MddUEiMSEpNYI1u8GYD5b6MrdtXiObAseHnOAcfSrov201l19F399eqD3j

--
-- Databases
--

--
-- Database "template1" dump
--

\connect template1

--
-- PostgreSQL database dump
--

\restrict 7LgpuaFIDKiIMAeZsVP7JGCuLOkcfXOkB1WaFaO0nMnV7i1tcUZQ8Q9ZFA4V6OU

-- Dumped from database version 17.6
-- Dumped by pg_dump version 17.6

-- Started on 2025-09-08 09:20:48

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

-- Completed on 2025-09-08 09:20:48

--
-- PostgreSQL database dump complete
--

\unrestrict 7LgpuaFIDKiIMAeZsVP7JGCuLOkcfXOkB1WaFaO0nMnV7i1tcUZQ8Q9ZFA4V6OU

--
-- Database "deltha" dump
--

--
-- PostgreSQL database dump
--

\restrict j4RIt85GOSKTsB3C81pLSCmbY7ozjg1ooUyzEgf9DikyLzLtgUvkh7HBCYgtSfb

-- Dumped from database version 17.6
-- Dumped by pg_dump version 17.6

-- Started on 2025-09-08 09:20:48

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 4924 (class 1262 OID 16388)
-- Name: deltha; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE deltha WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Portuguese_Brazil.1252';


ALTER DATABASE deltha OWNER TO postgres;

\unrestrict j4RIt85GOSKTsB3C81pLSCmbY7ozjg1ooUyzEgf9DikyLzLtgUvkh7HBCYgtSfb
\connect deltha
\restrict j4RIt85GOSKTsB3C81pLSCmbY7ozjg1ooUyzEgf9DikyLzLtgUvkh7HBCYgtSfb

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 6 (class 2615 OID 16401)
-- Name: deltha; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA deltha;


ALTER SCHEMA deltha OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 223 (class 1259 OID 24669)
-- Name: empresas; Type: TABLE; Schema: deltha; Owner: postgres
--

CREATE TABLE deltha.empresas (
    codigo_empresa integer NOT NULL,
    tipo_inscricao smallint DEFAULT 1 NOT NULL,
    inscricao character(14) NOT NULL,
    razao_social character varying(255) NOT NULL,
    nome character varying(255),
    endereco character varying(40),
    numero_endereco integer,
    complemento_endereco character varying(30),
    cep character(8),
    bairro character varying(60),
    codigo_municipio integer,
    ddd integer,
    telefone character(14),
    email character varying(100),
    data_cadastro timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE deltha.empresas OWNER TO postgres;

--
-- TOC entry 4925 (class 0 OID 0)
-- Dependencies: 223
-- Name: COLUMN empresas.codigo_empresa; Type: COMMENT; Schema: deltha; Owner: postgres
--

COMMENT ON COLUMN deltha.empresas.codigo_empresa IS 'Identificador único para o código da empresa';


--
-- TOC entry 4926 (class 0 OID 0)
-- Dependencies: 223
-- Name: COLUMN empresas.tipo_inscricao; Type: COMMENT; Schema: deltha; Owner: postgres
--

COMMENT ON COLUMN deltha.empresas.tipo_inscricao IS 'Tipo da inscrição da empresa';


--
-- TOC entry 4927 (class 0 OID 0)
-- Dependencies: 223
-- Name: COLUMN empresas.inscricao; Type: COMMENT; Schema: deltha; Owner: postgres
--

COMMENT ON COLUMN deltha.empresas.inscricao IS 'Incrição da empresa';


--
-- TOC entry 4928 (class 0 OID 0)
-- Dependencies: 223
-- Name: COLUMN empresas.razao_social; Type: COMMENT; Schema: deltha; Owner: postgres
--

COMMENT ON COLUMN deltha.empresas.razao_social IS 'Razão social da empresa';


--
-- TOC entry 4929 (class 0 OID 0)
-- Dependencies: 223
-- Name: COLUMN empresas.nome; Type: COMMENT; Schema: deltha; Owner: postgres
--

COMMENT ON COLUMN deltha.empresas.nome IS 'Nome da empresa';


--
-- TOC entry 4930 (class 0 OID 0)
-- Dependencies: 223
-- Name: COLUMN empresas.endereco; Type: COMMENT; Schema: deltha; Owner: postgres
--

COMMENT ON COLUMN deltha.empresas.endereco IS 'Endereço da empresa';


--
-- TOC entry 4931 (class 0 OID 0)
-- Dependencies: 223
-- Name: COLUMN empresas.numero_endereco; Type: COMMENT; Schema: deltha; Owner: postgres
--

COMMENT ON COLUMN deltha.empresas.numero_endereco IS 'Número do endereço da empresa';


--
-- TOC entry 4932 (class 0 OID 0)
-- Dependencies: 223
-- Name: COLUMN empresas.complemento_endereco; Type: COMMENT; Schema: deltha; Owner: postgres
--

COMMENT ON COLUMN deltha.empresas.complemento_endereco IS 'Complemento do endereço da empresa';


--
-- TOC entry 4933 (class 0 OID 0)
-- Dependencies: 223
-- Name: COLUMN empresas.cep; Type: COMMENT; Schema: deltha; Owner: postgres
--

COMMENT ON COLUMN deltha.empresas.cep IS 'CEP do endereço da empresa';


--
-- TOC entry 4934 (class 0 OID 0)
-- Dependencies: 223
-- Name: COLUMN empresas.bairro; Type: COMMENT; Schema: deltha; Owner: postgres
--

COMMENT ON COLUMN deltha.empresas.bairro IS 'Bairro da empresa';


--
-- TOC entry 4935 (class 0 OID 0)
-- Dependencies: 223
-- Name: COLUMN empresas.codigo_municipio; Type: COMMENT; Schema: deltha; Owner: postgres
--

COMMENT ON COLUMN deltha.empresas.codigo_municipio IS 'Múnicipio da empresa';


--
-- TOC entry 4936 (class 0 OID 0)
-- Dependencies: 223
-- Name: COLUMN empresas.ddd; Type: COMMENT; Schema: deltha; Owner: postgres
--

COMMENT ON COLUMN deltha.empresas.ddd IS 'DDD do telefone da empresa';


--
-- TOC entry 4937 (class 0 OID 0)
-- Dependencies: 223
-- Name: COLUMN empresas.telefone; Type: COMMENT; Schema: deltha; Owner: postgres
--

COMMENT ON COLUMN deltha.empresas.telefone IS 'Telefone da empresa';


--
-- TOC entry 4938 (class 0 OID 0)
-- Dependencies: 223
-- Name: COLUMN empresas.email; Type: COMMENT; Schema: deltha; Owner: postgres
--

COMMENT ON COLUMN deltha.empresas.email IS 'E-mail da empresa';


--
-- TOC entry 4939 (class 0 OID 0)
-- Dependencies: 223
-- Name: COLUMN empresas.data_cadastro; Type: COMMENT; Schema: deltha; Owner: postgres
--

COMMENT ON COLUMN deltha.empresas.data_cadastro IS 'Data de cadastro da empresa';


--
-- TOC entry 222 (class 1259 OID 24668)
-- Name: empresas_codigo_empresa_seq; Type: SEQUENCE; Schema: deltha; Owner: postgres
--

CREATE SEQUENCE deltha.empresas_codigo_empresa_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE deltha.empresas_codigo_empresa_seq OWNER TO postgres;

--
-- TOC entry 4940 (class 0 OID 0)
-- Dependencies: 222
-- Name: empresas_codigo_empresa_seq; Type: SEQUENCE OWNED BY; Schema: deltha; Owner: postgres
--

ALTER SEQUENCE deltha.empresas_codigo_empresa_seq OWNED BY deltha.empresas.codigo_empresa;


--
-- TOC entry 219 (class 1259 OID 24648)
-- Name: estados; Type: TABLE; Schema: deltha; Owner: postgres
--

CREATE TABLE deltha.estados (
    codigo_estado integer NOT NULL,
    nome character varying(255) NOT NULL,
    sigla character(2) NOT NULL
);


ALTER TABLE deltha.estados OWNER TO postgres;

--
-- TOC entry 4941 (class 0 OID 0)
-- Dependencies: 219
-- Name: COLUMN estados.codigo_estado; Type: COMMENT; Schema: deltha; Owner: postgres
--

COMMENT ON COLUMN deltha.estados.codigo_estado IS 'Identificador único para o código do estado';


--
-- TOC entry 4942 (class 0 OID 0)
-- Dependencies: 219
-- Name: COLUMN estados.nome; Type: COMMENT; Schema: deltha; Owner: postgres
--

COMMENT ON COLUMN deltha.estados.nome IS 'Nome do estado';


--
-- TOC entry 4943 (class 0 OID 0)
-- Dependencies: 219
-- Name: COLUMN estados.sigla; Type: COMMENT; Schema: deltha; Owner: postgres
--

COMMENT ON COLUMN deltha.estados.sigla IS 'Sigla do estado';


--
-- TOC entry 218 (class 1259 OID 24647)
-- Name: estados_codigo_estado_seq; Type: SEQUENCE; Schema: deltha; Owner: postgres
--

CREATE SEQUENCE deltha.estados_codigo_estado_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE deltha.estados_codigo_estado_seq OWNER TO postgres;

--
-- TOC entry 4944 (class 0 OID 0)
-- Dependencies: 218
-- Name: estados_codigo_estado_seq; Type: SEQUENCE OWNED BY; Schema: deltha; Owner: postgres
--

ALTER SEQUENCE deltha.estados_codigo_estado_seq OWNED BY deltha.estados.codigo_estado;


--
-- TOC entry 221 (class 1259 OID 24655)
-- Name: municipios; Type: TABLE; Schema: deltha; Owner: postgres
--

CREATE TABLE deltha.municipios (
    codigo_municipio integer NOT NULL,
    nome character varying(255) NOT NULL,
    codigo_ibge integer NOT NULL,
    codigo_estado integer NOT NULL
);


ALTER TABLE deltha.municipios OWNER TO postgres;

--
-- TOC entry 4945 (class 0 OID 0)
-- Dependencies: 221
-- Name: COLUMN municipios.codigo_municipio; Type: COMMENT; Schema: deltha; Owner: postgres
--

COMMENT ON COLUMN deltha.municipios.codigo_municipio IS 'Identificador único para o código do múnicipio';


--
-- TOC entry 4946 (class 0 OID 0)
-- Dependencies: 221
-- Name: COLUMN municipios.nome; Type: COMMENT; Schema: deltha; Owner: postgres
--

COMMENT ON COLUMN deltha.municipios.nome IS 'Nome do Múnicipio';


--
-- TOC entry 4947 (class 0 OID 0)
-- Dependencies: 221
-- Name: COLUMN municipios.codigo_ibge; Type: COMMENT; Schema: deltha; Owner: postgres
--

COMMENT ON COLUMN deltha.municipios.codigo_ibge IS 'Código IBGE do múnicipio';


--
-- TOC entry 4948 (class 0 OID 0)
-- Dependencies: 221
-- Name: COLUMN municipios.codigo_estado; Type: COMMENT; Schema: deltha; Owner: postgres
--

COMMENT ON COLUMN deltha.municipios.codigo_estado IS 'Referencia da coluna codigo_estado na tabela pai';


--
-- TOC entry 220 (class 1259 OID 24654)
-- Name: municipios_codigo_municipio_seq; Type: SEQUENCE; Schema: deltha; Owner: postgres
--

CREATE SEQUENCE deltha.municipios_codigo_municipio_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE deltha.municipios_codigo_municipio_seq OWNER TO postgres;

--
-- TOC entry 4949 (class 0 OID 0)
-- Dependencies: 220
-- Name: municipios_codigo_municipio_seq; Type: SEQUENCE OWNED BY; Schema: deltha; Owner: postgres
--

ALTER SEQUENCE deltha.municipios_codigo_municipio_seq OWNED BY deltha.municipios.codigo_municipio;


--
-- TOC entry 4755 (class 2604 OID 24672)
-- Name: empresas codigo_empresa; Type: DEFAULT; Schema: deltha; Owner: postgres
--

ALTER TABLE ONLY deltha.empresas ALTER COLUMN codigo_empresa SET DEFAULT nextval('deltha.empresas_codigo_empresa_seq'::regclass);


--
-- TOC entry 4753 (class 2604 OID 24651)
-- Name: estados codigo_estado; Type: DEFAULT; Schema: deltha; Owner: postgres
--

ALTER TABLE ONLY deltha.estados ALTER COLUMN codigo_estado SET DEFAULT nextval('deltha.estados_codigo_estado_seq'::regclass);


--
-- TOC entry 4754 (class 2604 OID 24658)
-- Name: municipios codigo_municipio; Type: DEFAULT; Schema: deltha; Owner: postgres
--

ALTER TABLE ONLY deltha.municipios ALTER COLUMN codigo_municipio SET DEFAULT nextval('deltha.municipios_codigo_municipio_seq'::regclass);


--
-- TOC entry 4918 (class 0 OID 24669)
-- Dependencies: 223
-- Data for Name: empresas; Type: TABLE DATA; Schema: deltha; Owner: postgres
--

COPY deltha.empresas (codigo_empresa, tipo_inscricao, inscricao, razao_social, nome, endereco, numero_endereco, complemento_endereco, cep, bairro, codigo_municipio, ddd, telefone, email, data_cadastro) FROM stdin;
\.


--
-- TOC entry 4914 (class 0 OID 24648)
-- Dependencies: 219
-- Data for Name: estados; Type: TABLE DATA; Schema: deltha; Owner: postgres
--

COPY deltha.estados (codigo_estado, nome, sigla) FROM stdin;
\.


--
-- TOC entry 4916 (class 0 OID 24655)
-- Dependencies: 221
-- Data for Name: municipios; Type: TABLE DATA; Schema: deltha; Owner: postgres
--

COPY deltha.municipios (codigo_municipio, nome, codigo_ibge, codigo_estado) FROM stdin;
\.


--
-- TOC entry 4950 (class 0 OID 0)
-- Dependencies: 222
-- Name: empresas_codigo_empresa_seq; Type: SEQUENCE SET; Schema: deltha; Owner: postgres
--

SELECT pg_catalog.setval('deltha.empresas_codigo_empresa_seq', 1, false);


--
-- TOC entry 4951 (class 0 OID 0)
-- Dependencies: 218
-- Name: estados_codigo_estado_seq; Type: SEQUENCE SET; Schema: deltha; Owner: postgres
--

SELECT pg_catalog.setval('deltha.estados_codigo_estado_seq', 1, false);


--
-- TOC entry 4952 (class 0 OID 0)
-- Dependencies: 220
-- Name: municipios_codigo_municipio_seq; Type: SEQUENCE SET; Schema: deltha; Owner: postgres
--

SELECT pg_catalog.setval('deltha.municipios_codigo_municipio_seq', 1, false);


--
-- TOC entry 4765 (class 2606 OID 24678)
-- Name: empresas empresas_pkey; Type: CONSTRAINT; Schema: deltha; Owner: postgres
--

ALTER TABLE ONLY deltha.empresas
    ADD CONSTRAINT empresas_pkey PRIMARY KEY (codigo_empresa);


--
-- TOC entry 4759 (class 2606 OID 24653)
-- Name: estados estados_pkey; Type: CONSTRAINT; Schema: deltha; Owner: postgres
--

ALTER TABLE ONLY deltha.estados
    ADD CONSTRAINT estados_pkey PRIMARY KEY (codigo_estado);


--
-- TOC entry 4761 (class 2606 OID 24662)
-- Name: municipios municipios_codigo_ibge_key; Type: CONSTRAINT; Schema: deltha; Owner: postgres
--

ALTER TABLE ONLY deltha.municipios
    ADD CONSTRAINT municipios_codigo_ibge_key UNIQUE (codigo_ibge);


--
-- TOC entry 4763 (class 2606 OID 24660)
-- Name: municipios municipios_pkey; Type: CONSTRAINT; Schema: deltha; Owner: postgres
--

ALTER TABLE ONLY deltha.municipios
    ADD CONSTRAINT municipios_pkey PRIMARY KEY (codigo_municipio);


--
-- TOC entry 4767 (class 2606 OID 24679)
-- Name: empresas empresas_codigo_municipio_fkey; Type: FK CONSTRAINT; Schema: deltha; Owner: postgres
--

ALTER TABLE ONLY deltha.empresas
    ADD CONSTRAINT empresas_codigo_municipio_fkey FOREIGN KEY (codigo_municipio) REFERENCES deltha.municipios(codigo_municipio) ON DELETE RESTRICT;


--
-- TOC entry 4766 (class 2606 OID 24663)
-- Name: municipios municipios_codigo_estado_fkey; Type: FK CONSTRAINT; Schema: deltha; Owner: postgres
--

ALTER TABLE ONLY deltha.municipios
    ADD CONSTRAINT municipios_codigo_estado_fkey FOREIGN KEY (codigo_estado) REFERENCES deltha.estados(codigo_estado) ON DELETE RESTRICT;


-- Completed on 2025-09-08 09:20:48

--
-- PostgreSQL database dump complete
--

\unrestrict j4RIt85GOSKTsB3C81pLSCmbY7ozjg1ooUyzEgf9DikyLzLtgUvkh7HBCYgtSfb

--
-- Database "postgres" dump
--

\connect postgres

--
-- PostgreSQL database dump
--

\restrict TjvBgGNqpy1vpqnbuWB9TMbLgKuexcjATrCOwHQ4nD39JOvlPbVOGstxdLSrsVU

-- Dumped from database version 17.6
-- Dumped by pg_dump version 17.6

-- Started on 2025-09-08 09:20:48

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

-- Completed on 2025-09-08 09:20:48

--
-- PostgreSQL database dump complete
--

\unrestrict TjvBgGNqpy1vpqnbuWB9TMbLgKuexcjATrCOwHQ4nD39JOvlPbVOGstxdLSrsVU

-- Completed on 2025-09-08 09:20:48

--
-- PostgreSQL database cluster dump complete
--

