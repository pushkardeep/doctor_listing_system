import React from "react";
import { LucideIcon } from "lucide-react"; // optional: for icon type

type CustomButtonProps = {
  label: string;
  icon?: LucideIcon;
  iconSize?: number;
  iconColor?: string;
  onClick?: () => void;
  className?: string;
  textClassName?: string;
  type?: "button" | "submit" | "reset"; // Added the type prop with default as 'button'
};

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  icon: Icon,
  iconSize = 15,
  iconColor = "white",
  onClick,
  className = "",
  textClassName = "",
  type = "button", // Default type is "button"
}) => {
  return (
    <button
      type={type} // Set the type of button here
      onClick={onClick}
      className={`flex items-center justify-center gap-2 rounded-[10px] px-4 py-2.5 cursor-pointer ${className}`}
    >
      <span className={`text-[12px] font-medium ${textClassName}`}>
        {label}
      </span>
      {Icon && <Icon size={iconSize} color={iconColor} />}
    </button>
  );
};

export default CustomButton;
