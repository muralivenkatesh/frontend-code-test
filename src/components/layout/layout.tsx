import { Fragment } from "react";

function Layout(props: any) {
  return (
    <Fragment>
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
