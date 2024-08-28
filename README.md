✅ MÉTODO DE INSTALAÇÃO MULTIZAP PLUS

​​​​​​​​​​​​🔴 NECESSÁRIO SERVIDOR UBUNTU 22.04 3VCPU 4GB
CRIAR 2 SUBDOMÍNIOS TIPO A APONTANDO PARA O IP DO SERVIDOR

⚠️ CONFIRA SE OS SUBDOMÍNIOS ESTÃO PROPAGADOS

💠BAIXAR BITVISE
https://dl.bitvise.com/BvSshClient-Inst.exe

🔃 SERVIDORES

HETZNER👇🏻
https://hetzner.cloud/?ref=3LJyXRz9EZfv


CONTABO
https://contabo.com/en/vps/

*******************************************************************


Comandos a serem inseridos no terminal do BITVISE.

sudo apt-get update && sudo apt-get upgrade -y

reboot

adduser deploy

Insira a senha
12243648

Repita a senha
12243648

adduser deploy sudo

APERTAR O ENTER

APERTAR O ENTER

APERTAR O ENTER

APERTAR O ENTER

APERTAR O ENTER

Y

cd /home

apt install git && git clone https://github.com/siteconnect/whaticket22-5.0.git

User do Github: siteconnect

Token do Github: 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

cd /home/whaticket22-5.0

chmod +x instalar_primaria instalar_nova_instancia && ./instalar_primaria

0

DIGITE a senha DEPLOY
12243648

empresa01

999

999

DIGITE O SITE PARA O FRONTEND
https://QUALQUER-NOME.SEUDOMINIO.com.br

DIGITE O SITE PARA O BACKEND
https://QUALQUER-NOME.SEUDOMINIO.com.br

3001

4001

5001

APÓS TERMINAR A INSTALAÇÃO PROSSIGA COM OS COMANDOS


cd /home/deploy/empresa01/backend

npm install @whiskeysockets/baileys@allgood/Baileys#fixProfilePic

npm run build

sudo su deploy

pm2 restart all

pm2 save

---------------------------------------------------------

cd /home/whaticket22-5.0

chmod +x instalar_primaria instalar_nova_instancia && ./instalar_primaria

Digite 1 para atualizar

Digite o nome da instancia


sudo reboot now

***********************************************************

COMANDO PARA BUILDAR O FRONTEND

cd /home/deploy/empresa01/frontend 
npm run build

COMANDO PARA BUILDAR O BACKEND

cd /home/deploy/empresa01/backend 
npm run build


*********************************************************************

Comando para serem executados em caso de outras mudanças nos CODIGOS DO PAINEL EM SUA VPS. 

cd /home/deploy/empresa01/

chmod +x ./update

./update

sudo systemctl restart nginx

sudo reboot now

***********************************************************************

MUDAR COR INTERNA 1
/home/deploy/empresa01/frontend/src/layout/
index.js
linhas 56 e 60

codigo
#10aa62

----------------------------
MUDAR COR INTERNA 2
/home/deploy/empresa01/frontend/src/     
app.js
linhas 53 e alterar todas iguais
OU
linhas 76 PARA DEGRADE (TROCAR AS TRES CORES ABAIXO, OU A PRIMEIRA E A TERCEIRA 
barraSuperior: mode === "light" ? "linear-gradient(to right, #10aa62, #10aa62, #10aa62)" : "#666",


codigo
#10aa62

----------------------------
mudar a cor do do fundo da onde escreve o ticket

/home/deploy/empresa01/frontend/src/components/MessageInputCustom
index.js
linha 59


a cor da paleta que vc pode conferir em frontend/src/App.js
testar

---------------------------------------------------------------------------------------------------------------------------------------------------------
----------------------------

editar tela de login

/home/deploy/empresa01/frontend/src/pages/Login
index.js

----------------------------

editar tela de signup
/home/deploy/empresa01/frontend/src/pages/Signup
index.js

----------------------------

---------------------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------
VARIÁVEIS QUE PODEM SER USADAS DENTRO DO PAINEL

{{ms}} - Bom dia, boa tarde, boa noite ou boa madrugada dependendo da hora do dia

{{name}} - Nome cadastrado no WhatsApp de quem entrou em contato

{{protocol}} - Geração de protocolo

{{hora}} - Hora atual no formato de hora-min-seg


-----------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------------
ATT: Digitprime / Connect Lead