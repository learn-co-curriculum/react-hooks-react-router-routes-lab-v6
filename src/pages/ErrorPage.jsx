import NavBar from "../components/NavBar"; // Import NavBar

function ErrorPage() {
  return (
    <>
      <header>
        <NavBar /> {/* Include NavBar on the error page */}
      </header>
      <main>
        <h1>Oops! Looks like something went wrong.</h1>
      </main>
    </>
  );
}

export default ErrorPage;