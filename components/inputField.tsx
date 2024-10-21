import { InputFieldProps } from "@/types/types";
import {
  KeyboardAvoidingView,
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";

export default function InputField({
  className,
  label,
  inputStyle,
  iconStyle,
  labelStyle,
  icon,
  containerStyle,
  secureTextEntry = false,
  onInputChange,
  ...props
}: InputFieldProps) {
  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="space-y-2">
          <View>
            <Text
              className={`${labelStyle} text-slate-800 dark:text-slate-200 text-lg font-mainRegular`}
            >
              {label}
            </Text>
          </View>
          <View
            className={`${containerStyle} flex-row items-center border border-slate-800 dark:border-slate-200 rounded-full px-4 py-3`}
          >
            {icon && <View className={`${iconStyle} pr-2`}>{icon}</View>}
            <TextInput
              className={`flex-1 text-slate-800 dark:text-slate-200 font-mainRegular bg-transparent placeholder:text-slate-200 ${inputStyle}`}
              secureTextEntry={secureTextEntry}
              {...props}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
