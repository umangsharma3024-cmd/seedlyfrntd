import { useState } from "react";

import CropBubble from "./CropBubble";
import Chat from "../User/Chat";
import ChatWidget from "../User/ChatWidget";

export default function FloatingWidget() {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("chat"); // 'chat' or 'crop'

  return (
    <>
   
    <div style={{ position: "fixed", bottom: 20, right: 20, zIndex: 9999 }}>
      
      {/* Floating button */}
      {!open && (
        <button
          style={{
            borderRadius: "50%",
            width: 60,
            height: 60,
            fontSize: 24,
            background: "#198754",
            color: "#fff",
            border: "none",
            cursor: "pointer"
          }}
          onClick={() => setOpen(true)}
        >
          💬
        </button>
      )}

      {/* Expanded Widget */}
      {open && (
        <div style={{
          width: 350,
          height: 500,
          background: "#fff",
          borderRadius: 10,
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column"
        }}>
          
          {/* Tabs header */}
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 10,
            background: "#ededed"
          }}>
            <div>
              <button
                onClick={() => setActiveTab("chat")}
                style={{
                  fontWeight: activeTab === "chat" ? "bold" : "normal",
                  marginRight: 10
                }}
              >
                Chat
              </button>
              <button
                onClick={() => setActiveTab("crop")}
                style={{ fontWeight: activeTab === "crop" ? "bold" : "normal" }}
              >
                Crop
              </button>
            </div>

            <button
              onClick={() => setOpen(false)}
              style={{ border: "none", background: "transparent", cursor: "pointer" }}
            >
              X
            </button>
          </div>

          {/* Content area */}
          <div style={{ flex: 1, overflow: "auto" }}>
            {activeTab === "chat" && <ChatWidget/>}
            {activeTab === "crop" && <CropBubble />}
          </div>

        </div>
      )}
    </div>
     </>
  );
}
