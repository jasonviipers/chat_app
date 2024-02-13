import * as Svg from "react-native-svg";

export const SendIcon = (props: Svg.SvgProps) => (
    <Svg.Svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        {...props}
    >
        <Svg.Path
            d="M9.51 4.23 17.07 8.51c3.84 1.92 3.84 5.06 0 6.98l-8.56 4.28c-5.76 2.88-8.11.52-5.23-5.23l.87-1.73c.22-.44.22-1.17 0-1.61l-.87-1.74C1.4 3.71 3.76 1.35 9.51 4.23ZM5.44 12h5.4"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg.Svg>
);