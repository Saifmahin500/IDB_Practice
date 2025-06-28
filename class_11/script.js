function loadComponent(id, file) {
    fetch(file).then(response => response.text()).then(data => {
        document.getElementById(id).innerHTML = data;
    }).catch(error => console.log("error.loading :" + file, error));
}

window.onload = function () {
    loadComponent("header", "componets/header.html");
    loadComponent("navber", "componets/navber.html");
    loadComponent("sidebar", "componets/sidebar.html");
    loadComponent("search", "componets/search.html");
    loadComponent("footer", "componets/footer.html");
}