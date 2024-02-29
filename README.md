Baixe e instale o Node.js (a versão LTS é a 20.11): curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash - &&
sudo apt-get install -y nodejs

Atualize o npm se necessário: sudo npm install -g npm@latest

Baixar a versão 14 do Angular (apenas se o projeto for igual a esse): sudo npm install -g @angular/cli@14 ng version (para confirmar a versão baixada)

Iniciar um projeto novo: ng new nome-do-projeto

Rodar o projeto npm start ou ng serve --open (essa flag serve para abrir o navegador automaticamente)