import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./routes/Index";
import NotFound from "./routes/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
