import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

interface SeoProps {
  subtitle?: string;
  lang?: string;
  meta?: [];
}
interface Meta {
  property?: string;
  name?: string;
  content: string;
}

const Seo = ({ subtitle, lang = 'en', meta }: SeoProps) => {
  const { metadata } = useStaticQuery(
    graphql`
      query metadataQuery {
        metadata: contentfulSiteMetadata {
          title
          description
        }
      }
    `,
  );

  const title = metadata.title;
  const description = metadata.description;

  let typeSafeMeta: Array<Meta>;
  if (meta instanceof Array) {
    typeSafeMeta = meta;
  } else {
    typeSafeMeta = [];
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={title ? `${title} || ${subtitle}` : 'void(0) || Darkmattr Tech'}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: '@void0music',
        },
        {
          name: `twitter:title`,
          content: 'void(0)',
        },
        {
          name: `twitter:description`,
          content: description,
        },
        ...typeSafeMeta,
      ]}
    />
  );
};

export default Seo;
