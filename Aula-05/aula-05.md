# 🐧 Manual: Como Instalar o Linux Mint no VirtualBox

> **Para quem é este manual?**
> Para qualquer pessoa — jovem ou adulta — que queira experimentar o Linux sem precisar mexer no computador principal. Vamos fazer isso passo a passo, com calma e sem pressa. Se tiver dúvida, releia o passo com atenção. Você consegue! 💪

---

## 📖 Antes de começar: entendendo o que vamos fazer

Imagine que o seu computador é uma casa. Vamos construir um **quarto novo** dentro dessa casa — esse quarto é uma **máquina virtual**. Dentro desse quarto, vamos instalar o **Linux Mint**, que é como se fosse um inquilino novo.

- **VirtualBox** = o programa que cria e gerencia esse "quarto" (a máquina virtual)
- **Linux Mint Cinnamon** = o sistema operacional que vamos instalar dentro desse quarto
- **Arquivo ISO** = é como se fosse o "DVD de instalação" do Linux Mint, só que em formato digital

---

## ✅ O que você vai precisar

Antes de começar, certifique-se de ter:

- Um computador com **Windows, macOS ou Linux** já instalado
- Pelo menos **25 GB de espaço livre** no HD ou SSD
- Pelo menos **4 GB de memória RAM** (8 GB é melhor)
- Conexão com a internet para baixar os arquivos
- Paciência e vontade de aprender 😄

---

## 🗂️ Resumo dos passos

1. Baixar o VirtualBox
2. Instalar o VirtualBox
3. Baixar o Linux Mint Cinnamon
4. Criar a máquina virtual
5. Instalar o Linux Mint dentro da máquina virtual
6. Usar o Linux Mint!

---

## Passo 1 — Baixar o VirtualBox

O VirtualBox é o programa que vai criar o nosso "quarto virtual". Ele é **gratuito**.

1. Abra o seu navegador de internet (Chrome, Firefox, Edge, etc.)
2. Na barra de endereços, digite: `www.virtualbox.org` e pressione **Enter**
3. Clique no botão grande que diz **"Download VirtualBox"**
4. Na página seguinte, escolha o seu sistema operacional:
   - Se você usa **Windows**, clique em **"Windows hosts"**
   - Se você usa **Mac**, clique em **"macOS / Intel hosts"** ou **"macOS / Apple Silicon hosts"**
5. O download vai começar automaticamente. O arquivo tem cerca de **100 MB**, então pode demorar alguns minutinhos

> 💡 **Dica:** O arquivo baixado terá um nome parecido com `VirtualBox-7.x.x-Win.exe` (no Windows).

---

## Passo 2 — Instalar o VirtualBox

Agora vamos instalar o programa que acabamos de baixar.

1. Abra a pasta onde o arquivo foi baixado (normalmente a pasta **"Downloads"**)
2. Clique **duas vezes** no arquivo do VirtualBox para abrir o instalador
3. Uma janela de instalação vai aparecer. Clique em **"Next"** (ou "Próximo")
4. Continue clicando em **"Next"** nas próximas telas — as opções padrão já estão ótimas
5. Em algum momento pode aparecer um aviso dizendo que a internet vai cair por alguns segundos. Isso é normal! Clique em **"Yes"** para continuar
6. Clique em **"Install"** (Instalar)
7. Pode aparecer uma janela perguntando se você permite que o programa faça alterações no computador. Clique em **"Sim"**
8. Aguarde a instalação terminar
9. Clique em **"Finish"** para concluir

> ✅ **Pronto!** O VirtualBox está instalado. Ele pode até abrir automaticamente ao final.

---

## Passo 3 — Baixar o Linux Mint Cinnamon

Agora vamos baixar o Linux Mint. Esse arquivo é maior, então pode demorar mais.

1. Abra o navegador e acesse: `www.linuxmint.com`
2. Clique em **"Download"** no menu do site
3. Você verá três versões do Linux Mint. Escolha a primeira: **"Cinnamon"** — ela é a mais popular e tem a aparência mais parecida com o Windows
4. Na próxima página, role a tela para baixo e clique em um dos **links de download** (qualquer um funciona, escolha o mais próximo do Brasil)
5. O download vai começar. O arquivo termina com **.iso** e tem cerca de **2,5 GB** — vai demorar um pouco dependendo da sua internet

> 💡 **Dica:** Enquanto o arquivo baixa, você pode ir tomar um café ☕ ou continuar lendo os próximos passos para já ir se familiarizando.

> ⚠️ **Atenção:** Não abra o arquivo ISO ao terminar o download. Vamos usá-lo dentro do VirtualBox.

