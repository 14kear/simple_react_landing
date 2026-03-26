import { NavLink, Route, Routes } from 'react-router-dom';

function Layout({ title, text }) {
  return (
    <main className="page">
      <div className="shell">
        <header className="card hero">
          <p className="eyebrow">React Lab</p>
          <h1>{title}</h1>
          <p className="subtitle">{text}</p>
        </header>

        <nav className="card nav">
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            About
          </NavLink>
          <NavLink
            to="/contacts"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Contacts
          </NavLink>
        </nav>
      </div>
    </main>
  );
}

function HomePage() {
  const test = 123;

  return (
    <Layout
      title="Hello World"
      text="Basic React page for a university lab, ready to publish and verify on GitHub Pages."
    />
  );
}

function AboutPage() {
  return (
    <Layout
      title="About This Project"
      text="This is a simple single-page React application with client-side routing for a university assignment."
    />
  );
}

function ContactsPage() {
  return (
    <Layout
      title="Contacts"
      text="Student: Your Name. Group: Your Group. Email: student@example.com."
    />
  );
}

function NotFoundPage() {
  return (
    <Layout
      title="404"
      text="This route does not exist inside the app. Use the navigation above to return to a valid page."
    />
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contacts" element={<ContactsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
