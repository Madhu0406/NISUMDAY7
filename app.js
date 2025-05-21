function navigate(page) {
  const content = document.getElementById('content');

  if (page === 'home') {
    content.innerHTML = `
      <h2>Home</h2>
      <p>Welcome to our simple SPA. Navigate using the menu above.</p>
    `;
  } else if (page === 'about') {
    content.innerHTML = `
      <h2>About</h2>
      <p>This is a basic single page application made using plain HTML, CSS, and JavaScript.</p>
    `;
  } else if (page === 'contact') {
    content.innerHTML = `
      <h2>Contact</h2>
      <p>You can contact us at: abc@nisum.com</p>
    `;
  }
}

window.onload = () => navigate('home');
