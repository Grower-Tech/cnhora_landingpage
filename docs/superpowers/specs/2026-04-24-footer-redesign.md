---
name: Footer Redesign — Privacidade, LGPD, Desktop & Mobile
description: Redesign do Footer.jsx com 4 colunas desktop, empilhado no mobile, rotas para Política de Privacidade e LGPD via react-router-dom
type: project
---

# Footer Redesign

## Objetivo

Substituir o Footer.jsx existente (estrutura básica com links `#`) por um footer completo com coluna Legal dedicada, rotas reais para Política de Privacidade e LGPD, ícones sociais corretos, badge de conformidade LGPD e responsividade total.

## Decisões de design (aprovadas)

| Decisão | Escolha |
|---|---|
| Layout desktop | 4 colunas: Brand · Plataforma · Suporte · Legal |
| Layout mobile | Empilhado (single-column, tudo visível) |
| Links legais | Rotas próprias via react-router-dom |
| Ícones sociais | Instagram · WhatsApp · Email |
| Badge LGPD | Presente na barra inferior |

## Estrutura

### Desktop (≥ 768px) — grid 4 colunas

```
[ Brand (1.6fr) ] [ Plataforma (1fr) ] [ Suporte (1fr) ] [ Legal (1fr) ]
─────────────────────────────────────────────────────────────────────────
[ © 2025 CNHora ]                 [ Privacidade · LGPD · Termos · Badge ]
```

**Coluna Brand:**
- Logo SVG + wordmark "CNHora"
- Tagline: "Acelerando o futuro da educação no trânsito através de tecnologia e conexões humanas."
- Ícones sociais: Instagram (Lucide `Instagram`), WhatsApp (SVG inline — Lucide não tem), Email (Lucide `Mail`)

**Coluna Plataforma:**
- Sobre nós
- Instrutores
- Autoescolas

**Coluna Suporte:**
- Central de Ajuda
- Suporte 24h
- Contato

**Coluna Legal:**
- Política de Privacidade → `/privacidade` (destaque visual, cor laranja suave)
- LGPD + badge "Lei" → `/lgpd` (destaque visual)
- Termos de Uso → `/termos`
- Segurança → `#` (placeholder)

**Barra inferior:**
- Esquerda: "© {ano} CNHora. Todos os direitos reservados."
- Direita: links inline Privacidade · LGPD · Termos + badge "✓ Em conformidade com a LGPD"

### Mobile (< 768px) — empilhado

Brand section (logo + tagline + ícones sociais) → divider → Plataforma → Suporte → Legal → barra inferior centralizada com copyright + badge LGPD.

## Rotas e páginas legais

Ativar `react-router-dom` em `src/main.jsx` (já instalado). Criar páginas placeholder:

- `src/pages/Privacidade.jsx` — página estática com conteúdo mínimo
- `src/pages/LGPD.jsx` — página estática com conteúdo mínimo
- `src/pages/Termos.jsx` — página estática com conteúdo mínimo

As páginas legais usam layout simples: Navbar + bloco de texto com `prose` + Footer.

## Estilos

Seguir o design system existente:
- Background: `#000810` (var `--blue-deep`)
- Acento: `#FF7F27` (`primary-container`) para labels e links legais
- Links default: `rgba(255,255,255,0.45)` → hover `white`
- Badge LGPD: verde suave `rgba(80,200,120,...)`
- Font: Plus Jakarta Sans (já carregada)
- Sem border-radius nos cards (projeto usa `borderRadius: "0.125rem"` — exceto social icons com `rounded-lg`)

## Arquivos a criar/modificar

| Arquivo | Ação |
|---|---|
| `src/components/layout/Footer.jsx` | Reescrever |
| `src/main.jsx` | Ativar BrowserRouter + rotas |
| `src/App.jsx` | Adicionar `<Footer />` + estrutura de rotas |
| `src/pages/Privacidade.jsx` | Criar (placeholder) |
| `src/pages/LGPD.jsx` | Criar (placeholder) |
| `src/pages/Termos.jsx` | Criar (placeholder) |

## Fora de escopo

- Conteúdo real das páginas legais (texto jurídico)
- Animações Framer Motion no footer (manter estático)
- Dark/light mode toggle no footer (projeto está fixo em dark)
