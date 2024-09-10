// app/(auth)/welcome.tsx
import { WelcomeImage } from "@/assets/svgs/WelcomeImage";

import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Welcome() {
  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-black">
      <View className="items-center justify-center flex-1">
        {/* Display an image */}
        <View className="items-center justify-center w-4/6 bg-gray-400 rounded-lg h-2/6">
          <WelcomeImage className="w-40 h-40" />
        </View>
        {/* Welcome Text */}
        <View className="py-5">
          <Text className="text-lg font-bold text-black dark:text-white">
            Welcome to our app!
          </Text>
          <Text className="text-base text-black dark:text-white">
            We are glad you're here
          </Text>
        </View>
        {/* Button */}
        <TouchableOpacity></TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
