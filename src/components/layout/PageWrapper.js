import React from "react";
export function PageWrapper({ children }) {
    return (<div className="min-h-screen bg-bg-main text-text-primary font-body">
      {children}
    </div>);
}
