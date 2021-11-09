import { NAVS } from '@/contants/nav';
import useWindowSize from '@/hooks/useWindowSize';
import { ThemeState } from '@/modals/theme';
import { useTheme } from '@/stores';
import { faBars, faMoon, faSun, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, useEffect, useRef, useState } from 'react';
import Logo from '../Logo';
import { BtnMenu, BtnToggleTheme, InnerWrapper, LogoText, Nav, WrapLogo, Wrapper } from './styles';
import Image from 'next/image';

const Header: FC = () => {
  const { width } = useWindowSize();
  const router = useRouter();
  const theme = useTheme((state: ThemeState) => state.theme);
  const updateTheme = useTheme((state: ThemeState) => state.updateTheme);

  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const refNav = useRef(null);
  const refBtnMenu = useRef(null);

  useEffect(() => {
    const { current: nav } = refNav;
    const { current: btnMenu } = refBtnMenu;

    function handleClickOutside(event) {
      if (nav && !nav.contains(event.target) && btnMenu && !btnMenu.contains(event.target)) {
        setOpenMenu(false);
      }
    }

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [refNav]);

  const handleButtonThemeClick = () => {
    updateTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Wrapper>
      <InnerWrapper>
        <Link href='/' passHref>
          <WrapLogo title='Home'>
            <Logo w={width > 480 ? 50 : 40} />
            <LogoText>
              <span>Saul</span>&nbsp;Vo
            </LogoText>
          </WrapLogo>
        </Link>
        <Nav ref={refNav} active={openMenu}>
          {NAVS.map((item, idx) => (
            <Link key={idx} href={item.uri} passHref>
              <a
                onClick={() => setOpenMenu(false)}
                className={router.pathname === item.uri ? 'active' : ''}
                target={item.name === 'Github' ? '_blank' : '_self'}>
                {item.name === 'Github' && <Image src='/icon-git.png' alt={item.name} width={16} height={16} />}
                {item.name}
              </a>
            </Link>
          ))}
        </Nav>
        <BtnToggleTheme onClick={handleButtonThemeClick} title='change theme'>
          <FontAwesomeIcon icon={faSun} />
          <FontAwesomeIcon icon={faMoon} />
          <span></span>
        </BtnToggleTheme>
        <BtnMenu
          ref={refBtnMenu}
          title={openMenu ? 'Close' : 'Open'}
          onClick={() => setOpenMenu((x) => !x)}>
          <FontAwesomeIcon icon={openMenu ? faTimes : faBars} />
        </BtnMenu>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Header;
