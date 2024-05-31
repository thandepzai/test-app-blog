import React from 'react';
import { useMathJax } from '../hook/useMathJax';

const MathComponent = () => {
  useMathJax();

  return (
    <div>
      <p className="math-tex">\( x^2 = 2x + 1 \)</p>
      <p>Công thức trên là một ví dụ về phương trình bậc hai.</p>
    </div>
  );
};

export default MathComponent;