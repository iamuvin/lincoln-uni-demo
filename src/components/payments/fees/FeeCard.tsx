import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '../../../lib/utils';
import { formatCurrency } from '../../../lib/currency';

interface FeeCardProps {
  label: string;
  amount: number;
  icon: LucideIcon;
  variant: 'default' | 'success' | 'danger' | 'warning';
}

const variants = {
  default: 'bg-gray-50 text-gray-700',
  success: 'bg-green-50 text-green-700',
  danger: 'bg-red-50 text-red-700',
  warning: 'bg-yellow-50 text-yellow-700',
};

const iconVariants = {
  default: 'text-gray-400',
  success: 'text-green-500',
  danger: 'text-red-500',
  warning: 'text-yellow-500',
};

export function FeeCard({ label, amount, icon: Icon, variant }: FeeCardProps) {
  return (
    <div className={cn('flex justify-between items-center p-4 rounded-lg', variants[variant])}>
      <div className="flex items-center">
        <Icon className={cn('h-5 w-5 mr-2', iconVariants[variant])} />
        <span className="text-sm font-medium">{label}</span>
      </div>
      <span className="text-lg font-semibold">{formatCurrency(amount)}</span>
    </div>
  );
}