import { extendTheme } from "native-base";

export const THEME = extendTheme({
  COLORS: {
    WHITE: "#FFFFFF",
    BLACK: "#151522",
    GREEN_700: "#00875F",
    GREEN_500: "#00B37E",

    GRAY_700: "#121214",
    GRAY_600: "#202024",
    GRAY_500: "#29292E",
    GRAY_400: "#323238",
    GRAY_300: "#7C7C8A",
    GRAY_200: "#C4C4CC",
    GRAY_100: "#E1E1E6",

    BLUE_700: "#343D63",
    BLUE_500: "#3D639D",
    BLUE_400: "#3D639D",
  },
  FONT_FAMILY: {
    REGULAR: "Roboto_400Regular",
    BOLD: "Roboto_700Bold",
  },
  FONT_SIZE: {
    SM: 14,
    MD: 16,
    LG: 18,
    XL: 24,
  },
});
