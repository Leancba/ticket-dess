import { useEffect, useState } from 'react';

type Breakpoint = 'XS' | 'S' | 'M' | 'L' | 'XL';

const getBreakpoint = (width: number): Breakpoint => {
  if (width < 480) return 'XS';
  if (width < 768) return 'S';
  if (width < 990) return 'M';
  if (width < 1200) return 'L';
  return 'XL';
};

const useBreakpoint = (): Breakpoint => {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>(() =>
    typeof window !== 'undefined' ? getBreakpoint(window.innerWidth) : 'XL'
  );

  useEffect(() => {
    const handleResize = () => {
      setBreakpoint(getBreakpoint(window.innerWidth));
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return breakpoint;
};

export default useBreakpoint;
