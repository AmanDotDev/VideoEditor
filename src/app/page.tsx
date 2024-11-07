import RegistrationForm from "./Registration/page";

export default function Home() {

  let isLoggedIn = false;

  return (
    <main className=" min-h-screen bg-zinc-900 ">
      <RegistrationForm />
      {isLoggedIn && <a
        href="/editor"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        rel="noopener noreferrer"
      >
        {/* <h2 className={`mb-3 text-2xl font-semibold`}>
          Go to Editor{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2> */}
      </a>}
    </main>
  );
}
