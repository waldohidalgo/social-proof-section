import logoWaldo from "../assets/logo_waldo.png";

export default function Footer() {
  return (
    <>
      <footer className="bg-black py-4" translate="no">
        <div className="mx-auto w-10/12 max-w-52 text-center font-bold text-white">
          <div translate="no" id="footer_tag">
            Developed by:
          </div>

          <div className="w-full">
            <a
              href="https://waldohidalgo.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={logoWaldo} alt="logo waldo" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
