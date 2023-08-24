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

function pesquisar() {
    var valorDigitado = document.getElementById("input").value;

    var virusTotalChecked = document.getElementById("inlineCheckbox1").checked;
    var metaDefenderChecked = document.getElementById("inlineCheckbox2").checked;
    var hybridAnalysisChecked = document.getElementById("inlineCheckbox3").checked;

    if (virusTotalChecked) {
        var url = "https://www.virustotal.com/gui/search/" + valorDigitado;
        window.open(url, "_blank");
    }

    if (metaDefenderChecked) {
        var url2 = "https://metadefender.opswat.com/results/file/" + valorDigitado + "/hash/overview";
        window.open(url2, "_blank");
    }

    if (hybridAnalysisChecked) {
        var url3 = "https://www.hybrid-analysis.com/sample/" + valorDigitado;
        window.open(url3, "_blank");
    }
}

function preencherFormulario() {
    var inputData = document.getElementById("textarea").value;

    var lines = inputData.split("\n");
    var data = {};

    lines.forEach(function(line) {
        var parts = line.split(":");
        if (parts.length >= 2) {
            var key = parts[0].trim();
            var value = parts.slice(1).join(":").trim();
            data[key] = value;
        }
    });

    document.getElementById("descricao").value = data["Description"];
    document.getElementById("nome_host").value = data["Host name"];
    document.getElementById("nome_arquivo").value = data["File name"];
    document.getElementById("path_arquivo").value = data["File path"];
    document.getElementById("sha256").value = data["SHA 256"];
    document.getElementById("plataforma").value = data["Platform"];
    document.getElementById("ip").value = data["IP address"];
    document.getElementById("nome_user").value = data["User name"];

    if ("Detected" in data) {
        document.getElementById("detectado").value = data["Detected"];
    }

    if ("Last behavior" in data) {
        document.getElementById("ultimo_comportamento").value = data["Last behavior"];
    }
}

