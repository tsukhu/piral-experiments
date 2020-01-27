import * as React from "react";
import { Helmet } from "react-helmet";

export default function withHelmet(Wrapped, mytitle ="My Title") {
  return function({ title = mytitle, ...others }) {
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{title}</title>
        </Helmet>
        <Wrapped {...others} />
      </>
    );
  };
}
