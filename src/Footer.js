import Logo from "./assets/TheLanternNetworkLogo.svg";
import { Fragment } from "react";
import {
  AmplifySignOut
} from '@aws-amplify/ui-react';

const Footer = (props) => {

  return (
  <Fragment>
    <AmplifySignOut/>
    <div className="footer">
      <img src={Logo} alt="<Lantern_Network_Logo>"/>

    </div>
  </Fragment>
  ); 

}

export default Footer;