import { View, Text } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

export default function VerifyDetail() {
  const { params } = useRoute();
  console.log(params);
  return (
    <Text className="mt-20 text-[20px] text-center">
      {params.item.userName}
    </Text>
  );
}
