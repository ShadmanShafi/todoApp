import "../App.css";
import TopNav from "./TopNav";
import Footer from "./Footer";
import BackButton from "./BackButton";

export default function UpdateTodo() {
  return (
    <>
      <TopNav />
      <BackButton />
      <Footer />
      <h1 className="dashboard-body">UpdateTodo</h1>;
    </>
  );
}
