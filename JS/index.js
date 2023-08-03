document.addEventListener('DOMContentLoaded', function () {
    const storedData = localStorage.getItem('formData');
    if (storedData) {
        const data = JSON.parse(storedData);

        document.getElementById('ultimo_comportamento').textContent = data.ultimo_comportamento;
        document.getElementById('detectado').textContent = data.detectado;
        document.getElementById('nome_user').textContent = data.nome_user;
        document.getElementById('ip').textContent = data.ip;
        document.getElementById('plataforma').textContent = data.plataforma;
        document.getElementById('path_arquivo').textContent = data.path_arquivo;
        document.getElementById('nome_arquivo').textContent = data.nome_arquivo;
        document.getElementById('nome_host').textContent = data.nome_host;
        document.getElementById('descricao').textContent = data.descricao;
    }
});

function saveData(event) {
    event.preventDefault(); 

    const form = document.getElementById('myForm');
    const formData = new FormData(form);

    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    localStorage.setItem('formData', JSON.stringify(data));

    const nextPage = event.submitter.getAttribute('data-next-page');
    if (nextPage) {
        window.open(nextPage, '_blank'); 
    }
}