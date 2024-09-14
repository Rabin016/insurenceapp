import { Text, TouchableOpacity } from "react-native";

const variantStyles: { [key in ButtonProps["variant"]]: string } = {
  primary: "bg-primary-500",
  secondary: "bg-secondary-500",
  success: "bg-success-500",
  danger: "bg-danger-500",
  outline: "bg-transparent",
};

const getVariantStyle = (variant: ButtonProps["variant"]) =>
  variantStyles[variant] || "bg-primary-500";

export default function CustomButton({
  title,
  variant,
  IconLeft,
  IconRight,
  onPress,
  className,
  ...props
}: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={() => onPress?.()}
      className={`button-base ${getVariantStyle(variant)} ${className}`}
      {...props}
    >
      {IconLeft && <IconLeft />}
      <Text className="button-text">{title}</Text>
      {IconRight && <IconRight />}
    </TouchableOpacity>
  );
}
