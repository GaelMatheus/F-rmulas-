# Fórmula — V9: responsivo e pronto para uso offline

Aplicativo de memorização de fórmulas de Matemática, Física, Química e Biologia.

## O que mudou nesta versão

- Layout responsivo para computador, tablet e celular.
- No celular, a navegação principal fica em uma barra inferior fixa, com os quatro ícones do app.
- O aplicativo agora é uma PWA instalável, com manifesto, ícones e service worker.
- Todos os arquivos locais necessários para a jornada, exercícios, caderno e treino rápido são armazenados em cache.
- Removida a dependência de fontes do Google; a interface usa fontes do sistema e não precisa buscar fontes na internet.
- O app mostra o estado de conexão e informa quando está sem internet.
- XP, lições concluídas, estatísticas, matéria escolhida e matérias do treino são salvos no armazenamento local do navegador.
- Em “Meu progresso”, é possível exportar e importar um backup JSON, inclusive sem internet. Isso permite transferir os avanços entre dispositivos.

## Como instalar e preparar o uso offline

**Importante:** service workers e instalação PWA exigem um endereço HTTPS (ou `localhost`). Abrir o `index.html` diretamente como arquivo (`file://`) não habilita o modo offline completo.

1. Publique a pasta do projeto em uma hospedagem HTTPS, por exemplo GitHub Pages, ou rode localmente com Live Server (`localhost`).
2. Abra o Fórmula uma vez com internet e aguarde o indicador no topo mostrar “Offline pronto”. Nesse primeiro acesso, o aplicativo baixa e guarda os arquivos necessários.
3. No celular:
   - **Android/Chrome:** menu do navegador → “Instalar app” ou “Adicionar à tela inicial”.
   - **iPhone/iPad/Safari:** botão Compartilhar → “Adicionar à Tela de Início”.
4. Depois da primeira preparação, abra pelo ícone instalado. A trilha, as questões, o caderno, o treino rápido e o progresso funcionam sem conexão.

Se atualizar os arquivos do app, abra-o com internet uma vez para receber a versão nova. O cache anterior é substituído automaticamente quando a nova versão do service worker é ativada.

## Como o progresso fica salvo

O progresso é salvo localmente no navegador/dispositivo, usando `localStorage`. Não depende de login, servidor ou internet. Se limpar os dados do navegador ou desinstalar o app, o armazenamento local pode ser apagado; por isso, use **Meu progresso → Exportar meu progresso** para guardar uma cópia JSON.

Para levar o progresso para outro aparelho, exporte o backup no aparelho antigo, transfira o arquivo e use **Meu progresso → Importar backup** no novo aparelho. A transferência do arquivo pode ser feita por qualquer meio disponível; a importação em si funciona offline.

**Observação:** os dados não são sincronizados automaticamente entre celular e computador. O backup manual é o mecanismo de transferência nesta versão.

## Estrutura

- `index.html`: estrutura do aplicativo e navegação.
- `style.css`: layout responsivo e temas.
- `script.js`: lições, treino rápido, progresso, backup e registro do service worker.
- `service-worker.js`: cache offline e atualização da aplicação.
- `manifest.webmanifest`: configuração de instalação PWA.
- `data/`: banco local de módulos, fórmulas e exercícios.
- `assets/icons/`: ícones da navegação e ícones de instalação.


### Ícone do aplicativo (PWA)
A identidade do Fórmula foi aplicada aos ícones de instalação: `assets/icons/icon-192.png`, `icon-512.png` e `apple-touch-icon.png`. O arquivo vetorial editável está em `assets/icons/formula-icon.svg`. O cache do service worker foi atualizado para `formula-pwa-v10` para que a nova versão do ícone seja baixada após publicar a atualização.
