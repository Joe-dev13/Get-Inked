function renderContactHtml() {
	return ` 
    <a href="https://github.com/Joe-dev13" target="_blank"><button>Contact Joe <i class='fab fa-github'></i></button></a>
    <a href="https://github.com/MatthewLee4" target="_blank"><button>Contact Matthew <i class='fab fa-github'></i></button></a>
    <a href="https://github.com/indexcloud" target="_blank"><button>Contact Jason <i class='fab fa-github'></i></button></a>
    <a href="https://github.com/bpincelamattos" target="_blank"><button>Contact Barbara<i class='fab fa-github'></i></button></a>
  `;
}

document.getElementById("contact").innerHTML = renderContactHtml();
