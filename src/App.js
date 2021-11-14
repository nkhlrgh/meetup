import { Routes, Route } from "react-router-dom";
import AllMeetings from "./pages/AllMeetings";
import NewMeetings from "./pages/NewMeetings";
import FavoriteMeetings from "./pages/FavoriteMeetings";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetings />} />
        <Route path="/new-meeting" element={<NewMeetings />} />
        <Route path="favorites" element={<FavoriteMeetings />} />
      </Routes>
    </Layout>
  );
}

export default App;
