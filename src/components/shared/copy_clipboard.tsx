"use client"
import React, { useState } from "react";
import copy from "clipboard-copy";
import {  CheckCheck, Copy } from "lucide-react";

const CopyClipboard = ({ text }: { text: string }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = async () => {
    try {
      await copy(text);
      setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 2000);
    } catch (error) {
      console.error("Failed to copy text to clipboard", error);
    }
  };
  return (
    <div className="bg-[#F5F6F7] rounded-full p-3" onClick={handleCopyClick}>
      {isCopied ? <CheckCheck size={13} color="#4C4C4C" /> : <Copy size={13} color="#4C4C4C" />}
    </div>
  );
};

export default CopyClipboard;
