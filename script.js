const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

// Fungsi untuk toggle dropdown di layar kecil
menuIcon.addEventListener("click", function () {
  if (window.innerWidth <= 768) {
    menuList.classList.toggle("show"); // Toggle class "show" untuk menampilkan/menyembunyikan menu
    menuList.classList.remove("hidden"); // Hapus class "hidden" saat menu dibuka
  }
});

// Menutup dropdown saat klik di luar menu atau icon
document.addEventListener("click", function (event) {
  if (!menuIcon.contains(event.target) && !menuList.contains(event.target) && window.innerWidth <= 768) {
    menuList.classList.remove("show"); // Hapus class "show" untuk menutup menu
    menuList.classList.add("hidden");  // Tambahkan class "hidden" untuk sembunyikan menu
  }
});

// Pastikan ul terlihat di layar besar dan sembunyi di layar kecil saat tidak dibuka
window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    menuList.classList.remove("show", "hidden"); // Pastikan menu selalu terlihat di layar besar
  } else {
    menuList.classList.add("hidden"); // Sembunyikan menu di layar kecil saat resize
  }
});

