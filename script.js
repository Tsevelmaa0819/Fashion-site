document.addEventListener("DOMContentLoaded", function () {
    const targets = document.querySelectorAll(".js-scroll");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("scrolled");
            }
        });
    }, {
        threshold: 0.1 // 画面の10%が見えたら発火
    });

    targets.forEach((target) => {
        observer.observe(target);
    });
});
