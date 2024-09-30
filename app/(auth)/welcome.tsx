// app/(auth)/welcome.tsx
import WelcomeImage1 from "@/assets/svgs/WelcomeImage1";
import CustomButton from "@/components/customButton";
import { router } from "expo-router";

import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Welcome() {
  return (
    <SafeAreaView className="flex-1 bg-gray-200 dark:bg-gray-900">
      {/* Skip Button */}
      <View className="flex-col items-end justify-end mt-2 mr-2 text-right">
        <TouchableOpacity
          onPress={() => router.push("/(auth)/signUp")}
          className="px-2 py-1 rounded-lg dark:focus:bg-gray-600"
        >
          <Text className="text-gray-500 font-mainSemiBold">Skip</Text>
        </TouchableOpacity>
      </View>

      {/* Title */}
      <View className="items-center justify-around flex-1">
        <View className="items-center">
          <Text className="text-3xl font-mainBold dark:text-gray-300">
            Insurence Rate
          </Text>
          <Text className="text-2xl dark:text-gray-300 font-mainBold">
            Calculator
          </Text>
        </View>

        {/* Display an image */}
        <View className="items-center justify-center w-4/6 p-4 bg-gray-300 h-2/6 rounded-2xl">
          <View className="items-center justify-center w-full h-full bg-gray-400 rounded-lg">
            <WelcomeImage1 className="w-40 h-40" />
          </View>
        </View>

        {/* Welcome Text */}
        <View className="space-y-1">
          <Text className="text-xl font-bold text-center text-black dark:text-gray-300">
            Welcome to our app!
          </Text>
          <Text className="text-base text-center text-black dark:text-gray-500">
            We are glad you're here
          </Text>
        </View>

        {/* Get Started Button */}
        <CustomButton className="w-5/6" title="Get Started" variant="primary" />
      </View>
    </SafeAreaView>
  );
}
