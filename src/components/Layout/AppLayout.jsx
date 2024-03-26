import Navbar from "./Navbar";

export default function AppLayout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
