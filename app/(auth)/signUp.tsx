import InputField from "@/components/inputField";
import { View, Text, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { UserIcon } from "react-native-heroicons/outline";
import { useState } from "react";
import { useColorScheme } from "nativewind";

export default function SignUp() {
  const { colorScheme } = useColorScheme();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  return (
    <SafeAreaView className="flex-1 bg-slate-200 dark:bg-slate-900">
      <ScrollView className="">
        <View className="flex-1 px-4">
          {/* Logo */}
          <View className="items-center justify-center">
            <Image
              className="w-20"
              source={require("@/assets/images/adaptive-icon.png")}
              resizeMode="contain"
            />
          </View>

          {/* Title */}
          <View>
            <Text className="text-2xl font-mainSemiBold text-slate-200 dark:text-slate-200">
              Create an account
            </Text>
            <View className="px-2">
              <InputField
                label="Username"
                placeholder="Enter username"
                placeholderTextColor={colorScheme === "light" ? "#94a3b8" : "#475569"}
                icon={
                  <UserIcon
                    size={24}
                    color={colorScheme === "light" ? "#1e293b" : "#e2e8f0"}
                  />
                }
                value={form.username}
                onInputChange={(value) => setForm({ ...form, username: value })}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
