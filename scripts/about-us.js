function renderAbout_Us(){
  return `
  <div id="myCarousel" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
    <li data-target="#myCarousel" data-slide-to="1"></li>
    <li data-target="#myCarousel" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="first-slide" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="First slide">
      <div class="container">
        <div class="carousel-caption text-left">
          <h1>Our Mission</h1>
          <p>To help you decide on your next tattoo! Whether you need some ideas or just need to find the right place, we have it all!</p>
          <p><a class="btn btn-lg btn-primary" href="#" role="button">Get Inked!</a></p>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <img class="second-slide" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Second slide">
      <div class="container">
        <div class="carousel-caption">
          <h1>About Us</h1>
          <p>We are tattoo fanatics. We think about tattoos all day everyday. We eat, sleep, and breathe just to get our next tatoo. The excitement of getting our next tattoo is what wakes us up in the morning. We sleep so we can dream of our next tattoo.</p>
          <p><a class="btn btn-lg btn-primary" href="#" role="button">Get Inked!</a></p>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <img class="third-slide" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Third slide">
      <div class="container">
        <div class="carousel-caption text-right">
          <h1>Why trust us?</h1>
          <p>100% of our staff either has tattoos or is thinking about getting our next tatoo. Combined, our staff has an average of 7 tatoos! When it comes to getting tatted, we know what's up!</p>
          <p><a class="btn btn-lg btn-primary" href="#" role="button">Get Inked!</a></p>
        </div>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
  `;
};

document.getElementById("about").innerHTML = renderAbout_Us();