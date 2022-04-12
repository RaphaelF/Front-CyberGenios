# Front-CyberGenios
 Repositório para teste de Front da CyberGenios

# Como executar
Pré-requisitos: 
1. ter o gerenciador de pacotes Node.js instalado em sua máquina. Caso não saiba como instalá-lo, você pode baixar o instalador no link https://nodejs.org/en/download/
2. ter o GIT instalado no computador. Caso não tenha, você pode instalá-lo conforme mostra o segunte passo a passo https://github.com/git-guides/install-git
3. ter uma IDE instalada no computador. Caso não tenha você pode seguir o link a seguir para instalar o VSCode https://code.visualstudio.com/download
4. Opcional: Instalação do GitHub desktop. Para instalar a ferramenta desktop do GitHub basta seguir os passos descritos no link https://docs.github.com/pt/desktop/installing-and-configuring-github-desktop


Com Node, Git e IDE instalados, já podemos começar o setup do projeto. Acesse o link do repositório https://github.com/RaphaelF/Front-CyberGenios e clique no botão "Code" para revelar a URL HTTPS do projeto. Basta copiá-la, abrir um terminal e digitar o comando "git clone URL" substituindo a palavra URL pelo endereço copiado. Após isso basta realizar a autenticação (se necessária) e aguardar o projeto ser baixado para o computador. 

Opcionalmente, você pode clicar na opção "Open with GitHub Desktop" e seguir os passos orientados pela ferramenta

Ao final do download, navegue pelo terminal até a pasta em que o projeto foi salvo e digite o comando "npm install" para baixar todas as dependências adicionais necessárias para o projeto. Aguarde o procedimento acabar, depois simplesmente digite o comando "npm start" para iniciar a aplicação

# Estrutura
O projeto está organizado em 4 pastas principais: assets, data, components e mustang-design

# assets
Pasta contendo todas as imagens utilizadas no projeto, em formatos .PNG e .SVG

# data
Pasta contendo os dados utilizados no projeto. Atualmente contém apenas um arquivo com o nome cars.js, contendo informações dos carros mostrados nas telas do app

# components
Pasta contendo os componentes personalizados do projeto. Está subdividida em:
1. BarraDeNavegacao: barra de navegação responsiva exibida no topo da página
2. CadastroCarro: componente contendo formulário para cadastro de novos carros
3. Footer: componente de rodapé responsivo exibido na página
4. Header: componente de cabeçalho responsivo exibido na página
5. Home: página inicial do sistema
6. Tabela: página de visualização da tabela de carros e cadastro de novos carros

# mustang-design
Design System criado para a aplicação contendo padronizações de diversos componentes de UI, que fora utilizados para montar os componentes da pasta components. São eles:
1. BlurContainer
2. Card
3. CardItem
4. Carousel
5. CarouselItem
6. StackContainer
7. RowContainer
8. Form
9. FormItem
10. ElipseFrame
11. StyledImage
12. Modal
13. Navbar
14. NavItem
15. Table
16. TableHead
17. TableItem
18. Button
19. LoginButton
20. Paragraf
21. StyledLogo
22. Tittle

# Composição das páginas

1. Home: Componente Header com exibição de imagem; componente Carousel, com scroll horizontal de Cards listados a partir do objeto gravado no arquivo cars.js, com CardItems para cada um de seus atributos; Componente Footer com exibição de imagem.
2. Tabela: Componente Header com exibição de imagem; componente Table com cabeçalho da tabela TableHead e items TableItems listados a partir do objeto gravado no arquivo cars.js; Componente Modal contendo componente CadastrarCarro para realizar o cadastro de um novo carro; Componente Footer com exibição de imagem.

# Routing

Devido a problemas inesperados com a lib react-router, não foi possível implementar um sistema próprio de roteamento entre as páginas do app. Ao invés disso, foi criado um "pseudo-router" que identifica a URL do navegador e renderiza o componente correto de página de acordo. 

# Uso

Na barra de navegação, apenas os botões "Home" e "Tabelaa" estão funcionais, visto que não foi provisionado design para demais opções de páginas. Ao clicar no botão "Home" o usuário é redirecionado para a página inicial, e ao clicar no botão "Tabela"o usuário é redirecionado para a página de tabela

Na página Home há um carrossel de carros, que pode ser movido utilizando os botões de setas, arrastando a barra de rolagem horizontal ou, no caso de dispositivos mobile, arrastando para o lado na tela. Em cada card é posível clicar no botão "Ver Carros" para ver Carros

No componente Footer também há um botão "Ver Carros" em que é possível clicar para ver Carros

Na página Tabela o botão "+ Adicionar novo" abre o componente modal contento o formulário de cadastro de um novo objeto de carro. Até o presente momento, os campos do formulário não realizam nenhuma validação. O visualizador de Imagem também não apresenta corretamente um preview da imagem selecionada pelo usuário. Ao clicar no botão adicionar, um novo registro é criado na tabela. Clicar nos botões "X" ou "Cancelar" fecha o modal e interrompe o cadastro
Clicar no ícone de lixeira remove um item da tabela
Clicar no ícone de lápis abre o modal de cadastro com todas as informações do item daquela linha da tabela
