function loadHTML(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(error => console.error(`Error loading ${file}:`, error));
}

// Load different sections
document.addEventListener("DOMContentLoaded", function () {
    loadHTML("header", "common/header.html");
    loadHTML("navbar", "common/navbar.html");
    loadHTML("footer", "common/footer.html");
});
