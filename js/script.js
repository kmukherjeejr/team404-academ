const toggle = document.getElementById('toggle');


// Toggle nav
toggle.addEventListener('click', () =>
  document.body.classList.toggle('show-nav')
);

// side link navigation 
function iFrameURL(url) {
  document.getElementById("iframe").src = url;
}