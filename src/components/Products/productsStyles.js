import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
  words: {
    color: "white",
    backgroundColor: "#FFC0CB",
    marginTop: "2rem",
    padding: "2rem",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justify: "center",
    textAlign: 'center',
    maxWidth: '100%',
  },
  pink: {
    color: 'white',
    backgroundColor: '#FFC0CB',
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
}));
