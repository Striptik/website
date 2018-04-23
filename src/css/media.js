export const sizes = {
  giant: 1200,
  desktop: 992,
  tablet: 768,
  phone: 576,
};

export default {
  giant: `max-width: ${sizes.giant}px`,
  desktop: `max-width: ${sizes.desktop}px`,
  tablet: `max-width: ${sizes.tablet}px`,
  phone: `max-width: ${sizes.phone}px`,
  minGiant: `min-width: ${sizes.giant}px`,
  minDesktop: `min-width: ${sizes.desktop}px`,
  minTablet: `min-width: ${sizes.tablet}px`,
  minPhone: `min-width: ${sizes.phone}px`,
  iphone678: `(max-width: 375px) and (max-height:667px) and (min-width: 375px) and (min-height:667px)`,
  iphoneX: `(max-width: 375px) and (max-height:812px) and (min-width: 375px) and (min-height:812px)`,
};
