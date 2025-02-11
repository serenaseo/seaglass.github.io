let angle = 0;

window.addEventListener("scroll", () => {
    angle += 2; // 스크롤할 때마다 회전
    document.querySelectorAll(".rotating-image").forEach((img, index) => {
        const rotation = angle + index * 150; // 120도씩 차이
        img.style.transform = `rotate(${rotation}deg) translate(180px) rotate(-${rotation}deg)`;
    });
});
