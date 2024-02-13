import * as Svg from "react-native-svg";

export const CloseIcon = (props: Svg.SvgProps) => (
  <Svg.Svg viewBox="0 0 24 24" {...props}>
    <Svg.Path
      d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10ZM9.17 14.83l5.66-5.66M14.83 14.83 9.17 9.17"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg.Svg>
);