console.log("helppppppppppppppppppp")

 /* ── Letter-by-letter name animation ── */
  const NAME   = 'Your Name';
  const nameEl = document.getElementById('introName');

  NAME.split('').forEach((ch, i) => {
    if (ch === ' ') {
      const sp = document.createElement('span');
      sp.className = 'space';
      nameEl.appendChild(sp);
      return;
    }
    const span = document.createElement('span');
    span.className = 'char' + (i > NAME.indexOf(' ') ? ' grad' : '');
    span.textContent = ch;
    span.style.animationDelay = (0.75 + i * 0.07) + 's';
    nameEl.appendChild(span);
  });

  /* ── Dismiss intro after loading bar finishes ── */
  setTimeout(() => {
    const intro = document.getElementById('intro');
    const page  = document.getElementById('page');
    intro.classList.add('leave');
    page.classList.add('show');
    intro.addEventListener('animationend', () => intro.style.display = 'none', { once: true });
  }, 3400);

  /* ── Scroll reveal ── */
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => {
          e.target.classList.add('visible');
          if (e.target.classList.contains('skill-card')) {
            e.target.classList.add('in-view');
            const bar = e.target.querySelector('.skill-bar');
            if (bar) bar.style.transform = `scaleX(${bar.dataset.w || 1})`;
          }
        }, i * 90);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));