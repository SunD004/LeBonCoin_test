import { Card } from "react-native-paper";
import { Linking } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

import * as s from "./styled";

export default function Item({ item }) {
  const openURL = () => {
    Linking.openURL(item?.url);
  };

  const openThumbnailUrl = () => {
    Linking.openURL(item?.thumbnailUrl);
  };

  return (
    <s.MCard>
      <Card.Content testID="item">
        <s.CTitle>{item?.title}</s.CTitle>
        <Icon
          name="hand-o-left"
          size={20}
          color="black"
          style={{
            position: "absolute",
            right: 2,
            bottom: 5,
            transform: [{ rotate: "35deg" }],
          }}
        />

        <s.Horizontal>
          <s.IconBtn testID="link-url" onPress={openURL}>
            <Icon name="unlink" size={18} color="#88B04B" />
          </s.IconBtn>
          <s.SeeMore onPress={openURL}>Voir plus</s.SeeMore>
        </s.Horizontal>

        <s.Horizontal>
          <s.IconBtn testID="link-thumbnailUrl" onPress={openThumbnailUrl}>
            <Icon name="expand" size={18} color="#34568B" />
          </s.IconBtn>
          <s.SeeMore onPress={openThumbnailUrl}>Voir plus</s.SeeMore>
        </s.Horizontal>

        <s.AlbumID>Album: {item?.albumId}</s.AlbumID>
      </Card.Content>
    </s.MCard>
  );
}
