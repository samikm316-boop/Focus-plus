import Sidebar from "./Sidebar";

export default function Layout({ children, setPage }) {
  return (
    <div className="app">
      <Sidebar setPage={setPage} />
      <div className="content">{children}</div>
    </div>
  );
}
