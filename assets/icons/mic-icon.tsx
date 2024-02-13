import * as Svg from "react-native-svg";

export const MicIcon = (props: Svg.SvgProps) => (
    <Svg.Svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        {...props}
    >
        <Svg.Path
            d="M12 19c3.31 0 6-2.69 6-6V8c0-3.31-2.69-6-6-6S6 4.69 6 8v5c0 3.31 2.69 6 6 6Z"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Svg.Path
            d="M3 11v2a9 9 0 0 0 18 0v-2M9.11 7.48a8 8 0 0 1 5.5 0M10.03 10.48c1.2-.33 2.47-.33 3.67 0"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg.Svg>
);
