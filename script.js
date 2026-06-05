document.querySelectorAll('.link-card').forEach(card => {

    card.addEventListener('mouseenter', () => {

        card.style.transform = 'translateY(-4px)';

    });

    card.addEventListener('mouseleave', () => {

        card.style.transform = 'translateY(0px)';

    });

});

let time = 20;

const counter =
    document.getElementById('countdown');

const timer = setInterval(() => {

    time--;

    if (counter) {
        counter.innerText = time;
    }

    if (time <= 0) {

        clearInterval(timer);

        window.open(
            'https://trendfold.qzz.io/',
            '_blank'
        );

    }

}, 1000);