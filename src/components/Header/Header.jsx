import style from './Header.module.css';
import Layout from '../Layout';
import Logo from '../Header/Logo';
import Heading from '../Header/Heading';
import Search from '../Header/Search';
import Auth from '../Header/Auth';

export const Header = () => {
  return (
    <header>
      <Layout>
        <Logo />
        <Heading/>
        <Search/>
        <Auth/>
      </Layout>
    </header>
  ) 
}