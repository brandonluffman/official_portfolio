import { useInView } from 'react-intersection-observer';

const FadeIn = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.2, // Adjust the threshold as needed
  });

  return (
    <div ref={ref} className={inView ? 'fade-in' : ''}>
      {children}
    </div>
  );
};

export default FadeIn