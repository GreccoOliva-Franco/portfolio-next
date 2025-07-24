import React from "react";

export default function PageContent({ children }: React.PropsWithChildren) {
  return (
    <div className="py-6 flex flex-col items-center justify-around gap-8">
      {children}
    </div>
  );
}
