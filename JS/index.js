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
        document.getElementById('sha256').textContent = data.sha256;
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

const btnCopiar = document.getElementById('btnCopiar');
    
btnCopiar.addEventListener('click', () => {

    const conteudoCenter = document.querySelector('center').innerHTML;

  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = conteudoCenter;

  document.body.appendChild(tempDiv);

  const range = document.createRange();
  range.selectNodeContents(tempDiv);
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);

  document.execCommand('copy');

  document.body.removeChild(tempDiv);

  alert('Conteúdo copiado para a área de transferência!');
});

