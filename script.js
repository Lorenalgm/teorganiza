
const $ = document.querySelector.bind(document);

const save      = $('.button'),
      projects  = $('.projects'),
      project   = $('.new-project'),
      menu      = $('.projects-menu'),
      modal     = $('.new-project-modal'),
      container = $('.container-website');

const projectColors = {
    "roxo": '#5A0092',
    "verde": '#038D00',
    "amarelo": '#CEA102',
    "vermelho": '#A70000'
};

function handleModal(){
    modal.style.display = 'block';
    container.style.visibility = 'hidden';
}

function handleNewProject(){
    modal.style.display = 'none';
    container.style.visibility = 'visible';
    var name = $('.name');
    var sigla = $('.sigla');
    const color = $('input[name="color"]:checked').value;

    // captura a cor recebida de um dos inputs selecionado pelo usuário
    const color_hash = projectColors[color];

    // estrutura do projeto criado via template string
    const new_project = `
        <div class="project">
            <div class="square" style="background-color: ${color_hash}">
                <h1>${sigla.value}</h1>
            </div>
            <h3>${name.value}</h3>
        </div>
    `;

    // estrutura da lista do projeto criado via template string
    const new_project_menu = `
        <div class="project-menu">
            <div class="color-menu" style="background-color: ${color_hash}"></div>
            <h3>${name.value}</h3>
        </div>
    `;

    menu.innerHTML    += new_project_menu;
    projects.innerHTML = new_project + projects.innerHTML;

    name.value = '';
    sigla.value = '';
}

