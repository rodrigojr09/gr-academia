# GR Academia

Exemplo básico de um site para uma academia, desenvolvido para proporcionar uma plataforma informativa e intuitiva.

## Sumário

- [GR Academia](#gr-academia)
  - [Sumário](#sumário)
  - [Páginas](#páginas)
  - [Funcionalidades](#funcionalidades)
  - [Informações](#informações)
  - [Estrutura do Projeto](#estrutura-do-projeto)
  - [Tecnologias](#tecnologias)
  - [Recursos Futuros](#recursos-futuros)

## Páginas

O site será dividido em 3 páginas principais, cada uma com foco em diferentes aspectos da academia:

- **Página de Início**
  - Informações básicas sobre a academia, como descrição, preços iniciais e apresentação dos principais equipamentos.
- **Página de Preços**
  - Detalhamento das opções de planos disponíveis, preços, promoções e opções de acesso à academia.
- **Página Sobre a Academia**
  - Apresentação da história da academia, valores, equipamentos disponíveis e a visão geral do espaço físico.

## Funcionalidades

O site permitirá a gestão e visualização de diferentes informações e funcionalidades:

- Exibição dinâmica de preços e planos.
- Galeria de fotos dos equipamentos e do ambiente.
- Blog com postagens frequentes sobre dicas de saúde, fitness e promoções.
- Seção de equipe com perfis dos treinadores e colaboradores.
- Integração com o Google Maps para facilitar o acesso à localização.
- Formulário de contato para facilitar a comunicação com potenciais clientes.
- Horários de funcionamento da academia exibidos de forma clara e intuitiva.

## Informações

Você poderá inserir e gerenciar as seguintes informações no site:

- Preços e planos de assinatura.
- Lista de equipamentos com detalhes e imagens.
- Equipe da academia, incluindo fotos e especialidades.
- Postagens no blog sobre saúde, treino e promoções.
- Horários de funcionamento e dias de feriado.
- Testemunhos de clientes sobre suas experiências na academia.

## Estrutura do Projeto

O projeto está estruturado da seguinte forma:

- `/pages`
  - Páginas principais do site.
- `/components`
  - Componentes reutilizáveis (ex: Header, Footer, Cards de Preços).
- `/styles`
  - Estilos personalizados utilizando TailwindCSS e PostCSS.
- `/public`
  - Imagens e outros ativos estáticos.
- `/utils`
  - Funções utilitárias para manipulação de dados.
- `/api`
  - Endpoints API para manipulação de dados, como preços e horários.

## Tecnologias

O projeto é desenvolvido utilizando as seguintes tecnologias modernas:

- **NodeJS**: Ambiente de execução para o servidor.
- **NextJS**: Framework para React com renderização no lado do servidor e geração de sites estáticos.
- **Vercel**: Plataforma de deploy para aplicações Next.js.
- **TailwindCSS**: Framework de CSS utilitário para estilização.
- **PostCSS**: Ferramenta para transformar CSS com plugins.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **ESLint**: Ferramenta para identificar e corrigir problemas no código.
- **React**: Biblioteca JavaScript para construir interfaces de usuário.

## Recursos Futuros

Planejamos adicionar os seguintes recursos em futuras versões do site:

- **Sistema de Login e Cadastro**: Para clientes acessarem seu histórico de treinos e pagamentos.
- **Agendamento de Aulas**: Sistema de reserva online para aulas em grupo ou personal trainer.
- **Pagamento Online**: Integração com gateways de pagamento para compra de planos online.
- **Área de Cliente**: Painel onde os membros poderão gerenciar suas assinaturas e dados pessoais.
- **Monitoramento de Treino**: Seção onde os usuários poderão ver seu progresso, metas e avaliações físicas.
- **Suporte Multilíngue**: Suporte a diferentes idiomas para atrair um público mais amplo.
