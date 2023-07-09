import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader: React.FC = () => (
  <ContentLoader
    speed={2}
    width={280}
    height={473}
    viewBox="0 0 280 473"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <circle cx="139" cy="99" r="98" />
    <rect x="3" y="213" rx="0" ry="0" width="280" height="30" />
    <rect x="4" y="262" rx="0" ry="0" width="280" height="89" />
    <rect x="10" y="379" rx="0" ry="0" width="88" height="26" />
    <rect x="132" y="369" rx="0" ry="0" width="151" height="46" />
  </ContentLoader>
);

export default MyLoader;
