import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";

function App() {
  useEffect(() => {
    const url = new URL(window.location.href);
    const redirect = url.searchParams.get("redirect");
    if (redirect) {
      window.history.replaceState(null, "", redirect);
    }
  }, []);

  return (
    <>
      <Toaster />
      <BrowserRouter basename="/kauan-dev">
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
