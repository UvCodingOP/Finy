import mouseFollower from './core/mouseFollower.js';
import parallax from './core/parallax.js';
import magnetic from './core/magnetic.js';
import splitText from './core/splitText.js';
import reveal from './core/reveal.js';
import typeText from './core/typeText.js';
import scrollEffect from './core/scrollEffect.js';
import scrollTo from './core/scrollTo.js';
import pin from './core/pin.js';
import smoothScroll from './core/smoothScroll.js';
import pageTransition from './core/pageTransition.js';
import onHover from './core/onHover.js';
import animateIn from './core/animateIn.js';
import animateOut from './core/animateOut.js';
import timeline from './core/timeline.js';
import loader from './core/loader.js';

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
