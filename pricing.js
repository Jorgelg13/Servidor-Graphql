import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Layout } from "antd";
import CookieConsent from "react-cookie-consent";
import { ROUTES } from "./config";
import { headerHeight, minFooterHeight, COLORS } from "./styles";

import Router from "modules/Router";
import NavBar from "components/NavBar";
import FooterNav from "components/Footer/Footer";
import EarlyAccessTeaser from "components/EarlyAccessTeaser";

class App extends Component {
  componentDidMount() {
    !this.props.authentication.isAuthenticated &&
      window.Intercom("boot", { app_id: "xuntj6l7" });
  }

  render() {
    const { earlyAccessTeaser } = this.props;

    const { Header, Footer, Content } = Layout;
    return (
      <Layout className="h-100">
        {earlyAccessTeaser.isOverlayVisible && <EarlyAccessTeaser />}
        <Header className="w-100 fixed gradient-background header">
          <NavBar />
        </Header>
        <Content style={{ marginTop: headerHeight, position: "relative" }}>
          <Router />
        </Content>
        <Footer
          className="w-100"
          style={{
            background: "linear-gradient(to right, #1a1f46, #303d70)",
            paddingTop: 48,
            paddingBottom: 48,
            minHeight: minFooterHeight
          }}
        >
          <FooterNav />
        </Footer>
        <CookieConsent
          location="bottom"
          buttonText="Allow cookies"
          cookieName="Blue_Swan_Grading"
          enableDeclineButton
          declineButtonText="Decline"
          style={{
            background: COLORS.paleGreyTwo,
            color: COLORS.dark,
            fontSize: "1rem"
          }}
          contentStyle={{ margin: "0 1em" }}
          buttonStyle={{
            background: COLORS.blue,
            color: COLORS.white,
            fontSize: "1rem",
            margin: 0,
            padding: ".8em 1.8em",
            fontWeight: 500
          }}
          declineButtonStyle={{
            background: COLORS.paleGreyTwo,
            color: COLORS.blue,
            fontSize: "1rem",
            margin: 0,
            padding: ".8em 1.8em",
            fontWeight: 500
          }}
        >
          This website uses cookies to ensure you get the best experience on our
          website.{" "}
          <a
            aria-label="learn more about cookies"
            role="button"
            href={`${ROUTES.METHODOLOGY}/privacy-policy`}
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            Privacy Policy
          </a>
        </CookieConsent>
      </Layout>
    );
  }
}

export default inject(({ store: { earlyAccessTeaser, authentication } }) => ({
  earlyAccessTeaser,
  authentication
}))(observer(App));