---

## Passo 4 — Criar a Máquina Virtual

Aqui vamos preparar o "quarto" para o Linux Mint morar. Siga com atenção!

### 4.1 — Abrir o VirtualBox

1. Procure o ícone do **VirtualBox** na sua área de trabalho ou no menu de programas
2. Abra o programa clicando duas vezes nele

### 4.2 — Criar uma nova máquina virtual

1. Na tela principal do VirtualBox, clique no botão **"Novo"** (ou **"New"**)
2. Uma janela vai aparecer pedindo informações. Preencha assim:
   - **Nome:** escreva `Linux Mint` (pode ser qualquer nome, esse é só pra você identificar)
   - **Pasta:** deixe como está (é onde o "quarto" vai ser guardado no seu HD)
   - **Imagem ISO:** clique no botão com a setinha e escolha **"Outro..."**, depois procure e selecione o arquivo **.iso** que você baixou no Passo 3
3. Após selecionar o arquivo ISO, o VirtualBox pode preencher automaticamente os campos abaixo:
   - **Tipo:** Linux
   - **Versão:** Ubuntu (64-bit)
   
   Se não preencher automaticamente, selecione esses valores você mesmo.

4. Marque a caixinha **"Skip Unattended Installation"** (Pular instalação automática) — isso faz com que você mesmo controle a instalação
5. Clique em **"Próximo"** (ou **"Next"**)

### 4.3 — Definir a memória RAM e processadores

Esta tela define quanto do seu computador será emprestado para a máquina virtual.

1. **Memória RAM:** Coloque pelo menos **2048 MB** (2 GB). Se seu computador tiver 8 GB ou mais de RAM, coloque **4096 MB** (4 GB). Use a barra deslizante ou digite o número
2. **Processadores:** Deixe em **2** (ou mais se seu computador for potente)
3. Clique em **"Próximo"**

> 💡 **Dica:** Nunca coloque mais da metade da RAM do seu computador para a máquina virtual. Se você tem 8 GB, não passe de 4 GB para a virtual.

### 4.4 — Criar um disco virtual

Este é o "HD" da máquina virtual — onde o Linux Mint vai ser instalado.

1. Selecione **"Criar um novo disco rígido virtual agora"**
2. No tamanho do disco, coloque pelo menos **25 GB**. Para mais conforto, coloque **40 GB**
3. Clique em **"Próximo"**

### 4.5 — Revisar e confirmar

Uma tela de resumo vai aparecer mostrando tudo o que você configurou. Confira as informações e clique em **"Finalizar"** (ou **"Finish"**).

> ✅ **Pronto!** A máquina virtual foi criada. Ela vai aparecer na lista à esquerda do VirtualBox.

---

## Passo 5 — Instalar o Linux Mint

Agora vem a parte mais emocionante: a instalação em si!

### 5.1 — Iniciar a máquina virtual

1. Na tela do VirtualBox, clique na sua máquina **"Linux Mint"** para selecioná-la
2. Clique no botão verde **"Iniciar"** (ou **"Start"**)
3. Uma nova janela vai abrir — essa é a "tela" da sua máquina virtual
4. Aguarde alguns segundos. Você verá textos correndo na tela — isso é normal! É o sistema iniciando

### 5.2 — A tela de boas-vindas do Linux Mint

Logo você verá uma tela com o logo do Linux Mint e algumas opções. Com o teclado, certifique-se de que a primeira opção está selecionada:

**"Start Linux Mint"**

Pressione **Enter** e aguarde. O sistema vai carregar e você verá a área de trabalho do Linux Mint.

> 💡 **Nota:** Neste momento o Linux Mint está funcionando, mas ainda não foi instalado de verdade — é como um teste. Para instalar, continue com os próximos passos.

### 5.3 — Iniciar o instalador

1. Na área de trabalho do Linux Mint, você verá um ícone chamado **"Install Linux Mint"** (parece um disco com uma setinha)
2. Clique **duas vezes** nele para abrir o instalador
3. O instalador vai abrir com uma tela de boas-vindas

### 5.4 — Escolher o idioma

1. Na lista de idiomas, procure e clique em **"Português do Brasil"**
2. Clique em **"Continuar"**

### 5.5 — Layout do teclado

1. Na lista da esquerda, selecione **"Português (Brasil)"**
2. Na lista da direita, selecione **"Português (Brasil)"** também (ou "Português (Brasil, sem acento no U)" se preferir)
3. Clique em **"Continuar"**

### 5.6 — Instalar softwares de mídia (opcional)

