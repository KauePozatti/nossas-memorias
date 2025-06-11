const dataInicio = new Date(2020, 3, 20, 2, 34, 0);

function atualizarContador() {
    const agora = new Date();
    const diff = agora - dataInicio;

    const segundos = Math.floor(diff / 1000);
    const minutos = Math.floor(segundos / 60);
    const horas = Math.floor(minutos / 60);
    const dias = Math.floor(horas / 24);
    const meses = Math.floor(dias / 30.44);
    const anos = Math.floor(meses / 12);

    const restoMeses = meses % 12;
    const restoDias = Math.floor(dias % 30.44);
    const restoHoras = horas % 24;
    const restoMinutos = minutos % 60;
    const restoSegundos = segundos % 60;

    document.getElementById('contador').textContent =
        `${anos} anos, ${restoMeses} meses, ${restoDias} dias, ` +
        `${restoHoras} horas, ${restoMinutos} minutos e ${restoSegundos} segundos`;
}

atualizarContador();
setInterval(atualizarContador, 1000);

// TODO O CÓDIGO DO CARROSSEL É EXECUTADO APENAS QUANDO A PÁGINA ESTÁ TOTALMENTE CARREGADA
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelector('.slides');
    const totalImages = slides.children.length;

    let currentIndex = 0;

    function mostrarProximaImagem() {
        currentIndex++;

        if (currentIndex >= totalImages) {
            slides.style.transition = 'none';
            currentIndex = 0;
            slides.style.transform = `translateX(-${currentIndex * 100}%)`;

            setTimeout(() => {
                slides.style.transition = 'transform 2s ease-in-out';
            }, 100);
        } else {
            slides.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
    }

    setInterval(mostrarProximaImagem, 4000);
});