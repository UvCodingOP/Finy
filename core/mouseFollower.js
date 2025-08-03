/**
 * Creates a smooth, scalable cursor follower.
 * @param {Object} options - Configuration options.
 */
// core/mouseFollower.js
export default function mouseFollower(el, {
  speed = 0.2,
  scale = 1,
  leaveScale = 0.8,
  easing = 0.1,
  follow = true,
  debug = false,
} = {}) {
  let mouseX = 0, mouseY = 0;
  let posX = 0, posY = 0;
  let rafId = null;

  el.style.position = "fixed";
  el.style.pointerEvents = "none";
  el.style.zIndex = "999";

  const updatePosition = () => {
    posX += (mouseX - posX) * easing;
    posY += (mouseY - posY) * easing;
    el.style.transform = `translate3d(${posX}px, ${posY}px, 0) scale(${scale})`;
    rafId = requestAnimationFrame(updatePosition);
  };

  const onMouseMove = (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  };

  const onMouseLeave = () => {
    if (leaveScale !== scale) {
      el.style.transform = `translate3d(${posX}px, ${posY}px, 0) scale(${leaveScale})`;
    }
  };

  const onMouseEnter = () => {
    el.style.transform = `translate3d(${posX}px, ${posY}px, 0) scale(${scale})`;
  };

  document.addEventListener("mousemove", onMouseMove);
  el.addEventListener("mouseleave", onMouseLeave);
  el.addEventListener("mouseenter", onMouseEnter);

  updatePosition();

  if (debug) console.log("Finy: mouseFollower started");

  return {
    destroy() {
      cancelAnimationFrame(rafId);
      document.removeEventListener("mousemove", onMouseMove);
      el.removeEventListener("mouseleave", onMouseLeave);
      el.removeEventListener("mouseenter", onMouseEnter);
    }
  };
}

