import { ScrollView, View } from "react-native";

import products from "@/assets/data/products";
import { ProductListItem } from "@/src/components/ProductListItem";

export default function MenuScreen() {
  return (
    <View>
      <ScrollView>
        <ProductListItem product={products[1]} />
        <ProductListItem product={products[3]} />
      </ScrollView>
    </View>
  );
}
