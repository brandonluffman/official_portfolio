import { useRef, useEffect, useState } from 'react';
import useOnScreen from './useOnScreen';

const FadeInSection = ({ children }) => {
  const ref = useRef();
  const onScreen = useOnScreen(ref);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (onScreen && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [onScreen, hasAnimated]);

  return (
    <div
      ref={ref}
      style={{
        opacity: hasAnimated ? 1 : 0,
        transform: hasAnimated ? 'translateY(0)' : 'translateY(100px)',
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
      }}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
