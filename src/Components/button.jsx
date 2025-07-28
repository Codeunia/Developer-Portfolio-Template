export const Button = ({
  children,
  className = "",
  size = "md",
  variant = "solid",
  onClick = () => {},
}) => {
  const baseStyle =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors duration-200";
  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };
  const variantStyles = {
    solid: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600",
  };

  return (
    <button onClick={onClick} className={`${baseStyle} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}>
      {children}
    </button>
  );
};
