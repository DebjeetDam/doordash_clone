import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useLayoutEffect, useState, useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { urlFor } from "../sanity";
import { ArrowLeftIcon } from "react-native-heroicons/solid";

const RestaurantScreen = () => {
  const {
    params: {
      id,
      imgUrl,
      name,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
    },
  } = useRoute();

  const navigation = useNavigation();
  // Modify Header Settings
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <ScrollView>
      <View className="relative">
        <Image
          source={{ uri: urlFor(imgUrl).url() }}
          className="w-full h-56 bg-gray-300 p-4"
        />
        <Pressable
          onPress={navigation.goBack}
          className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
        >
          <ArrowLeftIcon size={20} color={"#00CCBB"} />
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default RestaurantScreen;
