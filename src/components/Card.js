import React from 'react';

function Card({
  title,
  text,
  imageSrc,
  imageAlt = 'Card image',
  imagePosition = 'top', 
  buttonText = 'Go somewhere',
  buttonLink = '#',
  buttonVariant = 'primary', 
  header,
  footer,
  bgColor, 
  textColor = 'auto', 
  borderColor,
  className = '',
  children,
}) {
  let cardClasses = 'card h-100';
  
  if (bgColor) {
    cardClasses += ` text-bg-${bgColor}`;
  }
  if (borderColor) {
    cardClasses += ` border-${borderColor}`;
  }
  if (className) {
    cardClasses += ` ${className}`;
  }

  const isHorizontal = imagePosition === 'left';

  const renderImage = () => {
    if (!imageSrc) return null;
    
    if (isHorizontal) {
      return (
        <div className="col-md-4">
          <img 
            src={imageSrc} 
            className="img-fluid rounded-start h-100 object-fit-cover" 
            alt={imageAlt}
            style={{ objectFit: 'cover', height: '100%', width: '100%' }}
          />
        </div>
      );
    }
    
    return (
      <img 
        src={imageSrc} 
        className={`card-img-${imagePosition}`} 
        alt={imageAlt}
      />
    );
  };

  const renderBody = () => (
    <div className="card-body">
      {title && <h5 className="card-title">{title}</h5>}
      {text && <p className="card-text">{text}</p>}
      {children}
      {buttonText && (
        <a href={buttonLink} className={`btn btn-${buttonVariant}`}>
          {buttonText}
        </a>
      )}
    </div>
  );

  if (isHorizontal) {
    return (
      <div className={cardClasses}>
        <div className="row g-0 h-100">
          {renderImage()}
          <div className="col-md-8">
            {renderBody()}
          </div>
        </div>
        {footer && <div className="card-footer text-muted">{footer}</div>}
      </div>
    );
  }

  return (
    <div className={cardClasses}>
      {header && <div className="card-header">{header}</div>}
      {imagePosition === 'top' && renderImage()}
      {renderBody()}
      {imagePosition === 'bottom' && renderImage()}
      {footer && <div className="card-footer text-muted">{footer}</div>}
    </div>
  );
}

export default Card;