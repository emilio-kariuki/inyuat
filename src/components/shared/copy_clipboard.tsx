"use client"
import React, { useState } from "react";
import copy from "clipboard-copy";
import { Clipboard, CheckCheck } from "lucide-react";

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
    <div onClick={handleCopyClick}>
      {isCopied ? <CheckCheck size={16} color="#4C4C4C" /> : <Clipboard size={16} color="#4C4C4C" />}
    </div>
  );
};

export default CopyClipboard;
