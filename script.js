// Menu hambúrguer
const hamburger2 = document.getElementById('hamburger2');
const nav2 = document.getElementById('nav2');

hamburger2.addEventListener('click', () => {
  hamburger2.classList.toggle('open');
  nav2.classList.toggle('active');
});

// Scroll animation
const animatedElements = document.querySelectorAll('.animated-text2');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });

animatedElements.forEach(el => observer.observe(el));




function revealOnScroll2() {
    const elements = document.querySelectorAll('.animate-up2');

    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight - 100) {
        el.classList.add('visible2');
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll2);
  window.addEventListener('load', revealOnScroll2);








function revealCards3() {
    const cards = document.querySelectorAll('.card3');
    const windowHeight = window.innerHeight;

    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      if (rect.top < windowHeight - 100) {
        card.classList.add('visible3');
      }
    });
  }

  window.addEventListener('scroll', revealCards3);
  window.addEventListener('load', revealCards3);







   document.addEventListener("DOMContentLoaded", () => {
    const animatedElements = document.querySelectorAll(".animate-scroll4");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible4");
            observer.unobserve(entry.target); // Para animar uma única vez
          }
        });
      },
      { threshold: 0.2 }
    );

    animatedElements.forEach((el) => {
      observer.observe(el);
    });
  });






   // Animação ao rolar
        document.addEventListener('DOMContentLoaded', function() {
            const heroContent = document.querySelector('.hero-content');
            
            // Função para verificar se o elemento está visível
            function isElementInViewport(el) {
                const rect = el.getBoundingClientRect();
                return (
                    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
                    rect.bottom >= 0
                );
            }
            
            // Verifica a posição ao carregar e ao rolar
            function checkScroll() {
                if (isElementInViewport(heroContent)) {
                    heroContent.classList.add('animate');
                    // Remove o event listener após a animação ocorrer
                    window.removeEventListener('scroll', checkScroll);
                }
            }
            
            // Verifica ao carregar a página
            checkScroll();
            
            // Adiciona listener para o evento de scroll
            window.addEventListener('scroll', checkScroll);
        });






        document.addEventListener('DOMContentLoaded', function() {
    // Elementos para animar
    const elements = [
        { element: document.getElementById('blog-header5'), order: 0 },
        { element: document.getElementById('blog-card5-1'), order: 1 },
        { element: document.getElementById('blog-card5-2'), order: 2 },
        { element: document.getElementById('blog-card5-3'), order: 3 },
        { element: document.getElementById('blog-link5'), order: 4 }
    ];
    
    // Verifica se o elemento está visível na tela
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.75
        );
    }
    
    // Função para verificar e animar os elementos
    function checkAnimation() {
        elements.forEach(item => {
            if (item.element && isInViewport(item.element)) {
                // Define a propriedade --order para o delay CSS
                item.element.style.setProperty('--order', item.order);
                item.element.classList.add('animate5');
            }
        });
    }
    
    // Verifica ao carregar a página
    checkAnimation();
    
    // Adiciona listener para o evento de scroll
    window.addEventListener('scroll', checkAnimation);
    
    // Adiciona hover effects via JS para melhor compatibilidade
    const cards = document.querySelectorAll('.blog-card5');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(0,0,0,0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        });
    });
});










  const titulos = document.querySelectorAll('.mvp-titulo');

  titulos.forEach((titulo) => {
    titulo.addEventListener('click', () => {
      const conteudo = titulo.nextElementSibling;

      // Fecha os outros abertos
      document.querySelectorAll('.mvp-conteudo').forEach((el) => {
        if (el !== conteudo) {
          el.style.maxHeight = null;
        }
      });

      // Alterna o atual
      if (conteudo.style.maxHeight) {
        conteudo.style.maxHeight = null;
      } else {
        conteudo.style.maxHeight = conteudo.scrollHeight + "px";
      }
    });
  });






document.getElementById('form-contato').addEventListener('submit', function(e) {
      e.preventDefault();

      const nome = document.getElementById('nome').value;
      const empresa = document.getElementById('empresa').value;
      const cargo = document.getElementById('cargo').value;
      const email = document.getElementById('email').value;
      const mensagem = document.getElementById('mensagem').value;

      const texto = `*Novo contato pelo site!*%0A
*Nome:* ${nome}%0A
*Empresa:* ${empresa}%0A
*Cargo:* ${cargo}%0A
*E-mail:* ${email}%0A
*Mensagem:* ${mensagem}`;

      const numero = '5561996067198'; // Número no formato internacional (Brasil: 55 + DDD + número)
      const link = `https://wa.me/${numero}?text=${texto}`;

      window.open(link, '_blank');
    });




 const perguntas = document.querySelectorAll('.faq-question');

    perguntas.forEach((btn) => {
      btn.addEventListener('click', () => {
        const isActive = btn.classList.contains('active');

        // Fecha todos
        document.querySelectorAll('.faq-question').forEach(q => q.classList.remove('active'));
        document.querySelectorAll('.faq-answer').forEach(a => a.style.maxHeight = null);

        // Abre somente se não estiver ativa
        if (!isActive) {
          btn.classList.add('active');
          const resposta = btn.nextElementSibling;
          resposta.style.maxHeight = resposta.scrollHeight + 'px';
        }
      });
    });







    
