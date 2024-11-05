import Image from "next/image";
import Link from "next/link";

const MobileMenu = function ({ offCanVastoggleBtn, closeSideBar }) {

  return (
    <>
      <div
        id="ltn__utilize-mobile-menu"
        className={`ltn__utilize ltn__utilize-mobile-menu   ${
          offCanVastoggleBtn ? "ltn__utilize-open" : ""
        }`}
      >
        <div className="ltn__utilize-menu-inner ltn__scrollbar">
          <div className="ltn__utilize-menu-head">
            <div className="site-logo">
              <Link href="/">
                {/* <img src="/img/logo.svg" alt="Logo" width={120} /> */}
                <Image
                  src="/img/logo.svg"
                  alt="Riich carpets & rugs"
                  width={140}
                  height={50}
                  className="img-position-inherit"
                />
              </Link>
            </div>
            <button onClick={closeSideBar} className="ltn__utilize-close">
              ×
            </button>
          </div>
          <div className="ltn__utilize-menu">
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/shop/grid">Our Products</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
