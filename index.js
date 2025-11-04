   const burger = document.getElementById('burger');
    const mobileMenu = document.getElementById('mobileMenu');
    burger && burger.addEventListener('click', ()=>{
      const expanded = burger.getAttribute('aria-expanded') === 'true';
      burger.setAttribute('aria-expanded', String(!expanded));
      if(mobileMenu.hasAttribute('hidden')) mobileMenu.removeAttribute('hidden'); else mobileMenu.setAttribute('hidden','');
    });

    // Current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Contact form: open mailto with form data (fallback to mailto since no backend)
    document.getElementById('contactForm').addEventListener('submit', (e)=>{
      e.preventDefault();
      const name = encodeURIComponent(document.getElementById('name').value.trim());
      const email = encodeURIComponent(document.getElementById('email').value.trim());
      const message = encodeURIComponent(document.getElementById('message').value.trim());
      const subject = encodeURIComponent('Website Inquiry from ' + (name || 'Website Visitor'));
      const body = encodeURIComponent('Name: ' + decodeURIComponent(name) + '\nEmail: ' + decodeURIComponent(email) + '\n\nMessage:\n' + decodeURIComponent(message));

      // built mailto link
      const mailto = `mailto:hello@autodoors.example?subject=${subject}&body=${body}`;
      window.location.href = mailto;
    });

    // Small accessibility: keyboard trap close for mobile menu (Esc key)
    document.addEventListener('keydown', (e)=>{
      if(e.key === 'Escape'){
        if(!mobileMenu.hasAttribute('hidden')) mobileMenu.setAttribute('hidden','');
        burger && burger.setAttribute('aria-expanded','false');
      }
    });