import ReactNativeSVG from "react-native-svg/lib/typescript/ReactNativeSVG";

declare interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant: "primary" | "secondary" | "danger" | "outline" | "success" | "ghost";
  IconLeft?: React.ComponentType<any>;
  IconRight?: React.ComponentType<any>;
  className?: string;
  onPress?: () => void;
}

declare interface onboardingContentProps {
  id: number;
  title: string;
  description: string;
  image: ReactNativeSVG<ReactNativeSVG.Path>;
}

declare interface InputFieldProps {
  className?: string;
  label: string;
  inputStyle?: string;
  iconStyle?: string;
  labelStyle?: string;
  containerStyle?: string;
  placeholder?: string;
  placeholderTextColor?: string;
  icon?: any;
  secureTextEntry?: boolean;
  value?: string;
  onInputChange?: (text: string) => void;
}
