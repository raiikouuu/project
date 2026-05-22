function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
  const target = document.getElementById(pageId);
  if (target) {
    target.classList.remove('hidden');
  }
}

function togglePassword(inputId) {
  const input = document.getElementById(inputId);
  if (input.type === "password") {
    input.type = "text";
  } else {
    input.type = "password";
  }
}

