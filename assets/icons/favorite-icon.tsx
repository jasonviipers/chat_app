import * as Svg from "react-native-svg";

export const FavoriteIcon = (props: Svg.SvgProps) => (
  <Svg.Svg viewBox="0 0 24 24" {...props}>
    <Svg.Path
      d="M20 11a9 9 0 1 1-9-9"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Svg.Path
      d="M13.5 6.13c-.35-1.1.06-2.47 1.22-2.84.61-.2 1.36-.03 1.79.56.4-.61 1.18-.75 1.78-.56 1.16.37 1.57 1.74 1.22 2.84-.55 1.75-2.47 2.66-3 2.66-.54 0-2.44-.89-3.01-2.66ZM18.93 20.69c.53 1.6 1.74 1.76 2.67.36.85-1.28.29-2.33-1.25-2.33-1.14-.01-1.78.88-1.42 1.97Z"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg.Svg>
);
