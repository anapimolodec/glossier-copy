import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    maxHeight: "100%",
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  productGrid: {
    height: '100%',
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center',
  },
  productImg: {
    maxWidth: '100vw',
    padding: '1rem',
    height: '100vh',

  },
   mediaImg: {
    height: '100%',
    paddingTop: '170%', // 16:9
  },
  toolbar: theme.mixins.toolbar,
   content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));