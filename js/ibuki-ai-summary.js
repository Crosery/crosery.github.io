(() => {
  const TYPE_SPEED = 18;

  function typeText(el, text) {
    if (!el || !text) return;
    if (el.dataset.typed === '1') return;
    el.dataset.typed = '1';
    el.textContent = '';
    let i = 0;
    const timer = setInterval(() => {
      i += 1;
      el.textContent = text.slice(0, i);
      if (i >= text.length) clearInterval(timer);
    }, TYPE_SPEED);
  }

  function init() {
    const root = document.querySelector('.post-ai-description');
    if (!root) return;
    const text = (root.dataset.aiSummary || '').trim();
    const box = root.querySelector('.ai-explanation');
    if (!box || !text) return;
    typeText(box, text);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  document.addEventListener('pjax:complete', init);
})();
