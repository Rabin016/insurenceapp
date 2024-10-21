import { Text, Pressable } from "react-native";
import { ButtonProps } from "@/types/types";
import { styled } from "nativewind";

const variantStyles: { [key in ButtonProps["variant"]]: string } = {
  primary: "bg-primary-500 active:bg-primary-800",
  secondary: "bg-secondary-500 active:bg-secondary-800",
  success: "bg-success-500 active:bg-success-800",
  danger: "bg-danger-500 active:bg-danger-800",
  outline: "bg-transparent border border-primary-500",
  ghost: "bg-transparent active:bg-slate-300",
};

const textVariantStyles: { [key in ButtonProps["variant"]]: string } = {
  primary: "text-white",
  secondary: "text-white",
  success: "text-white",
  danger: "text-white",
  outline: "text-primary-500",
  ghost: "text-slate-700",
};

const StyledText = styled(Text);
const StyledPressable = styled(Pressable);

const getBgVariantStyle = (variant: ButtonProps["variant"]) =>
  variantStyles[variant] || "bg-primary-500";

const getTextVariantStyle = (variant: ButtonProps["variant"]) =>
  textVariantStyles[variant] || "text-white";

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
      className={`${getBgVariantStyle(variant)} ${className} w-full py-4 rounded-full`}
      {...props}
    >
      {IconLeft && <IconLeft />}
      <StyledText
        selectable={false}
        className={`text-center font-mainSemiBold text-lg ${getTextVariantStyle(variant)}`}
      >
        {title}
      </StyledText>
      {IconRight && <IconRight />}
    </StyledPressable>
  );
}
