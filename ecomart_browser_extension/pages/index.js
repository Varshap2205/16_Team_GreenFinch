import React, { useState } from "react";

export default function Home() {
  const [activePage, setActivePage] = useState("index");

  const navigateToPage = (page) => {
    setActivePage(page);
  };

  return (
    <>
      {/* {activePage === 'index' && <Index navigateToPage={navigateToPage} />}
      {activePage === 'new' && <New navigateToPage={navigateToPage} />} */}
    </>
  );
}
