document.addEventListener('DOMContentLoaded', function() {
  const feuBlock = document.getElementById('feu');
  const acmBlock = document.getElementById('acm');
  const feuBtn = document.getElementById('btn_feu');
  const acmBtn = document.getElementById('btn_acm');

  acmBlock.style.display = 'none';

  feuBtn.style.backgroundImage = 'linear-gradient(90deg, #C58DE3, #e180ff, #ba67e7)';
  feuBtn.style.backgroundClip = 'text';
  feuBtn.style.webkitBackgroundClip = 'text';
  feuBtn.style.color = 'transparent';

  function addFadeUpAnimation(block) {
      block.style.opacity = '0';
      block.style.transform = 'translateY(20px)';
      block.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';

      block.offsetHeight;
      
      block.style.opacity = '1';
      block.style.transform = 'translateY(0)';
  }

  acmBtn.addEventListener('click', function(e) {
      e.preventDefault();
      feuBlock.style.display = 'none';
      acmBlock.style.display = 'block';

      addFadeUpAnimation(acmBlock);

      acmBtn.style.backgroundImage = 'linear-gradient(90deg, #C58DE3, #e180ff, #ba67e7)';
      acmBtn.style.backgroundClip = 'text';
      acmBtn.style.webkitBackgroundClip = 'text';
      acmBtn.style.color = 'transparent';

      feuBtn.style.backgroundImage = 'none';
      feuBtn.style.color = 'white';
  });

  feuBtn.addEventListener('click', function(e) {
      e.preventDefault();
      acmBlock.style.display = 'none';
      feuBlock.style.display = 'block';

      addFadeUpAnimation(feuBlock);

      feuBtn.style.backgroundImage = 'linear-gradient(90deg, #C58DE3, #e180ff, #ba67e7)';
      feuBtn.style.backgroundClip = 'text';
      feuBtn.style.webkitBackgroundClip = 'text';
      feuBtn.style.color = 'transparent';

      acmBtn.style.backgroundImage = 'none';
      acmBtn.style.color = 'white';
  });
});

document.addEventListener('DOMContentLoaded', function () {
    const text = "hi i am loucyl ";
    const hiElement = document.querySelector('.hi');
    const highlightStartIndex = text.indexOf(' loucyl');
    const highlightWord = " loucyl";
    const typingSpeed = 150;

    let i = 0;

    function typeWriter() {
        if (i <= text.length) {
            const normalText = text.substring(0, highlightStartIndex);
            const highlightedText = text.substring(highlightStartIndex, i);

            if (i > highlightStartIndex) {
                hiElement.innerHTML = normalText + '<span class="highlight">' + highlightedText + '</span>' + '<span class="cursor">|</span>';
            } else {
                hiElement.innerHTML = text.substring(0, i) + '<span class="cursor">|</span>';
            }

            i++;
            setTimeout(typeWriter, typingSpeed);
        } else {
            hiElement.innerHTML = text.replace(highlightWord, `<span class="highlight">${highlightWord}</span>`) + '<span class="cursor static-cursor">|</span>';
        }
    }

    typeWriter();
});

document.addEventListener("DOMContentLoaded", () => {
    const fadeIns = document.querySelectorAll('.fadeIn');
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.5 });  // Trigger when 50% is visible
  
    fadeIns.forEach(fadeIn => observer.observe(fadeIn));
  });


  
  
