import { View, Text, SafeAreaView, Image, ViewComponent } from "react-native";
import React, { useLayoutEffect } from "react";

import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView>
      {/* Header*/}
      <View>
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />

        <View>
          <Text>Deliver Now!</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
