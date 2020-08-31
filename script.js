
const $ = document.querySelector.bind(document);

const save      = $('.button'),
      projects  = $('.projects'),
      project   = $('.new-project'),
      menu      = $('.projects-menu'),
      modal     = $('.new-project-modal'),
      container = $('.container-website');

function handleModal(){
    modal.style.display = 'block';
    container.style.visibility = 'hidden';
}

project.addEventListener("click", handleModal);

function handleNewProject(){
    modal.style.display = 'none';
    container.style.visibility = 'visible';
    var name = $('.name');
    var sigla = $('.sigla');
    var color = $('input[name="color"]:checked').value;

    if(color == 'verde'){
        var color_hash = '#038D00';
    }

    if(color == 'vermelho'){
        var color_hash = '#A70000';
    }

    if(color == 'amarelo'){
        var color_hash = '#CEA102';
    }

    if(color == 'roxo'){
        var color_hash = '#5A0092';
        
    }

    var new_project = document.createElement('div');
    new_project.className = 'project';
    projects.prepend(new_project);

    var square = document.createElement('div');
    square.className = 'square';
    square.style.backgroundColor = color_hash;
    new_project.append(square);

    var titles_sigla = document.createElement('h1');
    titles_sigla.textContent = sigla.value;
    square.append(titles_sigla);
    
    var title = document.createElement('h3');
    title.textContent = name.value;
    new_project.append(title);

    var new_project_menu = document.createElement('div');
    new_project_menu.className = 'project-menu';
    menu.append(new_project_menu);

    var color_menu = document.createElement('div');
    color_menu.className = 'color-menu';
    color_menu.style.backgroundColor = color_hash;
    new_project_menu.append(color_menu);

    var title_menu = document.createElement('h3');
    title_menu.textContent = name.value;
    new_project_menu.append(title_menu);

    name.value = '';
    sigla.value = '';
}

save.addEventListener("click", handleNewProject);
