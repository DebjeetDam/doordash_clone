import { View, Text, ScrollView, Pressable, Image } from "react-native";
import React from "react";
import { urlFor } from "../../sanity";

const CategoryCard = ({ imgUrl, name }) => {
  return (
    <Pressable className="relative mr-2">
      <Image
        source={{ uri: urlFor(imgUrl).url() }}
        className="h-20 w-20 rounded"
      />
      <Text className="absolute bottom-1 left-1 text-white font-bold">
        {name}
      </Text>
    </Pressable>
  );
};

export default CategoryCard;
