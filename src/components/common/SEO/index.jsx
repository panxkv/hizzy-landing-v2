import React from 'react';
import Helmet from 'react-helmet';
import Thumbnail from 'assets/thumbnail/thumbnail.png';
import {
  url,
  defaultDescription,
  social,
  defaultTitle,
  socialLinks,
  logo,
} from 'data/config';

export const SEO = ({ title = defaultTitle, description = defaultDescription, location = '' }) => {
  return (
    <Helmet>
      <meta name="description" content={description} />
      <meta name="image" content={Thumbnail} />

      <meta property="og:url" content={`${url}${location}`} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={Thumbnail} />
      <meta property="fb:app_id" content={social.facebook} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={socialLinks.twitter} />
      <meta name="twitter:site" content={social.twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image:src" content={Thumbnail} />
      <link rel="publisher" href={socialLinks.google} />
      <title>{title}</title>
      <html lang="pl" dir="ltr" />
    </Helmet>
  );
};
