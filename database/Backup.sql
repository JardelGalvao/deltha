--
-- PostgreSQL database dump
--

\restrict g043RSWAUsOOAaeHk3CUTPyX0TyktcXveuflYz4M20KdcoUkagWKFR8PkXuYhow

-- Dumped from database version 17.6
-- Dumped by pg_dump version 17.6

-- Started on 2025-09-18 16:42:07

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
-- TOC entry 5 (class 2615 OID 2200)
-- Name: deltha; Type: SCHEMA; Schema: -; Owner: pg_database_owner
--

CREATE SCHEMA deltha;


ALTER SCHEMA deltha OWNER TO pg_database_owner;

--
-- TOC entry 4876 (class 0 OID 0)
-- Dependencies: 5
-- Name: SCHEMA deltha; Type: COMMENT; Schema: -; Owner: pg_database_owner
--

COMMENT ON SCHEMA deltha IS 'standard public schema';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 222 (class 1259 OID 16429)
-- Name: companies; Type: TABLE; Schema: deltha; Owner: postgres
--

CREATE TABLE deltha.companies (
    company_code integer NOT NULL,
    tax_id_type smallint DEFAULT 1,
    tax_id character(14) NOT NULL,
    corporate_name character varying(255) NOT NULL,
    name character varying(255),
    address character varying(40),
    address_number integer,
    address_complement character varying(30),
    postal_code character(8),
    neighborhood character varying(60),
    municipality_code integer,
    area_code integer,
    phone character(14),
    email character varying(100),
    registration_date timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE deltha.companies OWNER TO postgres;

--
-- TOC entry 4877 (class 0 OID 0)
-- Dependencies: 222
-- Name: COLUMN companies.company_code; Type: COMMENT; Schema: deltha; Owner: postgres
--

COMMENT ON COLUMN deltha.companies.company_code IS 'Identificador único para o código da empresa';


--
-- TOC entry 4878 (class 0 OID 0)
-- Dependencies: 222
-- Name: COLUMN companies.tax_id_type; Type: COMMENT; Schema: deltha; Owner: postgres
--

COMMENT ON COLUMN deltha.companies.tax_id_type IS 'Tipo da inscrição da empresa';


--
-- TOC entry 4879 (class 0 OID 0)
-- Dependencies: 222
-- Name: COLUMN companies.tax_id; Type: COMMENT; Schema: deltha; Owner: postgres
--

COMMENT ON COLUMN deltha.companies.tax_id IS 'Incrição da empresa';


--
-- TOC entry 4880 (class 0 OID 0)
-- Dependencies: 222
-- Name: COLUMN companies.corporate_name; Type: COMMENT; Schema: deltha; Owner: postgres
--

COMMENT ON COLUMN deltha.companies.corporate_name IS 'Razão social da empresa';


--
-- TOC entry 4881 (class 0 OID 0)
-- Dependencies: 222
-- Name: COLUMN companies.name; Type: COMMENT; Schema: deltha; Owner: postgres
--

COMMENT ON COLUMN deltha.companies.name IS 'Nome da empresa';


--
-- TOC entry 4882 (class 0 OID 0)
-- Dependencies: 222
-- Name: COLUMN companies.address; Type: COMMENT; Schema: deltha; Owner: postgres
--

COMMENT ON COLUMN deltha.companies.address IS 'Endereço da empresa';


--
-- TOC entry 4883 (class 0 OID 0)
-- Dependencies: 222
-- Name: COLUMN companies.address_number; Type: COMMENT; Schema: deltha; Owner: postgres
--

COMMENT ON COLUMN deltha.companies.address_number IS 'Número do endereço da empresa';


--
-- TOC entry 4884 (class 0 OID 0)
-- Dependencies: 222
-- Name: COLUMN companies.address_complement; Type: COMMENT; Schema: deltha; Owner: postgres
--

COMMENT ON COLUMN deltha.companies.address_complement IS 'Complemento do endereço da empresa';


--
-- TOC entry 4885 (class 0 OID 0)
-- Dependencies: 222
-- Name: COLUMN companies.postal_code; Type: COMMENT; Schema: deltha; Owner: postgres
--

COMMENT ON COLUMN deltha.companies.postal_code IS 'CEP do endereço da empresa';


--
-- TOC entry 4886 (class 0 OID 0)
-- Dependencies: 222
-- Name: COLUMN companies.neighborhood; Type: COMMENT; Schema: deltha; Owner: postgres
--

COMMENT ON COLUMN deltha.companies.neighborhood IS 'Bairro da empresa';


--
-- TOC entry 4887 (class 0 OID 0)
-- Dependencies: 222
-- Name: COLUMN companies.municipality_code; Type: COMMENT; Schema: deltha; Owner: postgres
--

COMMENT ON COLUMN deltha.companies.municipality_code IS 'Múnicipio da empresa';


--
-- TOC entry 4888 (class 0 OID 0)
-- Dependencies: 222
-- Name: COLUMN companies.area_code; Type: COMMENT; Schema: deltha; Owner: postgres
--

COMMENT ON COLUMN deltha.companies.area_code IS 'DDD do telefone da empresa';


--
-- TOC entry 4889 (class 0 OID 0)
-- Dependencies: 222
-- Name: COLUMN companies.phone; Type: COMMENT; Schema: deltha; Owner: postgres
--

COMMENT ON COLUMN deltha.companies.phone IS 'Telefone da empresa';


--
-- TOC entry 4890 (class 0 OID 0)
-- Dependencies: 222
-- Name: COLUMN companies.email; Type: COMMENT; Schema: deltha; Owner: postgres
--

COMMENT ON COLUMN deltha.companies.email IS 'E-mail da empresa';


--
-- TOC entry 4891 (class 0 OID 0)
-- Dependencies: 222
-- Name: COLUMN companies.registration_date; Type: COMMENT; Schema: deltha; Owner: postgres
--

COMMENT ON COLUMN deltha.companies.registration_date IS 'Data de cadastro da empresa';


--
-- TOC entry 221 (class 1259 OID 16428)
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
-- TOC entry 4892 (class 0 OID 0)
-- Dependencies: 221
-- Name: empresas_codigo_empresa_seq; Type: SEQUENCE OWNED BY; Schema: deltha; Owner: postgres
--

ALTER SEQUENCE deltha.empresas_codigo_empresa_seq OWNED BY deltha.companies.company_code;


--
-- TOC entry 218 (class 1259 OID 16408)
-- Name: states; Type: TABLE; Schema: deltha; Owner: postgres
--

CREATE TABLE deltha.states (
    state_code integer NOT NULL,
    name character varying(255) NOT NULL,
    abbreviation character(2) NOT NULL
);


ALTER TABLE deltha.states OWNER TO postgres;

--
-- TOC entry 4893 (class 0 OID 0)
-- Dependencies: 218
-- Name: COLUMN states.state_code; Type: COMMENT; Schema: deltha; Owner: postgres
--

COMMENT ON COLUMN deltha.states.state_code IS 'Identificador único para o código do estado';


--
-- TOC entry 4894 (class 0 OID 0)
-- Dependencies: 218
-- Name: COLUMN states.name; Type: COMMENT; Schema: deltha; Owner: postgres
--

COMMENT ON COLUMN deltha.states.name IS 'Nome do estado';


--
-- TOC entry 4895 (class 0 OID 0)
-- Dependencies: 218
-- Name: COLUMN states.abbreviation; Type: COMMENT; Schema: deltha; Owner: postgres
--

COMMENT ON COLUMN deltha.states.abbreviation IS 'Sigla do estado';


--
-- TOC entry 217 (class 1259 OID 16407)
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
-- TOC entry 4896 (class 0 OID 0)
-- Dependencies: 217
-- Name: estados_codigo_estado_seq; Type: SEQUENCE OWNED BY; Schema: deltha; Owner: postgres
--

ALTER SEQUENCE deltha.estados_codigo_estado_seq OWNED BY deltha.states.state_code;


--
-- TOC entry 220 (class 1259 OID 16415)
-- Name: municipalities; Type: TABLE; Schema: deltha; Owner: postgres
--

CREATE TABLE deltha.municipalities (
    municipality_code integer NOT NULL,
    name character varying(255) NOT NULL,
    ibge_code integer NOT NULL,
    state_code integer NOT NULL
);


ALTER TABLE deltha.municipalities OWNER TO postgres;

--
-- TOC entry 4897 (class 0 OID 0)
-- Dependencies: 220
-- Name: COLUMN municipalities.municipality_code; Type: COMMENT; Schema: deltha; Owner: postgres
--

COMMENT ON COLUMN deltha.municipalities.municipality_code IS 'Identificador único para o código do múnicipio';


--
-- TOC entry 4898 (class 0 OID 0)
-- Dependencies: 220
-- Name: COLUMN municipalities.name; Type: COMMENT; Schema: deltha; Owner: postgres
--

COMMENT ON COLUMN deltha.municipalities.name IS 'Nome do Múnicipio';


--
-- TOC entry 4899 (class 0 OID 0)
-- Dependencies: 220
-- Name: COLUMN municipalities.ibge_code; Type: COMMENT; Schema: deltha; Owner: postgres
--

COMMENT ON COLUMN deltha.municipalities.ibge_code IS 'Código IBGE do múnicipio';


--
-- TOC entry 4900 (class 0 OID 0)
-- Dependencies: 220
-- Name: COLUMN municipalities.state_code; Type: COMMENT; Schema: deltha; Owner: postgres
--

COMMENT ON COLUMN deltha.municipalities.state_code IS 'Referencia da coluna codigo_estado na tabela pai';


--
-- TOC entry 219 (class 1259 OID 16414)
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
-- TOC entry 4901 (class 0 OID 0)
-- Dependencies: 219
-- Name: municipios_codigo_municipio_seq; Type: SEQUENCE OWNED BY; Schema: deltha; Owner: postgres
--

ALTER SEQUENCE deltha.municipios_codigo_municipio_seq OWNED BY deltha.municipalities.municipality_code;


--
-- TOC entry 4707 (class 2604 OID 16519)
-- Name: companies company_code; Type: DEFAULT; Schema: deltha; Owner: postgres
--

ALTER TABLE ONLY deltha.companies ALTER COLUMN company_code SET DEFAULT nextval('deltha.empresas_codigo_empresa_seq'::regclass);


--
-- TOC entry 4706 (class 2604 OID 16520)
-- Name: municipalities municipality_code; Type: DEFAULT; Schema: deltha; Owner: postgres
--

ALTER TABLE ONLY deltha.municipalities ALTER COLUMN municipality_code SET DEFAULT nextval('deltha.municipios_codigo_municipio_seq'::regclass);


--
-- TOC entry 4705 (class 2604 OID 16521)
-- Name: states state_code; Type: DEFAULT; Schema: deltha; Owner: postgres
--

ALTER TABLE ONLY deltha.states ALTER COLUMN state_code SET DEFAULT nextval('deltha.estados_codigo_estado_seq'::regclass);


--
-- TOC entry 4870 (class 0 OID 16429)
-- Dependencies: 222
-- Data for Name: companies; Type: TABLE DATA; Schema: deltha; Owner: postgres
--

COPY deltha.companies (company_code, tax_id_type, tax_id, corporate_name, name, address, address_number, address_complement, postal_code, neighborhood, municipality_code, area_code, phone, email, registration_date) FROM stdin;
\.


--
-- TOC entry 4868 (class 0 OID 16415)
-- Dependencies: 220
-- Data for Name: municipalities; Type: TABLE DATA; Schema: deltha; Owner: postgres
--

COPY deltha.municipalities (municipality_code, name, ibge_code, state_code) FROM stdin;
\.


--
-- TOC entry 4866 (class 0 OID 16408)
-- Dependencies: 218
-- Data for Name: states; Type: TABLE DATA; Schema: deltha; Owner: postgres
--

COPY deltha.states (state_code, name, abbreviation) FROM stdin;
\.


--
-- TOC entry 4902 (class 0 OID 0)
-- Dependencies: 221
-- Name: empresas_codigo_empresa_seq; Type: SEQUENCE SET; Schema: deltha; Owner: postgres
--

SELECT pg_catalog.setval('deltha.empresas_codigo_empresa_seq', 1, false);


--
-- TOC entry 4903 (class 0 OID 0)
-- Dependencies: 217
-- Name: estados_codigo_estado_seq; Type: SEQUENCE SET; Schema: deltha; Owner: postgres
--

SELECT pg_catalog.setval('deltha.estados_codigo_estado_seq', 1, true);


--
-- TOC entry 4904 (class 0 OID 0)
-- Dependencies: 219
-- Name: municipios_codigo_municipio_seq; Type: SEQUENCE SET; Schema: deltha; Owner: postgres
--

SELECT pg_catalog.setval('deltha.municipios_codigo_municipio_seq', 1, true);


--
-- TOC entry 4717 (class 2606 OID 16438)
-- Name: companies empresas_pkey; Type: CONSTRAINT; Schema: deltha; Owner: postgres
--

ALTER TABLE ONLY deltha.companies
    ADD CONSTRAINT empresas_pkey PRIMARY KEY (company_code);


--
-- TOC entry 4711 (class 2606 OID 16413)
-- Name: states estados_pkey; Type: CONSTRAINT; Schema: deltha; Owner: postgres
--

ALTER TABLE ONLY deltha.states
    ADD CONSTRAINT estados_pkey PRIMARY KEY (state_code);


--
-- TOC entry 4713 (class 2606 OID 16422)
-- Name: municipalities municipios_codigo_ibge_key; Type: CONSTRAINT; Schema: deltha; Owner: postgres
--

ALTER TABLE ONLY deltha.municipalities
    ADD CONSTRAINT municipios_codigo_ibge_key UNIQUE (ibge_code);


--
-- TOC entry 4715 (class 2606 OID 16420)
-- Name: municipalities municipios_pkey; Type: CONSTRAINT; Schema: deltha; Owner: postgres
--

ALTER TABLE ONLY deltha.municipalities
    ADD CONSTRAINT municipios_pkey PRIMARY KEY (municipality_code);


--
-- TOC entry 4719 (class 2606 OID 16439)
-- Name: companies empresas_codigo_municipio_fkey; Type: FK CONSTRAINT; Schema: deltha; Owner: postgres
--

ALTER TABLE ONLY deltha.companies
    ADD CONSTRAINT empresas_codigo_municipio_fkey FOREIGN KEY (municipality_code) REFERENCES deltha.municipalities(municipality_code) ON DELETE RESTRICT;


--
-- TOC entry 4718 (class 2606 OID 16423)
-- Name: municipalities municipios_codigo_estado_fkey; Type: FK CONSTRAINT; Schema: deltha; Owner: postgres
--

ALTER TABLE ONLY deltha.municipalities
    ADD CONSTRAINT municipios_codigo_estado_fkey FOREIGN KEY (state_code) REFERENCES deltha.states(state_code) ON DELETE RESTRICT;


-- Completed on 2025-09-18 16:42:07

--
-- PostgreSQL database dump complete
--

\unrestrict g043RSWAUsOOAaeHk3CUTPyX0TyktcXveuflYz4M20KdcoUkagWKFR8PkXuYhow

