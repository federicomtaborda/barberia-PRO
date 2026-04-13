import React, { useState, useEffect, useRef } from 'react';

const ChromaticImage = ({ src, alt, className, forceColor = false, ...props }) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { threshold: 0.15 }
    );
    
    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);
    
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  // La imagen está en color si está en el viewport O si forceColor es true
  const activeColor = isInView || forceColor;

  return (
    <img
      ref={ref}
      src={src}
      alt={alt}
      className={`${className} transition-all duration-1000 ease-in-out ${activeColor ? 'grayscale-0' : 'grayscale hover:grayscale-0'}`}
      {...props}
    />
  );
};

export default ChromaticImage;
