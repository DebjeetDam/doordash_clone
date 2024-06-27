import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";

const CategoryCard = (props) => {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image source={{ uri: props.imgUrl }} className="h-20 w-20 rounded" />
      <Text className="absolute bottom-1 left-1 text-white font-bold">
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
