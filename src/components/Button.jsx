import React from "react";

export default function Button({
  text = "Contact", // Default button text
  className = "", // Additional custom classes
  icon, // Icon to display
  onClick, // Click handler
  type = "button", // Button type (e.g., button, submit, reset)
  isDisabled = false, // Disabled state
  variant = "primary", // Button style variant
  size = "md", // Button size
  ...props // Additional props
}) {
  // Define style variants
  const variants = {
    primary: "bg-[#2CD761] hover:bg-[#25C055] text-white",
    secondary: "bg-gray-200 hover:bg-gray-300 text-black",
    outline: "border border-[#2CD761] text-[#2CD761] hover:bg-[#2CD761] hover:text-white",
    danger: "bg-red-500 hover:bg-red-600 text-white",
  };

  // Define size classes
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className={`
        inline-flex items-center gap-2 
        font-medium rounded-full transition-colors 
        ${sizes[size]} 
        ${variants[variant]} 
        ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}
        ${className}
      `}
      {...props}
    >
      {icon && <span className="icon">{icon}</span>}
      <span>{text}</span>
    </button>
  );
}
