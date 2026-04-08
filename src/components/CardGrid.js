import React from 'react';

function CardGrid({ children, cols = 3, gap = 4 }) {
  const colClass = `col-md-${Math.floor(12 / cols)} col-sm-12 mb-${gap}`;
  
  return (
    <div className="container py-4">
      <div className="row g-4">
        {React.Children.map(children, (child, index) => (
          <div key={index} className={colClass}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardGrid;