import { Text, Pressable } from "react-native";
import { ButtonProps } from "@/types/types";
import { styled } from "nativewind";

const variantStyles: { [key in ButtonProps["variant"]]: string } = {
  primary: "bg-primary-500 active:bg-primary-800",
  secondary: "bg-secondary-500 active:bg-secondary-800",
  success: "bg-success-500 active:bg-success-800",
  danger: "bg-danger-500 active:bg-danger-800",
  outline: "bg-transparent",
  ghost: "bg-transparent",
};

const StyledText = styled(Text);
const StyledPressable = styled(Pressable);

const getBgVariantStyle = (variant: ButtonProps["variant"]) =>
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
    <StyledPressable
      onPress={() => onPress?.()}
      className={`button-base ${getBgVariantStyle(variant)} ${className} w-full py-4 rounded-full`}
      {...props}
    >
      {IconLeft && <IconLeft />}
      <StyledText className="button-text text-center font-mainSemiBold text-lg text-gray-200">
        {title}
      </StyledText>
      {IconRight && <IconRight />}
    </StyledPressable>
  );
}
