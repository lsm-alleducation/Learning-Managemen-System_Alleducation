// Fungsi untuk register
document
  .getElementById("register-form")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;

    // Simpan data ke localStorage
    if (email && password) {
      localStorage.setItem(email, password);
      alert("Register berhasil! Silakan login.");
      window.location.href = "login.html"; // Redirect ke halaman login
    } else {
      alert("Mohon isi email dan password.");
    }
  });

// Fungsi untuk login
document
  .getElementById("login-form")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    const storedPassword = localStorage.getItem(email);
    if (storedPassword && storedPassword === password) {
      // Login berhasil
      alert("Login berhasil!");
      window.location.href = "dashboard.html"; // Redirect ke dashboard
    } else {
      // Login gagal
      alert("Email atau password salah!");
    }
  });

// Fungsi untuk reset password
document
  .getElementById("reset-password-form")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("reset-email").value;

    if (localStorage.getItem(email)) {
      alert("Jika email terdaftar, kami akan mengirimkan link reset password.");
    } else {
      alert("Email tidak ditemukan!");
    }
  });

// Fungsi logout
function logout() {
  alert("Anda telah logout!");
  window.location.href = "index.html"; // Redirect ke halaman home
}
