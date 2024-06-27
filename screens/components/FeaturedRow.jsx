import { View, Text, ScrollView } from "react-native";
import React from "react";
import { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";
import sanityClient from "../../sanity";

const FeaturedRow = ({ id, title, description }) => {
  // storing Restaurants
  const [restaurants, setRestaurants] = useState([]);

  // Fetching data
  useEffect(() => {
    sanityClient
      .fetch(
        `
        *[_type=="featured" && _id == $id]{
          ...,
          restaurants[] -> {
            ...,
            dishes[]->,
              type -> {
                name
              }
          },
        }[0]
      `,
        { id }
      )
      .then((data) => {
        setRestaurants(data?.restaurants);
      });
  }, []);

  console.log(restaurants, "restaurant");
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon />
      </View>

      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* RestaurantCards... */}
        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title=""
          rating={4.5}
          genre="Japanese"
          address="123 Main St."
          shorts_description="This is a short decription"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title=""
          rating={4.5}
          genre="Japanese"
          address="123 Main St."
          shorts_description="This is a short decription"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title=""
          rating={4.5}
          genre="Japanese"
          address="123 Main St."
          shorts_description="This is a short decription"
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
