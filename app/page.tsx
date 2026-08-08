import Link from "next/link";

export default function HomePage() {
  return (
    <div className="home">
      <div className="home__container">

        <h1 className="home__title">
          Welcome to Todo App
        </h1>

        <p className="home__description">
          Manage your daily tasks easily
        </p>

        <div className="home__actions">

          <Link
            className="home__login-btn"
            href="/login"
          >
            Login
          </Link>

          <Link
            className="home__register-btn"
            href="/register"
          >
            Register
          </Link>

        </div>

      </div>
    </div>
  );
}