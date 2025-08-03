import mouseFollower from 'https://cdn.jsdelivr.net/gh/UvCodingOP/Finy/core/mouseFollower.js';
import parallax from 'https://cdn.jsdelivr.net/gh/UvCodingOP/Finy/core/parallax.js';
import magnetic from 'https://cdn.jsdelivr.net/gh/UvCodingOP/Finy/core/magnetic.js';
import splitText from 'https://cdn.jsdelivr.net/gh/UvCodingOP/Finy/core/splitText.js';
import reveal from 'https://cdn.jsdelivr.net/gh/UvCodingOP/Finy/core/reveal.js';
import typeText from 'https://cdn.jsdelivr.net/gh/UvCodingOP/Finy/core/typeText.js';
import scrollEffect from 'https://cdn.jsdelivr.net/gh/UvCodingOP/Finy/core/scrollEffect.js';
import scrollTo from 'https://cdn.jsdelivr.net/gh/UvCodingOP/Finy/core/scrollTo.js';
import pin from 'https://cdn.jsdelivr.net/gh/UvCodingOP/Finy/core/pin.js';
import smoothScroll from 'https://cdn.jsdelivr.net/gh/UvCodingOP/Finy/core/smoothScroll.js';
import pageTransition from 'https://cdn.jsdelivr.net/gh/UvCodingOP/Finy/core/pageTransition.js';
import onHover from 'https://cdn.jsdelivr.net/gh/UvCodingOP/Finy/core/onHover.js';
import animateIn from 'https://cdn.jsdelivr.net/gh/UvCodingOP/Finy/core/animateIn.js';
import animateOut from 'https://cdn.jsdelivr.net/gh/UvCodingOP/Finy/core/animateOut.js';
import timeline from 'https://cdn.jsdelivr.net/gh/UvCodingOP/Finy/core/timeline.js';
import loader from 'https://cdn.jsdelivr.net/gh/UvCodingOP/Finy/core/loader.js';


class Finy {
  mouseFollower(selector, options = {}) {
    const el = typeof selector === 'string' ? document.querySelector(selector) : selector;
    if (!el) throw new Error(`Finy.mouseFollower: Element '${selector}' not found`);
    return mouseFollower(el, options);
  }

  parallax(...args) { return parallax(...args); }
  magnetic(...args) { return magnetic(...args); }
  splitText(...args) { return splitText(...args); }
  reveal(...args) { return reveal(...args); }
  typeText(...args) { return typeText(...args); }
  scrollEffect(...args) { return scrollEffect(...args); }
  scrollTo(...args) { return scrollTo(...args); }
  pin(...args) { return pin(...args); }
  smoothScroll(...args) { return smoothScroll(...args); }
  pageTransition(...args) { return pageTransition(...args); }
  onHover(...args) { return onHover(...args); }
  animateIn(...args) { return animateIn(...args); }
  animateOut(...args) { return animateOut(...args); }
  timeline(...args) { return timeline(...args); }
  loader(...args) { return loader(...args); }
}

export default Finy;
