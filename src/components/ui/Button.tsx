import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const baseStyles = "font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-4 disabled:opacity-50 disabled:cursor-not-allowed";
    
    const variants = {
      primary: "bg-black text-white hover:bg-gray-800 focus:ring-gray-300",
      secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-300",
      outline: "border-2 border-gray-300 text-gray-900 hover:bg-gray-50 focus:ring-gray-300",
      ghost: "text-gray-700 hover:bg-gray-100 focus:ring-gray-300",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <button
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
export default Button;