import { useEffect, useRef } from "react";
import * as THREE from "three";
import HALO from "vanta/dist/vanta.halo.min";
import "./header.css";

function Header({ onIconClick }) {
  const headerRef = useRef(null);

  useEffect(() => {
    const vantaEffect = HALO({
      el: headerRef.current,
      THREE,
      backgroundColor: 0x131a43,
      baseColor: 0x1a59,
      size: 2.0,
      amplitudeFactor: 0,
      xOffset: 0.25,
      yOffset: 0,
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <header ref={headerRef}>
      <div className="header-block">
        <img className="header-icon" src="/sphere.svg" alt="circle icon to scroll to the main content" width={50} height={50} onClick={onIconClick}/>
        <h1 className="header-text">nebula chronicles</h1>
      </div>
    </header>
  );
}

export default Header;
