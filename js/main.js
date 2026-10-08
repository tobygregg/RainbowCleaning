// Mobile menu, scroll animations, footer year and quote form.
const $ = id => document.getElementById(id);

// Mobile menu button
const burger = $('burger');
if (burger) burger.onclick = () => $('mob').classList.toggle('hidden');

// Fade-in on scroll (elements with class "rev")
const io = new IntersectionObserver(entries => entries.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
}), { threshold: 0.12 });
document.querySelectorAll('.rev').forEach(el => io.observe(el));

// Footer year
$('yr').textContent = new Date().getFullYear();

// Quote form: sends the enquiry by email using FormSubmit (formsubmit.co).
// The destination email is in the form's action="" attribute in contact.html.
const form = $('quote-form');
if (form) form.addEventListener('submit', async e => {
  e.preventDefault();
  const btn = $('send'), msg = $('form-msg');
  btn.disabled = true; btn.style.opacity = '.6';
  msg.classList.add('hidden');
  try {
    const res = await fetch(form.action, {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: new FormData(form)
    });
    if (!res.ok) throw new Error('Send failed');
    form.classList.add('hidden');
    $('form-ok').classList.remove('hidden');
  } catch (err) {
    msg.textContent = 'Sorry, that did not send. Please call 01481 231009 or email info@cirs.gg.';
    msg.style.color = '#dc2626';
    msg.classList.remove('hidden');
    btn.disabled = false; btn.style.opacity = '';
  }
});
