import DesktopHeader from "./desktopHeader";
import MobileHeader from "./mobileHeader";

export default function Header() {
  return (
    <header>
      <div className="show-on-desktop">
        <DesktopHeader />
      </div>
      <div className="show-on-mobile">
        <MobileHeader />
      </div>
    </header>
  );
}
