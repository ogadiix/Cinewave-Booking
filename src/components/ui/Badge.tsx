import React from 'react';
import { cn } from './Button';

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'outline';
}

const Badge = ({ className, variant = 'default', ...props }: BadgeProps) => {
  const variants = {
    default: 'bg-gray-800 text-gray-200',
    success: 'bg-green-500/20 text-green-400 border border-green-500/30',
    warning: 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30',
    danger: 'bg-red-500/20 text-red-400 border border-red-500/30',
    outline: 'border border-gray-700 text-gray-300',
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors",
        variants[variant],
        className
      )}
      {...props}
    />
  );
};

export default Badge;
