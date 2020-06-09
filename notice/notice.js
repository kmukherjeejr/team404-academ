const noticeList = document.getElementById("noticeList");
let hpNotices = [];

const loadNotices = async () => {
  try {
    const res = await fetch('http://hackathon.hattsoffstore.com/submit-notice/jsonN.json');
    hpNotices = await res.json();
    displayNotices(hpNotices);
  } catch(err) {
    console.error(err);
  }
};

const displayNotices = (notices) => {
  const htmlString = notices
      .map((notice) => {
          return `
          <button class="accordion">${notice.heading}</button>
          <div class="panel">
	            <p>${notice.body}</p>
	        </div>
          </li>
      `;
      })
      .join('');
  noticeList.innerHTML = htmlString;
};

loadNotices();


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}


function myFunction() {
    var x = document.lastModified;
    document.getElementById("demo").innerHTML = x;
  }