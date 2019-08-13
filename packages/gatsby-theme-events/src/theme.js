export const theme = {
  space: [0, 4, 8, 16, 32],
  fonts: {
    body: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif"
  },
  fontSizes: [16, 18, 20, 22, 27, 36],
  lineHeights: {
    body: 1.45,
    heading: 1.1
  },
  colors: {
    gray: ["#eceff1", "#cfd8dc", "#b0bec5", "#90a4ae"],
    background: "#fff",
    text: "#333",
    primary: "#c4510e",
    secondary: "#2d91e8"
  },
  sizes: {
    default: "90vw",
    max: "540px"
  },
  styles: {
    Layout: {
      color: "gray.2",
      fontFamily: "body",
      fontSize: 1,
      linHeight: "body"
    },
    Header: {
      backgroundColor: "primary",
      color: "background",
      fontWeight: "bold",
      margin: "0 auto",
      maxWidth: "max",
      padding: 3,
      width: "default"
    },
    Main: {
      margin: "0 auto",
      maxWidth: "max",
      width: "default"
    },
    Container: {
      padding: 3
    },
    Link: {
      color: "gray.3",
      textDecoration: "none",
      "&:focus.within, &:hover": {
        backgroundColor: "gray.0"
      },
      "&:visited": {
        color: "gray.1"
      }
    },
    a: {
      color: "secondary",
      textDecoration: "none",
      "&:focus.within, &:hover": {
        backgroundColor: "gray.4"
      },
      "&:visited": {
        color: "gray.1"
      }
    },
    p: {
      color: "gray.4"
    },
    h1: {
      color: "primary",
      fontSize: 5,
      fontWeight: "bold",
      lineHeight: "heading",
      margin: 0,
      marginTop: 3
    },
    ul: {
      borderTop: "1px solid",
      borderColor: "gray.0",
      listStyle: "none",
      padding: 0
    },
    li: {
      borderBottom: "1px solid",
      borderColor: "gray.0",
      padding: 2,
      "&:focus.within, &:hover": {
        backgroundColor: "gray.0"
      }
    }
  }
};
