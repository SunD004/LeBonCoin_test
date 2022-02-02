import { API_URL_ITEMS } from "@env";

import { useFetchItems } from "../../Hooks/items";
import Loading from "../../Components/Loading";
import FlatlistItems from "../../Components/FlatlistItems";

import LeBoncoin from "../../../assets/leboncoin.png";

import * as s from "./styled";

export default function Home() {
  const { isLoading, serverError, data } = useFetchItems(API_URL_ITEMS);

  return isLoading || serverError ? (
    <Loading />
  ) : (
    <s.Container>
      <s.Header>
        <s.LogoLeBoncoin source={LeBoncoin} />
        <s.HText>{data?.length} Items</s.HText>
      </s.Header>
      <FlatlistItems data={data} />
    </s.Container>
  );
}
