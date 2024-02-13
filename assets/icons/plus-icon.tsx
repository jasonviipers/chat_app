import * as Svg from "react-native-svg";

export const PlusIcon = (props: Svg.SvgProps) => (
  <Svg.Svg viewBox="0 0 24 24" {...props}>
    <Svg.Path
      d="M6 12h12M12 18V6"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg.Svg>
);
