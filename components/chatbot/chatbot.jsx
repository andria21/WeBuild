"use client";
import { useEffect } from "react";

const ChatBot = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.VG_CONFIG = {
        ID: "hyj4d63gebkps3xn", 
        region: "eu", 
        render: "bottom-right",
        stylesheets: [
          "https://vg-bunny-cdn.b-cdn.net/vg_live_build/styles.css",
          // You can add your custom CSS here
        ],
      };

      const VG_SCRIPT = document.createElement("script");
      VG_SCRIPT.src = "https://vg-bunny-cdn.b-cdn.net/vg_live_build/vg_bundle.js";
      VG_SCRIPT.defer = true;
      document.body.appendChild(VG_SCRIPT);
    }
  }, []);

  return (
    <div
      id="VG_OVERLAY_CONTAINER"
      style={{ width: 0, height: 0 }}
    >
    </div>
  );
};

export default ChatBot;
