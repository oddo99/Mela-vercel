"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
    variant?: 'primary' | 'outline';
    size?: 'default' | 'lg';
    children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'default', children, ...props }, ref) => {
        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                    'inline-flex items-center justify-center font-semibold transition-colors duration-300',
                    variant === 'primary' && 'bg-gradient-to-r from-[#0B223A] to-[#1a3a5a] text-white hover:shadow-lg hover:shadow-[#0B223A]/20',
                    variant === 'outline' && 'border-2 border-[#0B223A] text-[#0B223A] hover:bg-[#0B223A] hover:text-white',
                    size === 'default' && 'px-6 py-3 text-base rounded-lg',
                    size === 'lg' && 'px-8 py-4 text-lg rounded-xl',
                    className
                )}
                {...props}
            >
                {children}
            </motion.button>
        );
    }
);

Button.displayName = 'Button';
