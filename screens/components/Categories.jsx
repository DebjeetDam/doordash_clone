import { View, Text, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import CategoryCard from "./CategoryCard";
import sanityClient from "../../sanity";

const Categories = () => {
  // storing Categories
  const [categories, setCategories] = useState([]);

  // Fetching data
  useEffect(() => {
    sanityClient
      .fetch(
        `
      *[_type=="category"]
      `
      )
      .then((data) => {
        setCategories(data);
      });
  }, []);

  console.log(categories, "categories");

  return (
    <ScrollView
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* Category Card */}

      {categories.map((category) => (
        <CategoryCard
          key={category._id}
          imgUrl={category.image}
          name={category.name}
        />
      ))}
    </ScrollView>
  );
};

export default Categories;
