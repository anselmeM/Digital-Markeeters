'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'cta' | 'primary' | 'secondary' | 'outline';
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export default function Button({ 
  children, 
  variant = 'cta', 
  href, 
  type = 'button',
  className = '',
  onClick,
  disabled = false
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center px-8 py-4 text-base font-medium transition-all duration-200 ease-out disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    cta: 'cta-button bg-[#B35A46] text-white hover:bg-[#963D30] hover:shadow-lg',
    primary: 'bg-[#2A2622] text-[#F2EFE9] hover:bg-[#1C1B1A] hover:shadow-lg',
    secondary: 'bg-[#EBE6DF] text-[#2A2622] hover:bg-[#F2EFE9] hover:shadow-lg',
    outline: 'border-2 border-[#2A2622] text-[#2A2622] hover:bg-[#2A2622] hover:text-[#F2EFE9]',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button 
      type={type} 
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}