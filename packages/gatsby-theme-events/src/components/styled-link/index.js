/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";

export const StyledLink = props => (
  <Link
    sx={{
      color: "secondary",
      textDecoration: "none",
      "&:focus.within, &:hover": {
        backgroundColor: "gray.0"
      },
      "&:visited": {
        color: "gray.2"
      }
    }}
    to={props.to}
  >
    {props.children}
  </Link>
);
