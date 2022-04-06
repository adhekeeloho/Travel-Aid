import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  paper: {
    padding: "3px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100px",
  },
  mapContainer: {
    height: "96vh",
    width: "100%",
    marginLeft: "20px",
    marginTop: "10px",
  },
  markerContainer: {
    position: "absolute",
    transform: "translate(-50%, -50%)",
    zIndex: 1,
    "&:hover": { zIndex: 2 },
  },
  pointer: {
    cursor: "pointer",
  },
}));
