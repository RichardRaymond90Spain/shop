import { createTheme } from '@mui/material/styles';
// Exporting a color palette as a JavaScript object to be used throughout the application for consistent styling
export const Colors = {
    primary: "#f5f2c3",  // Primary color for your brand, used in navigation bars, buttons, links, etc.
    secondary: "#d1dacc", // Secondary color for secondary elements, used for accents and supporting primary color
    success: "#acaf50", // Color used to indicate success, like confirmation messages, successful actions, etc.
    info: "#00a2ff", // Color used for informational messages or elements
    danger: "#ff5722", // Color used for warnings or to draw attention to errors or dangerous actions
    warning: "#ffc107", // Color used to signal caution or to alert users about something important
    dark: "#e1b120", // A darker color typically used for text or dark themes
    light: "#aaa", // A light color used for backgrounds or light themes
    muted: "#ababf3", // A muted color used for less prominent elements that do not require immediate attention
    border: "#d0dfe1", // Color used for borders around elements like inputs, cards, etc.
    inverse: "#2f3d4a", // Inverse color used for elements on dark backgrounds
    shaft: "#333", // A very dark grey, almost black, used for text or shadows
  
    // Grays - A range of grey colors for various uses like backgrounds, borders, placeholders, etc.
    dim_grey: "#696969", 
    dove_gray: "#d5d5d5", 
    body_bg: "#f3f6f9", // Commonly used as the background color for the body of the app
    light_gray: "rgb(230,230,230)", // A lighter grey, good for subtle borders or stripes
  
    // Solid Colors - Typically used when a strong, unambiguous color is needed for contrast or emphasis
    white: "#fff", // Pure white, used for backgrounds, text in dark themes, etc.
    black: "#000", // Pure black, used for text in light themes, or dark backgrounds
  };
  
  const theme = createTheme({
    palette: {
        primary: {
            main: Colors.primary,
        },
        secondary: {
            main: Colors.secondary,
        },
        // ... other palette settings if necessary ...
    },
    // ... other theme settings if necessary ...
});

export default theme;