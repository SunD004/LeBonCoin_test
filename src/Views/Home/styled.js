import styled from 'styled-components/native';
import { View, Text, Image, SafeAreaView } from 'react-native';
import Constants from 'expo-constants'

export const Container = styled(SafeAreaView)`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: ${`${Constants.statusBarHeight + 10}px`};
`

export const Header = styled(View)`
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
`

export const HText = styled(Text)`
    font-size: 17px;
    font-weight: bold;
    font-style: italic;
`

export const LogoLeBoncoin = styled(Image)`
    height: 40px;
    width: 40px;
    position: absolute;
    left: 10px;
`