import "../assets/global-style.css";
import { memo } from "react";
import type { KcProps } from "keycloakify";
import type { KcContext } from "./kcContext";
import type { I18n } from "./i18n";

type KcContext_MyExtraPage2 = Extract<
  KcContext,
  { pageId: "my-extra-page-2.ftl" }
>;

const MyExtraPage2 = memo(
  ({
    kcContext,
    i18n,
    ...props
  }: { kcContext: KcContext_MyExtraPage2; i18n: I18n } & KcProps) => {
    console.log(`TODO: Do something with: ${kcContext.someCustomValue}`);
    // https://portal-v2.the1.co.th/assets/home/developer-tool.png
    return (
      <>
        <div className="wrapper">
          <span>It is up to you to implement this page</span>{" "}
          <span className="hilight-text">for testing custom theme purpose</span>
          <div className="img-wrapper">
            <img
              src="https://portal-v2.the1.co.th/assets/home/developer-tool.png"
              className="img"
              alt="dev tool"
            />
          </div>
          <div> test-dev</div>
        </div>
      </>
    );
  }
);

export default MyExtraPage2;
