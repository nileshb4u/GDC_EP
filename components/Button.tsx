
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseClasses = 'px-6 py-3 font-bold rounded-lg transition-all duration-300 transform focus:outline-none focus:ring-4 focus:ring-opacity-50';
  
  const variantClasses = {
    primary: 'bg-saudi-teal text-white hover:bg-teal-700 focus:ring-teal-300 hover:scale-105',
    secondary: 'border-2 border-saudi-teal text-saudi-teal hover:bg-saudi-teal hover:text-white focus:ring-teal-300 hover:scale-105',
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;