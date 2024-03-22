import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import { useAuth } from "../../context";
import { Octicons } from "@expo/vector-icons";

export default function Header() {
  const { email, role, userName } = useAuth();
  return (
    <View>
      <View className="py-8 flex flex-row items-center gap-4">
        <Image
          source={require("../../../assets/images/pic.png")}
          className="rounded-full w-12 h-12 mt-5"
        />
        <View className="text-[16px]">
          <Text>Welcome</Text>
          <Text className="text-[20px] font-bold">{userName}</Text>
        </View>
      </View>
      <View className="pb-3 px-5 flex flex-row gap-2 border-[1px] border-blue-300  rounded-full bg-blue-50">
        <Octicons name="search" size={24} color="gray" />
        <TextInput
          placeholder="Search"
          className="ml-2 text-[18px]"
          onChangeText={(value) => console.log(value)}
        />
      </View>
    </View>
  );
}
