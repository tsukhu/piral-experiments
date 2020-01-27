import * as React from "react";
import withHelmet from './with-helmet';

export interface MyPageProps {
  url: string;
  id: string;
}

const IFrame: React.FC<any> = ({ url, id }) => (
  <div className="justify-center align-content-center p-0 m-0 h-screen">
    <iframe src={url} width="100%" height="100%" id={id}></iframe>
  </div>
);

export default(withHelmet(IFrame));