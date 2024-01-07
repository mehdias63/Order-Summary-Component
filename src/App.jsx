import React from "react";
import Order from "./components/Order";

function App() {
  return (
    <main className=" flex flex-col justify-center items-center bg-[#E0E8FF] bg-[url(../public/images/pattern-background-mobile.svg)] bg-no-repeat bg-contain md:bg-[url(../public/images/pattern-background-desktop.svg)] min-h-screen">
      <Order />
    </main>
  );
}

export default App;
