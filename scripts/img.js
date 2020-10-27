function renderPhotos() {
    return `
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ1fXUoZd7nULktGVRUKj6kbHTilPTkK3WC4g&usqp=CAU" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRnOZZzsFjkeY0VZqkLByJU4RcwfhwFAcyZOw&usqp=CAU" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRyxq86BSQAi7-FADQ96K1HQasOsvtd3V18wQ&usqp=CAU" class="d-block w-100" alt="...">
        </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
        </a>
    </div>
    `
}
document.getElementById('gallery').innerHTML = renderPhotos();