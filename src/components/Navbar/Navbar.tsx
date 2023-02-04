import { Link, useLocation } from 'react-router-dom';
import { Box, Grid } from '@mui/material';
import styles from './Navbar.module.scss';

interface LinkProps {
  to: string;
  name: string;
  pageNumber: string;
  className: string;
}

const links: LinkProps[] = [
  {
    to: '/',
    name: '// home',
    pageNumber: '01',
    className: [styles.NavbarLink, styles.Home].join(' '),
  },
  {
    to: '/about-me',
    name: '// about me',
    pageNumber: '02',
    className: [styles.NavbarLink, styles.AboutMe].join(' '),
  },
  {
    to: '/projects',
    name: '// projects',
    pageNumber: '03',
    className: styles.NavbarLink,
  },
  {
    to: '/contacts',
    name: '// contacts',
    pageNumber: '04',
    className: styles.NavbarLink,
  },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <>
      <Box sx={{ flexGrow: 1 }} className={styles.Navbar}>
        <Grid container spacing={2} className={styles.NavbarContainer}>
          {links.map((link: LinkProps) => (
            <Grid key={link.pageNumber} item xs={3}>
              <Link
                to={link.to}
                className={location.pathname === link.to ? [link.className, styles.active].join(' ') : link.className}
              >
                <p className={styles.PageNumber}>{link.pageNumber}</p>
                <p className={styles.PageName}>{link.name}</p>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Navbar;
