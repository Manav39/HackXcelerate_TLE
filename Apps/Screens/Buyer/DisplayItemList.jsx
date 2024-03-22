import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function DisplayItemList({ itemList }) {
  const navigation = useNavigation();
  return (
    <View className="mt-3">
      <FlatList
        data={itemList}
        numColumns={2}
        renderItem={({ item, index }) => (
          <TouchableOpacity className="flex-1 m-2 p-2 rounded-lg border-[1px] border-slate-200">
            <Image
              source={{ uri: item.imageURL }}
              className="w-full h-[140px] rounded-lg object-cover"
            />
            <View>
              <Text className="text-[15px] font-bold mt-2">
                {item.productName}
              </Text>
              <Text className="text-[20px] font-bold text-blue-500">
                {item.price}
              </Text>
              <Text className="text-blue-500 bg-blue-200 mt-1 p-[2px] text-center rounded-full px-1 text-[10px] w-[70px]">
                {item.category}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
