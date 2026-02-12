let pages = document.querySelectorAll(".page");
let currentPage = 0;

function showPage(index) {
    pages.forEach(p => p.classList.remove("active"));
    pages[index].classList.add("active");

    let backBtn = document.getElementById("backBtn");
    let nextBtn = document.getElementById("nextBtn");
    let finishBtn = document.getElementById("finishBtn");

    if (index === pages.length - 1) {
        nextBtn.style.display = "none";
        finishBtn.style.display = "inline-block";
    } else {
        nextBtn.style.display = "inline-block";
        finishBtn.style.display = "none";
    }

    backBtn.style.display = index === 0 ? "none" : "inline-block";
}

function nextPage() {
    if (currentPage < pages.length - 1) {
        currentPage++;
        showPage(currentPage);
    }
}

function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        showPage(currentPage);
    }
}

function goToLove() {
    document.querySelector(".book").style.display = "none";
    document.getElementById("loveScreen").style.display = "flex";
    setInterval(createHeart, 300);
}

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";
    document.getElementById("loveScreen").appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}

showPage(currentPage);
