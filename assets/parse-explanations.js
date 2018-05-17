$(document).ready(function() {
  anchors.add();
  
  kbCodeSnippet();
  
  const definitionsElement = $('.kb-definitions');
  $('.kb-explain').each(function(index, block) {
    const expElement = $(block);

    const linkElement = expElement.find('a')
      .text(`[${index + 1}]`)
      .attr('href', `#det-${index + 1}`)
      .attr('id', `origin-${index + 1}`);

    definitionsElement.append(createDefinition(index, linkElement.attr('data-details')));

    expElement.addClass('kb-show');
  });

  definitionsElement.addClass('kb-show');

  activateSmoothScroll();

  if (document.location.hash) {
    const originalHash = document.location.hash;
    const $target = $(originalHash);
      $('html, body').animate({
        scrollTop: $target.offset().top
      }, 800, function() {
        // Callback after animation
        // Must change focus!
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
  }
});


function createDefinition(index, text) {
  return `<div class="kb-space"><sup><a id="det-${index + 1}" href="#origin-${index + 1}">[${index + 1}]</a></sup> ${text}</div>`;
}

function activateSmoothScroll() {
  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          // commenting out to make url change. good?
          // event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });
}

function kbCodeSnippet() {
  $('.highlighter-rouge').each(function (i, block) {
    const codeElement = $(block);
    const lang = (_.find(block.classList, classIsLanguage) || '').replace('language-', '');

    const innerCode = codeElement.find('pre code').addClass(lang)[0];

      if (innerCode) {
        // hightlight code (auto detect if needed)
        hljs.highlightBlock(innerCode);
      }
    
      if (hljs.lineNumbersBlock && codeElement.hasClass('kb-show-line-numbers')) {
        hljs.lineNumbersBlock(innerCode);
      }
  });
}

function classIsLanguage(className) {
  return className.startsWith('language-');
}

function toggleDarkTheme() {
  const themeLink = document.getElementById('bulma-theme');
  const dark = '//unpkg.com/bulmaswatch/superhero/bulmaswatch.min.css';
  const light = '//unpkg.com/bulmaswatch/default/bulmaswatch.min.css';

  localforage.getItem('theme')
    .then((theme) => theme !== 'kb-dark-theme')
    .then((shouldChangeToWhite) => {
      if (shouldChangeToWhite) {
        themeLink.href = dark;
      } else {
        themeLink.href = light;
      }
    
      return shouldChangeToWhite;
    })
    .then((shouldChangeToWhite) => shouldChangeToWhite ? localforage.removeItem("theme") : localforage.setItem('theme', 'kb-dark-theme'))
}
