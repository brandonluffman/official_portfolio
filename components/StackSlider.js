import React from 'react';

const techLogos = {
  'Full Stack': [
    { src: '/logos/python.png', alt: 'Python' },
    { src: '/logos/javascript.png', alt: 'JavaScript' },
    { src: '/logos/react.png', alt: 'React' },
    { src: '/logos/nextjs.webp', alt: 'NextJS' },
    { src: '/logos/typescript.png', alt: 'TypeScript' },
    { src: '/logos/node.png', alt: 'Node.js' },
    { src: '/logos/html.png', alt: 'HTML' },
    { src: '/logos/css.png', alt: 'CSS' },
    { src: '/logos/aws.png', alt: 'AWS' },
    { src: '/logos/mysql.png', alt: 'MySQL' },
    { src: '/logos/postgresql.png', alt: 'PostgreSQL' },
  ],
  'Machine Learning': [
    { src: '/logos/python.png', alt: 'Python' },
    { src: '/logos/pytorch.png', alt: 'PyTorch' },
    { src: '/logos/scikit.png', alt: 'Scikit-Learn' },
    { src: '/logos/pandas.png', alt: 'Pandas' },
    { src: '/logos/numpy.png', alt: 'NumPy' },
    { src: '/logos/fastapi.png', alt: 'FastAPI' },
    { src: '/logos/spacy.png', alt: 'spaCy' },
    { src: '/logos/aws.png', alt: 'AWS' },
    { src: '/logos/mysql.png', alt: 'MySQL' },
    { src: '/logos/postgresql.png', alt: 'PostgreSQL' },
  ],
};

const TechSlider = ({ title, logos }) => (
  <>
    <h2 className="stack-subheader">{title}</h2>
    <div className="slider">
      <div className="slide-track">
        {logos.map((logo, index) => (
          <div className="slide" key={index}>
            <img src={logo.src} alt={logo.alt} height="50" width="50" />
          </div>
        ))}
      </div>
    </div>
  </>
);

const StackSlider = () => (
  <div>
    <h2>My Tech Stack</h2>
    {Object.entries(techLogos).map(([title, logos]) => (
      <TechSlider key={title} title={title} logos={logos} />
    ))}
  </div>
);

export default StackSlider;
