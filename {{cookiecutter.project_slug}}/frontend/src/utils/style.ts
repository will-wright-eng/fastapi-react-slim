import { makeStyles } from '@material-ui/core/styles';

// https://mui.com/material-ui/customization/palette/#palette-colors
export const useStylesData = makeStyles((theme) => ({
  nav: {
    position: 'absolute',
    top: theme.spacing(5),
    left: theme.spacing(10),
  },
  link: {
    color: theme.palette.info.main,
  },
  button: {
    color: theme.palette.info.dark,
    padding: theme.spacing(2),
    width: theme.spacing(30),
    margin: theme.spacing(1),
    fontSize: 16,
    fontFamily: 'Monaco',
    borderRadius: 8,
    background: theme.palette.background.default,
  },
  div_parent: {
    display: 'block',
    width: '100%',
    overflow: 'hidden',
    padding: theme.spacing(2),
    paddingTop: theme.spacing(10),
  },
  div_child_sub: {
    marginBottom: 5,
    border: `1px solid ${theme.palette.grey[300]}`,
    padding: theme.spacing(2),
  },
  div_child: {
    marginBottom: 5,
    border: `1px solid ${theme.palette.grey[300]}`,
  },
  tableWrapper: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  table: {
    margin: theme.spacing(30),
    fontSize: theme.typography.body1.fontSize,
    maxWidth: '75%',
    '& th': {
      borderBottom: `1px solid ${theme.palette.grey[300]}`,
    },
    '& td': {
      borderBottom: `1px solid ${theme.palette.grey[300]}`,
    },
    flex: 1,
    overflowY: 'auto',
  },
  codeBlock: {
    fontSize: '1rem',
    fontFamily: 'Consolas, monospace',
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[1],
  },
  spanBefore: {
    position: 'absolute',
    content: '',
    height: '25px',
    width: '25px',
    left: '3px',
    bottom: '2.6px',
    backgroundColor: '#fff',
    borderRadius: '50%',
    transition: '0.3s',
  },
  inputCheckedSpan: {
    backgroundColor: '#00c853',
  },
  inputCheckedSpanBefore: {
    transform: 'translateX(29px)',
  },
  strong: {
    position: 'absolute',
    left: '100%',
    width: 'max-content',
    lineHeight: '30px',
    marginLeft: '10px',
    cursor: 'pointer',
  },
  text: {
    color: 'white',
  },
  form: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '85%',
      display: 'flex',
      flexDirection: 'column'
    },
  form2: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  },
  container: {
    margin: theme.spacing(2),
    border: `1px solid ${theme.palette.grey[300]}`,
    padding: theme.spacing(2),
    fontSize: '1.2rem',
  },
}));

export const useStylesRoutes = makeStyles((theme) => ({
  app: {
    margin: theme.spacing(2),
    border: `1px solid ${theme.palette.grey[300]}`,
    padding: theme.spacing(2),
    fontSize: '1.2rem',
  },

}));

export const useStylesHome = makeStyles((theme) => ({
  nav: {
    position: 'absolute',
    top: theme.spacing(5),
    left: theme.spacing(10),
  },
  link: {
    color: '#61dafb',
  },
  div_child: {
    marginBottom: 5,
  },
  container: {
    textAlign: 'center',
    margin: theme.spacing(2),
    border: `1px solid ${theme.palette.grey[300]}`,
    padding: theme.spacing(2),
    fontSize: '1.2rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
}));

export const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(2),
  },
  padding: {
    padding: theme.spacing(1),
  },
  button: {
    textTransform: 'none',
  },
  marginTop: {
    marginTop: 10,
  },
}));

export const useStylesNav = makeStyles((theme) => ({
  nav: {
    border: `1px solid ${theme.palette.grey[300]}`,
    left: theme.spacing(10),
    padding: theme.spacing(1),
  },
  link: {
    color: theme.palette.info.dark,
    textDecoration: 'none',
  },
}));
