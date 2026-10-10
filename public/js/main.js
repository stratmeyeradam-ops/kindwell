// Kindwell frontend - handles auth, board, store, subscriptions
document.addEventListener('DOMContentLoaded', () => {
  initAuth();
  initBoard();
  initStore();
  initSubscribe();
});

async function api(url, opts = {}) {
  const res = await fetch(url, { headers: {'Content-Type': 'application/json'}, ...opts });
  return res.json();
}

// --- AUTH ---
function initAuth() {
  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');
  const logoutBtn = document.getElementById('logout-btn');

  if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const fd = new FormData(loginForm);
      const data = await api('/api/auth/login', { method: 'POST', body: JSON.stringify({ email: fd.get('email'), password: fd.get('password') }) });
      if (data.ok) location.href = '/account';
      else alert(data.error || 'Login failed');
    });
  }

  if (registerForm) {
    registerForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const fd = new FormData(registerForm);
      const data = await api('/api/auth/register', { method: 'POST', body: JSON.stringify({ name: fd.get('name'), email: fd.get('email'), password: fd.get('password') }) });
      if (data.ok) location.href = '/account';
      else alert(data.error || 'Registration failed');
    });
  }

  if (logoutBtn) {
    logoutBtn.addEventListener('click', async () => {
      await api('/api/auth/logout', { method: 'POST' });
      location.href = '/';
    });
  }
}

// --- BOARD ---
function initBoard() {
  const list = document.getElementById('posts-list');
  if (!list) return;

  // Load posts
  api('/api/board').then(data => {
    if (data.posts && data.posts.length) {
      list.innerHTML = data.posts.map(p => `
        <div class="post-item">
          <h4>${p.title}<span class="level-badge">Level ${p.level}</span></h4>
          <p>${p.body}</p>
          <div class="post-meta">by ${p.author || 'Anonymous'} &middot; ${new Date(p.created_at).toLocaleDateString()}</div>
        </div>`).join('');
    } else {
      list.innerHTML = '<p>No posts yet. Be the first to share!</p>';
    }
  });

  // New post toggle
  const newBtn = document.getElementById('new-post-btn');
  const form = document.getElementById('post-form');
  if (newBtn && form) {
    newBtn.addEventListener('click', () => form.classList.toggle('hidden'));
  }

  // Submit post
  const submitBtn = document.getElementById('submit-post');
  if (submitBtn) {
    submitBtn.addEventListener('click', async () => {
      const title = document.getElementById('post-title').value;
      const body = document.getElementById('post-body').value;
      const level = document.getElementById('post-level').value;
      const data = await api('/api/board', { method: 'POST', body: JSON.stringify({ title, body, level }) });
      if (data.ok) location.reload();
      else alert(data.error || 'Could not post');
    });
  }

  // Show tier
  const tierDisplay = document.getElementById('tier-display');
  if (tierDisplay) {
    api('/api/auth/status').then(d => {
      tierDisplay.textContent = d.logged ? `Tier: ${d.tier || 'Free'}` : 'Guest';
    });
  }
}

// --- STORE ---
function initStore() {
  const grid = document.getElementById('products-grid');
  if (!grid) return;

  api('/api/store/products').then(data => {
    if (data.products && data.products.length) {
      grid.innerHTML = data.products.map(p => `
        <div class="product-card">
          <div class="product-info">
            <h4>${p.title || p.name}</h4>
            <p class="product-price">${formatPrice(p)}</p>
            <button class="btn btn-primary" onclick="buyProduct('${p.id}')">Add to Cart</button>
          </div>
        </div>`).join('');
    } else {
      grid.innerHTML = '<p>Products coming soon. Check back shortly.</p>';
    }
  });
}

function formatPrice(product) {
  if (product.prices && product.prices[0]) {
    const p = product.prices[0];
    return (p.amount / Math.pow(10, p.currency?.decimal_digits || 2)).toFixed(2) + ' ' + (p.currency?.code || '');
  }
  if (product.price) return '$' + (product.price / 100).toFixed(2);
  return '';
}

async function buyProduct(variantId) {
  const data = await api('/api/store/checkout', {
    method: 'POST',
    body: JSON.stringify({ items: [{ variant_id: variantId, quantity: 1 }] })
  });
  if (data.url) window.location.href = data.url;
}

// --- SUBSCRIPTIONS ---
function initSubscribe() {
  document.querySelectorAll('.subscribe-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      const tier = btn.dataset.tier;
      const data = await api(`/api/stripe/checkout/${tier}`, { method: 'POST' });
      if (data.url) window.location.href = data.url;
      else alert(data.error || 'Could not start checkout. Are you logged in?');
    });
  });
}
