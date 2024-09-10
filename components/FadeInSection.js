import { useRef } from 'react';
import useOnScreen from './useOnScreen';

const FadeInSection = ({ children }) => {
  const ref = useRef();
  const onScreen = useOnScreen(ref);

  return (
    <div
      ref={ref}
      style={{
        opacity: onScreen ? 1 : 0,
        transform: onScreen ? 'translateY(0)' : 'translateY(100px)',
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
      }}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
