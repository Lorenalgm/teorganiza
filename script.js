var project = document.querySelector('.new-project');
var projects = document.querySelector('.projects');
var modal = document.querySelector('.new-project-modal');
var save = document.querySelector('.button');

function handleModal(){
    modal.style.display = 'block';
}

project.addEventListener("click", handleModal);

function handleNewProject(){
    modal.style.display = 'none';
    var name = document.querySelector('.name');
    var sigla = document.querySelector('.sigla');

    var new_project = document.createElement('div');
    new_project.className = 'project';
    projects.prepend(new_project);

    var square = document.createElement('div');
    square.className = 'square';
    new_project.append(square);

    var titles_sigla = document.createElement('h1');
    titles_sigla.textContent = sigla.value;
    square.append(titles_sigla);
    
    var title = document.createElement('h3');
    title.textContent = name.value;
    new_project.append(title);

}

save.addEventListener("click", handleNewProject);
