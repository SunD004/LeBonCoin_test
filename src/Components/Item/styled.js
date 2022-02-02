import styled from 'styled-components/native';
import { Text, TouchableOpacity, View } from 'react-native';
import { Card, Title } from "react-native-paper";

export const SeeMore = styled(Text)`
    font-size: 14px;
    text-decoration: underline;
    font-style: italic;
    font-weight: bold;
    margin-left: 10px;
`

export const Horizontal = styled(View)`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const IconBtn = styled(TouchableOpacity)`
    margin-vertical: 10px;
`

export const CTitle = styled(Title)`
    font-size: 15px;
`

export const MCard = styled(Card)` 
    margin-horizontal: 15px;
    margin-top: 10px;
`

export const AlbumID = styled(Text)`
    font-size: 10px;
    font-style: italic;
    font-weight: bold;
`