Aparecerá uma opção perguntando se quer instalar softwares de terceiros (como codecs de vídeo e música).

- Marque a caixinha **"Instalar softwares de terceiros..."** para ter mais recursos multimídia
- Clique em **"Continuar"**

### 5.7 — Tipo de instalação

Esta é uma parte importante! Vai aparecer uma pergunta sobre como instalar o sistema.

Como estamos dentro de uma máquina virtual (um "quarto separado"), é **completamente seguro** escolher a primeira opção:

- Selecione **"Apagar disco e instalar o Linux Mint"**
- Não se preocupe! Isso só vai apagar o disco **virtual** que criamos no Passo 4. Não vai mexer em nada no seu computador real!
- Clique em **"Instalar Agora"**
- Clique em **"Continuar"** na janela de confirmação que aparecer

### 5.8 — Fuso horário

Aparecerá um mapa-múndi. Clique na sua região no Brasil (exemplo: São Paulo) ou procure por **"São Paulo"** na caixinha de texto.

Clique em **"Continuar"**.

### 5.9 — Criar seu usuário

Agora você vai criar o seu "login" no Linux Mint.

Preencha os campos:
- **Seu nome:** escreva seu nome (ex: `João Silva`)
- **Nome do computador:** pode deixar como está ou colocar um apelido (ex: `meu-linux`)
- **Nome de usuário:** será preenchido automaticamente (ex: `joao`)
- **Senha:** crie uma senha e confirme ela no campo abaixo. **Guarde essa senha!** Você vai precisar dela depois
- Deixe marcada a opção **"Pedir senha para entrar"**

Clique em **"Continuar"**.

### 5.10 — Aguardar a instalação

Agora é só esperar! A instalação vai copiar todos os arquivos para o disco virtual. Isso pode levar entre **10 e 20 minutos** dependendo do seu computador.

Você pode acompanhar o progresso na barra que aparece na tela.

### 5.11 — Reiniciar

Quando a instalação terminar, aparecerá uma janela dizendo que o Linux foi instalado com sucesso!

1. Clique em **"Reiniciar Agora"**
2. Aparecerá uma mensagem pedindo para você remover o disco de instalação. Pode simplesmente pressionar **Enter**
3. A máquina virtual vai reiniciar

---

## Passo 6 — Usando o Linux Mint pela primeira vez! 🎉

Após reiniciar, você verá a tela de login do Linux Mint.

1. Clique no seu nome de usuário
2. Digite a senha que você criou no Passo 5.9
3. Pressione **Enter**

Pronto! Você está dentro do Linux Mint Cinnamon! 🐧✨

---

## 🧭 Conhecendo o Linux Mint

Aqui vai um mini-guia de onde fica cada coisa:

| O que procura | Onde fica |
|---|---|
| Menu de programas | Canto inferior esquerdo (o botão com o logo do Linux Mint) |
| Configurações do sistema | Menu → Preferências → Configurações do Sistema |
| Navegador de internet | Firefox (já vem instalado) |
| Gerenciador de arquivos | Ícone de pasta na barra inferior |
| Instalar novos programas | Menu → Gerenciador de Aplicativos |
| Desligar ou reiniciar | Canto inferior direito → ícone de energia |

---

## ❓ Perguntas Frequentes

**O mouse fica preso dentro da tela da máquina virtual. E agora?**
> Pressione a tecla **Ctrl direito** (o Ctrl que fica do lado direito do teclado). O mouse voltará ao normal!

**A tela da máquina virtual está muito pequena. Como aumentar?**
> No menu superior da janela do VirtualBox, clique em **"Exibir"** → **"Modo Tela Cheia"**. Para sair, pressione **Ctrl direito + F**.

**Posso fechar a janela do VirtualBox sem problema?**
> Sim! Ao fechar, ele perguntará o que fazer. Escolha **"Salvar o estado da máquina"** para pausar e continuar depois, ou **"Desligar a máquina"** para desligar completamente.

**Preciso instalar o Linux Mint toda vez que abrir o VirtualBox?**
> Não! Você só instala uma vez. Da próxima vez, é só abrir o VirtualBox, selecionar a máquina e clicar em "Iniciar".

---

## 🎓 Parabéns!

Você acabou de instalar e configurar um sistema operacional Linux dentro de uma máquina virtual! Isso é algo que muitos profissionais de tecnologia fazem no dia a dia.

Agora você pode explorar o Linux Mint com segurança, sem riscos para o seu computador principal. Aproveite para descobrir novos programas, personalizar a aparência e aprender mais sobre esse incrível sistema operacional!
