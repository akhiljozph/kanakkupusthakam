import "./welcome.css";

export function Welcome() {
  return (
    <section className="landing h-screen flex justify-center items-center flex-col gap-4">
      <header className="gap-2">
        <h1 className="text-5xl font-bold flex justify-center items-center">Xtrack</h1>
        <p className="tagline">
          The smart tracker for your expenses!
        </p>
      </header>
      <section className="flex gap-4">
        <button className="auth-btns font-bold py-2 px-4 rounded-lg">Sign In</button>
        <button className="auth-btns font-bold py-2 px-4 rounded-lg">Sign Up</button>
      </section>
    </section>
  );
}
