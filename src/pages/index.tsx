import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import NavBar from '../components/home/NavBar';
import HeroBanner from '../components/home/HeroBanner';
import Seo from '../components/Seo';

const IndexPage = () => {
  const contentfulData = useStaticQuery(
    graphql`
      query contentfulQuery {
        navbar: contentfulNavBar {
          navItems {
            title
            iconName
            hyperlink
            id
          }
        }
      }
    `,
  );
  const { navbar } = contentfulData;
  return (
    <>
      <Seo subtitle='𝔻𝕒𝕣𝕜𝕞𝕒𝕥𝕥𝕣 𝕋𝕖𝕔𝕙' />
      <NavBar navItems={navbar.navItems} />
      <HeroBanner />
    </>
  );
};

export default IndexPage;
