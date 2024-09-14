import { AnimationObject } from "lottie-react-native";

declare interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant: "primary" | "secondary" | "danger" | "outline" | "success";
  IconLeft?: React.ComponentType<any>;
  IconRight?: React.ComponentType<any>;
  className?: string;
  onPress?: () => void;
}

declare interface onboardingContentProps {
  id: number;
  title: string;
  description: string;
  image: AnimationObject;
}
