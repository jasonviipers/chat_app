import { StyleProp, ViewStyle } from "react-native";
import { SvgProps } from "react-native-svg";

import IconsNames from "@/assets/icons/icons";

interface IconNamesProps {
  [key: string]: React.FC<SvgProps>;
}

const IconNames: IconNamesProps = {
  home: IconsNames.HomeIcon,
  search: IconsNames.SearchIcon,
  favorite : IconsNames.FavoriteIcon,
  profile: IconsNames.ProfileIcon,
  menu: IconsNames.MenuIcon,
  close: IconsNames.CloseIcon,
  plus : IconsNames.PlusIcon,
  heart : IconsNames.HeartIcon,
  trash : IconsNames.TrashIcon,
  message: IconsNames.MessageIcon,
  call: IconsNames.CallIcon,
  server: IconsNames.ServerIcon,
  camera: IconsNames.CameraIcon,
  mic: IconsNames.MicIcon,
  send: IconsNames.SendIcon,
  edit: IconsNames.EditIcon,
  video: IconsNames.VideoIcon,
};

interface IconProps extends SvgProps {
  name: keyof typeof IconNames;
  style?: StyleProp<ViewStyle>;
  size?: number;
  color?: string;
  onPress?: () => void;
}

export function Icons(props: IconProps) {
  const { name, size, color, onPress, style } = props;
  const Icon = IconNames[name];
  return (
    <Icon
      width={size}
      height={size}
      color={color}
      // onPress={onPress}
      style={style}
    />
  );
}
