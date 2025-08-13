import { BrowserRouter, Route, Link, Routes, Outlet } from "react-router-dom";
export default function SPA_Router_ExampleApp() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/Allen/class-11" element={<Class11Program />} />
            <Route path="/Allen/class-12" element={<Class12Program />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Layout() {
  return (
    <div style={{ height: "100vh", backgroundColor: "lightblue" }}>
      <Header />
      <div style={{ height: "90vh", backgroundColor: "lightgreen" }}>
        <Outlet />
      </div>
      <div style={{ height: "10vh", backgroundColor: "lightcoral" }}>
        Footer | Contact us
      </div>
    </div>
  );
}
function Header() {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <Link to="/">Home</Link>
      <Link to="/Allen/class-11">Class11Program</Link>
      <Link to="/Allen/class-12">Class12Program</Link>
    </div>
  );
}

function LandingPage() {
  return <div>This is landing page</div>;
}

function Class11Program() {
  return <div>This is class 11 program</div>;
}

function Class12Program() {
  return <div>This is class 12 program</div>;
}

function ErrorPage() {
  return <div>A error happens</div>;
}
