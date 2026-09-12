import React from 'react';

export default function GlassCard({
  children,
  className = '',
  hoverEffect = false,
  padding = 'p-6 sm:p-8',
  onClick,
  style = {}
}) {
  return (
    <div
      onClick={onClick}
      style={style}
      className={`
        rounded-2xl sm:rounded-3xl
        bg-white/75 backdrop-blur-xl
        border border-white/80
        shadow-[0_10px_30px_-5px_rgba(15,23,42,0.04),0_2px_10px_0_rgba(15,23,42,0.02)]
        ${hoverEffect ? 'transition-all duration-300 hover:bg-white/90 hover:border-white hover:shadow-[0_20px_40px_-10px_rgba(15,23,42,0.08)] hover:-translate-y-0.5 cursor-pointer' : ''}
        ${padding}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
