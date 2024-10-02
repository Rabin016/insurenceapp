// app/(auth)/welcome.tsx
import WelcomeImage1 from "@/assets/svgs/WelcomeImage1";
import CustomButton from "@/components/customButton";
import { onboardingContent } from "@/constants";
import { router } from "expo-router";
import { useRef, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";

export default function Welcome() {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);
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

      {/* Swiper */}
      <Swiper
        autoplay={false}
        loop={false}
        ref={swiperRef}
        dot={<View className="w-2 h-2 bg-gray-400 rounded-full" />}
        activeDot={<View className="w-2 h-2 rounded-full bg-primary-500" />}
        onIndexChanged={(index) => setActiveIndex(index)}
      >
        {onboardingContent.map((item, index) => (
          <View key={item.id} className="items-center justify-around flex-1">
            <View className="items-center justify-center w-4/6 p-4 bg-gray-300 h-2/6 rounded-2xl">
              <View className="items-center justify-center w-full h-full bg-gray-400 rounded-lg">
                {<item.image className="w-40 h-40" />}
              </View>
            </View>

            <View className="space-y-1">
              <Text className="text-2xl text-center text-black font-mainBold dark:text-gray-300">
                {item.title}
              </Text>
              <Text className="text-base text-center text-black font-mainSemiBold dark:text-gray-500">
                {item.description}
              </Text>
            </View>
          </View>
        ))}
      </Swiper>
      <CustomButton className="w-5/6" title="Get Started" variant="primary" />
    </SafeAreaView>
  );
}
