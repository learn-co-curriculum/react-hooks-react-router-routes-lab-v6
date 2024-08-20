import { useEffect, useState } from "react";
import NavBar from "./NavBar"; // Import the NavBar component

function Home() {
  return (
    <>
      <header>
        <NavBar /> {/* Include NavBar component */}
      </header>
      <main>
        {/* Info goes here! */}
      </main>
    </>
  );
};

export default Home;