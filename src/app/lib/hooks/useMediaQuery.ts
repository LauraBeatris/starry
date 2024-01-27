import { useEffect, useState } from 'react';

type Device = 'mobile' | 'tablet' | 'desktop';

interface Dimensions {
  width: number;
  height: number;
}

const breakpoints: Record<Exclude<Device, 'desktop'>, MediaQueryList> = {
  mobile: window.matchMedia('(max-width: 640px)'),
  tablet: window.matchMedia('(min-width: 641px) and (max-width: 1024px)'),
};

export function useMediaQuery() {
  const [device, setDevice] = useState<Device>();
  const [dimensions, setDimensions] = useState<Dimensions>();

  useEffect(() => {
    function checkDevice() {
      if (breakpoints.mobile.matches) {
        return setDevice('mobile');
      }

      if (breakpoints.tablet.matches) {
        return setDevice('tablet');
      }

      return setDevice('desktop');
    }

    setDimensions({ width: window.innerWidth, height: window.innerHeight });

    checkDevice();

    window.addEventListener('resize', checkDevice);

    return () => {
      window.removeEventListener('resize', checkDevice);
    };
  }, []);

  return {
    device,
    width: dimensions?.width,
    height: dimensions?.height,
    isMobile: device === 'mobile',
    isTablet: device === 'tablet',
    isDesktop: device === 'desktop',
  };
}
