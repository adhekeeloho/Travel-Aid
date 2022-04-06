import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  chip: {
    margin: "5px 5px 5px 0",
    background: "linear-gradient(45deg, #cc2b5e 40%, #753a88 80%)",
    color: "white",
  },
  subtitle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "10px",
  },
  spacing: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));
