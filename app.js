const clock = document.querySelector(".clock");

const tick = () => {
    const now = new Date();

    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    const html = `
    <span>${h}:${m}:${s}</span>`;

    clock.innerHTML = html;
};

setInterval(tick, 1000);