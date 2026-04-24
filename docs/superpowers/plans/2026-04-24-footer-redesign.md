# Footer Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Substituir o Footer.jsx com 4 colunas (Brand · Plataforma · Suporte · Legal), empilhado no mobile, rotas react-router-dom para Privacidade/LGPD/Termos e badge LGPD na barra inferior.

**Architecture:** `BrowserRouter` envolve o app em `main.jsx`; `App.jsx` monta `<Navbar>` + `<Routes>` + `<Footer>` como layout fixo — as páginas legais renderizam apenas seu conteúdo interno, sem duplicar nav/footer. `Footer.jsx` usa CSS Grid do Tailwind com breakpoint `md` para colapsar de 4 colunas para coluna única.

**Tech Stack:** React 18, react-router-dom v6, Tailwind CSS v3 (darkMode class), lucide-react v0.555, SVG inline para WhatsApp.

---

## File Map

| Arquivo | Ação |
|---|---|
| `src/main.jsx` | Envolver com `BrowserRouter` |
| `src/App.jsx` | Adicionar `Routes` + importar `Footer` + páginas legais |
| `src/components/layout/Footer.jsx` | Reescrever completamente |
| `src/components/index.js` | Exportar `Footer` |
| `src/pages/Privacidade.jsx` | Criar — página placeholder |
| `src/pages/LGPD.jsx` | Criar — página placeholder |
| `src/pages/Termos.jsx` | Criar — página placeholder |

---

## Task 1: Ativar BrowserRouter em main.jsx

**Files:**
- Modify: `src/main.jsx`

- [ ] **Step 1: Atualizar main.jsx com BrowserRouter**

Substituir o conteúdo de `src/main.jsx` por:

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
)
```

- [ ] **Step 2: Verificar que o app ainda carrega**

```bash
npm run dev
```

Abrir `http://localhost:5173` — a página deve carregar igual a antes (Navbar + Hero). Console sem erros.

- [ ] **Step 3: Commit**

```bash
git add src/main.jsx
git commit -m "feat: activate BrowserRouter in main.jsx"
```

---

## Task 2: Reescrever Footer.jsx

**Files:**
- Modify: `src/components/layout/Footer.jsx`

- [ ] **Step 1: Substituir Footer.jsx pelo novo componente**

Substituir todo o conteúdo de `src/components/layout/Footer.jsx` por:

```jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Mail } from 'lucide-react';
import cnhoraLogo from '/cnhora-logo.svg';

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.117.554 4.107 1.523 5.836L.057 24l6.304-1.654A11.935 11.935 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.799 9.799 0 01-5-1.373l-.358-.214-3.717.975.992-3.622-.234-.372A9.78 9.78 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
  </svg>
);

const FooterLink = ({ to, href, children, highlight = false }) => {
  const base = `block text-sm transition-colors ${
    highlight
      ? 'text-orange-300/75 hover:text-orange-200 font-semibold'
      : 'text-white/45 hover:text-white'
  }`;
  if (to) return <Link to={to} className={base}>{children}</Link>;
  return <a href={href || '#'} className={base}>{children}</a>;
};

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: '#000810' }} className="border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr_1fr_1fr] gap-10 md:gap-8">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={cnhoraLogo} alt="CNHora" className="h-7 w-auto" />
              <span className="text-lg font-extrabold text-white">CNHora</span>
            </div>
            <p className="text-sm text-white/45 leading-relaxed mb-5 max-w-[220px]">
              Acelerando o futuro da educação no trânsito através de tecnologia e conexões humanas.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg flex items-center justify-center bg-white/[0.05] border border-white/[0.08] text-white/45 hover:text-[#FF7F27] hover:border-[#FF7F27]/30 transition-all"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://wa.me"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-lg flex items-center justify-center bg-white/[0.05] border border-white/[0.08] text-white/45 hover:text-[#FF7F27] hover:border-[#FF7F27]/30 transition-all"
              >
                <WhatsAppIcon />
              </a>
              <a
                href="mailto:contato@cnhora.com.br"
                aria-label="Email"
                className="w-9 h-9 rounded-lg flex items-center justify-center bg-white/[0.05] border border-white/[0.08] text-white/45 hover:text-[#FF7F27] hover:border-[#FF7F27]/30 transition-all"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Plataforma */}
          <div>
            <h4 className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#FF7F27] mb-4">
              Plataforma
            </h4>
            <ul className="space-y-3">
              <li><FooterLink href="#">Sobre nós</FooterLink></li>
              <li><FooterLink href="#">Instrutores</FooterLink></li>
              <li><FooterLink href="#">Autoescolas</FooterLink></li>
            </ul>
          </div>

          {/* Suporte */}
          <div>
            <h4 className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#FF7F27] mb-4">
              Suporte
            </h4>
            <ul className="space-y-3">
              <li><FooterLink href="#">Central de Ajuda</FooterLink></li>
              <li><FooterLink href="#">Suporte 24h</FooterLink></li>
              <li><FooterLink href="#">Contato</FooterLink></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#FF7F27] mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              <li>
                <FooterLink to="/privacidade" highlight>
                  Política de Privacidade
                </FooterLink>
              </li>
              <li>
                <FooterLink to="/lgpd" highlight>
                  LGPD{' '}
                  <span className="inline-block text-[8px] font-bold tracking-wider uppercase bg-[#FF7F27]/15 border border-[#FF7F27]/30 text-[#FF7F27] rounded px-1 py-px align-middle ml-1">
                    Lei
                  </span>
                </FooterLink>
              </li>
              <li><FooterLink to="/termos">Termos de Uso</FooterLink></li>
              <li><FooterLink href="#">Segurança</FooterLink></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06] max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center md:justify-between gap-3 text-center md:text-left">
        <p className="text-xs text-white/30">
          © {year} CNHora. Todos os direitos reservados.
        </p>
        <div className="flex flex-wrap justify-center md:justify-end items-center gap-4 md:gap-5">
          <Link to="/privacidade" className="text-xs text-orange-300/50 hover:text-orange-300/80 transition-colors">
            Privacidade
          </Link>
          <Link to="/lgpd" className="text-xs text-orange-300/50 hover:text-orange-300/80 transition-colors">
            LGPD
          </Link>
          <Link to="/termos" className="text-xs text-white/30 hover:text-white/60 transition-colors">
            Termos
          </Link>
          <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-wide bg-green-500/[0.08] border border-green-500/20 text-green-400/75 rounded px-2 py-1">
            ✓ Em conformidade com a LGPD
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
```

- [ ] **Step 2: Commit**

```bash
git add src/components/layout/Footer.jsx
git commit -m "feat: rewrite Footer with 4-col layout, LGPD badge, social icons"
```

---

## Task 3: Criar páginas legais

**Files:**
- Create: `src/pages/Privacidade.jsx`
- Create: `src/pages/LGPD.jsx`
- Create: `src/pages/Termos.jsx`

- [ ] **Step 1: Criar src/pages/Privacidade.jsx**

```jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

const Privacidade = () => (
  <main className="max-w-3xl mx-auto px-6 py-24 text-white">
    <Helmet>
      <title>Política de Privacidade | CNHora</title>
    </Helmet>
    <h1 className="text-3xl font-extrabold mb-4 text-white">Política de Privacidade</h1>
    <p className="text-white/50 text-sm mb-8">Última atualização: {new Date().getFullYear()}</p>
    <p className="text-white/60 leading-relaxed">
      Esta página está em construção. Em breve disponibilizaremos nossa Política de Privacidade
      completa, descrevendo como coletamos, usamos e protegemos seus dados pessoais.
    </p>
  </main>
);

export default Privacidade;
```

- [ ] **Step 2: Criar src/pages/LGPD.jsx**

```jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

const LGPD = () => (
  <main className="max-w-3xl mx-auto px-6 py-24 text-white">
    <Helmet>
      <title>LGPD | CNHora</title>
    </Helmet>
    <h1 className="text-3xl font-extrabold mb-4 text-white">LGPD</h1>
    <p className="text-white/50 text-sm mb-8">Lei Geral de Proteção de Dados — Lei nº 13.709/2018</p>
    <p className="text-white/60 leading-relaxed">
      Esta página está em construção. Em breve disponibilizaremos as informações sobre como a CNHora
      trata seus dados pessoais em conformidade com a Lei Geral de Proteção de Dados (LGPD).
    </p>
  </main>
);

export default LGPD;
```

- [ ] **Step 3: Criar src/pages/Termos.jsx**

```jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

const Termos = () => (
  <main className="max-w-3xl mx-auto px-6 py-24 text-white">
    <Helmet>
      <title>Termos de Uso | CNHora</title>
    </Helmet>
    <h1 className="text-3xl font-extrabold mb-4 text-white">Termos de Uso</h1>
    <p className="text-white/50 text-sm mb-8">Última atualização: {new Date().getFullYear()}</p>
    <p className="text-white/60 leading-relaxed">
      Esta página está em construção. Em breve disponibilizaremos nossos Termos de Uso completos.
    </p>
  </main>
);

export default Termos;
```

- [ ] **Step 4: Commit**

```bash
git add src/pages/Privacidade.jsx src/pages/LGPD.jsx src/pages/Termos.jsx
git commit -m "feat: add placeholder legal pages (Privacidade, LGPD, Termos)"
```

---

## Task 4: Atualizar App.jsx com Routes e Footer

**Files:**
- Modify: `src/App.jsx`

- [ ] **Step 1: Substituir App.jsx**

Substituir todo o conteúdo de `src/App.jsx` por:

```jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import { ErrorBoundary } from './components/ui';
import Privacidade from './pages/Privacidade';
import LGPD from './pages/LGPD';
import Termos from './pages/Termos';

function App() {
  return (
    <div className="dark" style={{ background: '#000810' }}>
      <Helmet>
        <title>CNHora | Acelere sua Habilitação</title>
        <meta
          name="description"
          content="Conectamos alunos a instrutores independentes com tecnologia de ponta. Agende aulas, faça simulados e conquiste sua CNH sem burocracia."
        />
      </Helmet>

      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <ErrorBoundary>
              <Hero />
            </ErrorBoundary>
          }
        />
        <Route path="/privacidade" element={<Privacidade />} />
        <Route path="/lgpd" element={<LGPD />} />
        <Route path="/termos" element={<Termos />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
```

- [ ] **Step 2: Verificar visualmente**

```bash
npm run dev
```

Checar:
1. `http://localhost:5173` — landing page carrega com footer abaixo do Hero
2. `http://localhost:5173/privacidade` — exibe Navbar + página de privacidade + Footer
3. `http://localhost:5173/lgpd` — exibe Navbar + página LGPD + Footer
4. `http://localhost:5173/termos` — exibe Navbar + página Termos + Footer
5. Clicar nos links "Política de Privacidade" e "LGPD" no footer navega corretamente (sem reload de página)
6. Redimensionar para < 768px — footer deve empilhar em coluna única
7. Badge "Em conformidade com a LGPD" visível na barra inferior

- [ ] **Step 3: Commit**

```bash
git add src/App.jsx
git commit -m "feat: add routing and Footer to App layout"
```

---

## Task 5: Atualizar barrel de componentes e lint final

**Files:**
- Modify: `src/components/index.js`

- [ ] **Step 1: Adicionar Footer ao barrel**

Substituir o conteúdo de `src/components/index.js` por:

```js
export { default as Navbar } from './layout/Navbar';
export { default as Footer } from './layout/Footer';
export { default as Hero } from './sections/Hero';
```

- [ ] **Step 2: Rodar lint**

```bash
npm run lint
```

Esperado: zero erros. Se houver warnings de `react/prop-types` no `FooterLink`, ignorar — o projeto não usa TypeScript nem PropTypes.

- [ ] **Step 3: Commit final**

```bash
git add src/components/index.js
git commit -m "chore: export Footer from components barrel"
```
