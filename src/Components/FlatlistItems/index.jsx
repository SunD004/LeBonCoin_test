import { FlatList } from "react-native";
import Item from "../Item";

export default function FlatlistItems({ data }) {
  return (
    <FlatList
      testID="FlatList"
      data={data}
      renderItem={({ item }) => <Item item={item} />}
      keyExtractor={(item) => item.id}
    />
  );
}
