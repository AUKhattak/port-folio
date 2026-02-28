// Animation keyframes as reusable objects
export const animationKeyframes = {
  bounce: {
    '0%, 100%': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(-16px)' },
  },
  shake: {
    '0%, 100%': { transform: 'translateX(0)' },
    '25%': { transform: 'translateX(-8px)' },
    '75%': { transform: 'translateX(8px)' },
  },
  fadeInUp: {
    from: {
      opacity: 0,
      transform: 'translateY(16px)',
    },
    to: {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
  slideDown: {
    from: {
      opacity: 0,
      transform: 'translateY(-16px)',
    },
    to: {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
};

// Common animation styles
export const animationStyles = {
  smooth: {
    transition: 'all 0.3s ease',
  },
  smoothSlow: {
    transition: 'all 0.5s ease',
  },
  bounceAnimation: {
    animation: 'bounce 1s ease-in-out infinite',
    '@keyframes bounce': animationKeyframes.bounce,
  },
  shakeAnimation: {
    animation: 'shake 0.5s ease-in-out',
    '@keyframes shake': animationKeyframes.shake,
  },
};
