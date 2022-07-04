import "../App.css";
import TopNav from "./TopNav";
import Footer from "./Footer";
import BackButton from "./BackButton";
import { useNavigate } from "react-router-dom";

export default function CreateTodo() {
  return (
    <>
      <TopNav />
      <BackButton />
      <Footer />
      <h1 className="dashboard-body">CreateTodo</h1>;
    </>
  );
}
