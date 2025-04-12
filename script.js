function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}
var acc = document.getElementsByClassName("accordion-button");
for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
// Blog yazıları eklemek için bir dizi
const blogPosts = [];

// Blog yazılarını ekranda listele
function bloglariGoster() {
  const blogContainer = document.getElementById("blogContainer");
  blogContainer.innerHTML = ""; // Önce var olan içeriği temizle
  blogPosts.forEach((post, index) => {
    const postDiv = document.createElement("div");
    postDiv.className = "blog-post";
    postDiv.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.content}</p>
      <button onclick="yaziSil(${index})">Sil</button>
    `;
    blogContainer.appendChild(postDiv);
  });
}

// Yeni blog yazısı ekle
function yaziEkle() {
  const title = document.getElementById("blogTitle").value;
  const content = document.getElementById("blogContent").value;

  if (title && content) {
    blogPosts.push({ title, content });
    document.getElementById("blogTitle").value = "";
    document.getElementById("blogContent").value = "";
    bloglariGoster();
  } else {
    alert("Lütfen başlık ve içerik girin!");
  }
}

// Blog yazısı sil
function yaziSil(index) {
  blogPosts.splice(index, 1);
  bloglariGoster();
}

// Sayfa yüklendiğinde blog yazılarını göster
document.addEventListener("DOMContentLoaded", bloglariGoster);
// İlk haber yazısını ekleyelim
blogPosts.push({
  title: "Davşan Filoş Gezmede",
  content: "Leyloş kendi aleminde :D"
});

// Blogları göstererek hemen ekranda görünür hale getirelim
bloglariGoster();

