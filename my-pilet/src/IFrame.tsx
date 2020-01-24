import * as React from "react";

export interface MyPageProps {
  url: string;
  id: string;
}

export const IFrame: React.FC<any> = ({ url, id }) => (
  <div className="justify-center align-content-center p-0 m-0 h-screen">
    <iframe src={url} width="100%" height="100%" id={id}></iframe>
  </div>
);
