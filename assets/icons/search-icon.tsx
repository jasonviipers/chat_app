import * as Svg from "react-native-svg";

export const SearchIcon = (props: Svg.SvgProps) => (
  <Svg.Svg viewBox="0 0 24 24" {...props}>
    <Svg.Path
      d="M14 5h6M14 8h3M21 11.5c0 5.25-4.25 9.5-9.5 9.5S2 16.75 2 11.5 6.25 2 11.5 2M22 22l-2-2"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg.Svg>
);