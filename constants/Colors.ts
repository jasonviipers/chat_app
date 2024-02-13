import { Dimensions } from "react-native";

const tintColorLight = '#6B3AF6';
const tintColorDark = '#fff';

export default {
  light: {
    text: '#1A1F28',
    background: '#fff',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#fff',
    background: '#1A1F28',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
  },
};

export const sizes = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
  headerHeight: 50,
  padding: 25,
  borderRadius: 6,
};
