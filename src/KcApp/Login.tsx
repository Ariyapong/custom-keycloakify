import "../assets/global-style.css";
import { memo } from "react";
import dayjs from "dayjs";
import Template from "keycloakify/lib/components/Template";
import type { KcProps } from "keycloakify";
import type { KcContext } from "./kcContext";
// import { clsx } from "keycloakify/lib/tools/clsx";
import type { I18n } from "./i18n";
import localizedFormat from "dayjs/plugin/localizedFormat";
require('dayjs/locale/th')

type KcContext_Login = Extract<KcContext, { pageId: "login.ftl" }>;

const Login = memo(
  ({
    kcContext,
    i18n,
    ...props
  }: { kcContext: KcContext_Login; i18n: I18n } & KcProps) => {
    // const {
    //   url,
    //   messagesPerField,
    //   register,
    //   realm,
    //   passwordRequired,
    //   recaptchaRequired,
    //   recaptchaSiteKey,
    // } = kcContext as any;

    // const { msg, msgStr } = i18n;
    const { msg } = i18n;

    console.log(
      `NOTE: It is up to you do do something meaningful with ${
        (kcContext as any).authorizedMailDomains
      }`
    );

    dayjs.extend(localizedFormat);

    return (
      <Template
        {...{ kcContext, i18n, ...props }}
        doFetchDefaultThemeResources={true}
        headerNode={msg("registerTitle")}
        formNode={
          <div>
            <div>test krub</div>
            <div className="wrapper">
              <span>It is up to you to implement this page</span>{" "}
              <span className="hilight-text">
                for testing custom theme purpose
              </span>
              <div className="img-wrapper">
                <img
                  src="https://portal-v2.the1.co.th/assets/home/developer-tool.png"
                  className="img"
                  alt="dev tool"
                />
              </div>
            </div>
            <div className="test-lib">
              <label>test lib as follow</label>
              <div className="dayjs">
                <div>
                  <strong>iso8601: </strong>
                  {dayjs().format()}
                </div>
                <div>
                  <strong>DD/MM/YYYY: </strong>
                  {dayjs().format("DD/MM/YYYY")}
                </div>
                <div>
                  <strong>locale: </strong>
                  {dayjs().locale('th').format("LLLL")}
                </div>
              </div>
            </div>
          </div>
        }
      />
    );
  }
);

export default Login;
