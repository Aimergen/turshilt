import React, { useEffect } from "react";

declare global {
  interface Window {
    fbAsyncInit: () => void;
    FB: {
      init: (config: { xfbml: boolean; version: string }) => void;
    };
  }
}

const FacebookCustomerChat: React.FC = () => {
  useEffect(() => {
    const loadFacebookChatSDK = () => {
      window.fbAsyncInit = function () {
        window.FB.init({
          xfbml: true,
          version: "v16.0",
        });
      };

      // Load Facebook SDK
      const script = document.createElement("script");
      script.async = true;
      script.src =
        "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
      script.onload = function () {
        window.fbAsyncInit();
      };
      document.body.appendChild(script);
    };

    loadFacebookChatSDK();
  }, []);

  return (
    <>
      <div id="fb-root"></div>
      <div id="fb-customer-chat" className="fb-customerchat"></div>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            var chatbox = document.getElementById("fb-customer-chat");
            chatbox.setAttribute("page_id", "108873378868921");
            chatbox.setAttribute("attribution", "biz_inbox");
          `,
        }}
      />
    </>
  );
};

export default FacebookCustomerChat;
