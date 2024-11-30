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
  
