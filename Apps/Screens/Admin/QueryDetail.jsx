import { View, Text } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

export default function QueryDetail() {
  const { params } = useRoute();
  return (
    <View>
      <Text className="mt-20 text-[30px] font-bold text-center">
        {params.item.subject}
      </Text>
      <Text className="p-4">{params.item.description}</Text>
      <Text className="font-bold text-[20px] ml-2">
        Queried by : {params.item.useremail}
      </Text>
    </View>
  );
}
