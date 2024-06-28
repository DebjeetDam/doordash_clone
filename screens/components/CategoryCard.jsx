import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";
import { urlFor } from "../../sanity";

const CategoryCard = ({ imgUrl, name }) => {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image
        source={{ uri: urlFor(imgUrl).url() }}
        className="h-20 w-20 rounded"
      />
      <Text className="absolute bottom-1 left-1 text-white font-bold">
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
