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
  const lastSlide = activeIndex === onboardingContent.length - 1;

  return (
    <SafeAreaView className="flex-1 bg-slate-200 dark:bg-slate-900">
      {/* Skip Button */}
      <View className="flex-col items-end justify-end mt-2 mr-2 text-right">
        <TouchableOpacity
          onPress={() => router.push("/(auth)/signUp")}
          className="px-2 py-1 rounded-lg dark:focus:bg-slate-600"
        >
          <Text className="text-slate-500 font-mainSemiBold">Skip</Text>
        </TouchableOpacity>
      </View>

      {/* Swiper */}
      <Swiper
        autoplay={false}
        loop={false}
        ref={swiperRef}
        dot={<View className="w-8 h-1 mx-1 rounded-full bg-slate-400" />}
        activeDot={<View className="w-8 h-1 mx-1 rounded-full bg-primary-500" />}
        onIndexChanged={(index) => setActiveIndex(index)}
      >
        {onboardingContent.map((item) => (
          <View key={item.id} className="items-center justify-around flex-1">
            <View className="items-center justify-center w-5/6 p-4 bg-slate-300 h-2/6 rounded-2xl">
              <View className="items-center justify-center w-full h-full rounded-lg">
                {<item.image className="w-40 h-40" />}
              </View>
            </View>

            <View className="px-4 space-y-5">
              <Text className="text-2xl text-center text-slate-800 font-mainBold dark:text-slate-300">
                {item.title}
              </Text>
              <Text className="text-sm text-center text-slate-600 font-mainMedium dark:text-slate-500">
                {item.description}
              </Text>
            </View>
          </View>
        ))}
      </Swiper>
      <CustomButton
        onPress={() =>
          lastSlide ? router.push("/(auth)/signUp") : swiperRef.current?.scrollBy(1)
        }
        className="w-5/6 mx-auto"
        title={lastSlide ? "Get Started" : "Next"}
        variant="primary"
      />
    </SafeAreaView>
  );
}
