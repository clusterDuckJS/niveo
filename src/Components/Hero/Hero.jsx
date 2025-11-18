import React from 'react'
import './hero.css'

function Hero({
  tag,
  title,
  subtitle,
  background = null,
  children  
}) {
   const style = background
    ? {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${background})`
      }
    : {
        backgroundColor: "#0052ff" // Default solid blue
      };

  return (
    <section className="hero-container" style={style}>
      {tag && <span className="tag primary"><small>{tag}</small></span>}
      <h1>{title}</h1>
      {subtitle && <h3>{subtitle}</h3>}

      {/* Slot for buttons or custom elements */}
      {children}
    </section>
  );
}

export default Hero
