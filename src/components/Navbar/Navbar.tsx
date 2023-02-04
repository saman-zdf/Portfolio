import { Link } from 'react-router-dom';
import { Box, Grid } from '@mui/material';
import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }} className={styles.Navbar}>
        <Grid container spacing={2} className={styles.NavbarContainer}>
          <Grid item xs={3}>
            <Link test-date="aaa" to="/" className={[styles.NavbarLink, styles.Home].join(' ')}>
              <p className={styles.PageNumber}>01</p>
              <p className={styles.PageName}>{'// home'}</p>
            </Link>
          </Grid>
          <Grid item xs={3}>
            <Link to="/about-me" className={[styles.NavbarLink, styles.AboutMe].join(' ')}>
              <p className={styles.PageNumber}>02</p>
              <p className={styles.PageName}>{'// about me'}</p>
            </Link>
          </Grid>
          <Grid item xs={3}>
            <Link to="/projects" className={styles.NavbarLink}>
              <p className={styles.PageNumber}>03</p>
              <p className={styles.PageName}>{'// projects'}</p>
            </Link>
          </Grid>
          <Grid item xs={3}>
            <Link to="/contacts" className={styles.NavbarLink}>
              <p className={styles.PageNumber}>04</p>
              <p className={styles.PageName}>{'// contacts'}</p>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Navbar;
