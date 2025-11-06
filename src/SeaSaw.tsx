import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./SeaSaw.css";

gsap.registerPlugin(ScrollTrigger);

function SeaSaw() {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const frameCount = 70;
  const currentFrame = (index: number) =>
    `/holding_stick_jpgs/holding_stick_${index}.jpg`;

  useLayoutEffect(() => {
    const obj = { frame: 0 };

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=3500",
        scrub: true,
        pin: true,
        anticipatePin: 1,
        markers: false,
      },
    });

    tl.to(obj, {
      frame: frameCount - 1,
      ease: "none",
      onUpdate: () => {
        const frameIndex = Math.round(obj.frame);
        if (imgRef.current) {
          imgRef.current.src = currentFrame(frameIndex);
        }
      },
    });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <>
      {/* 🟢 content before */}
      <section style={{ minHeight: "100vh"}}>
        <Content />
      </section>

      {/* 🎬 pinned section */}
      <div
        ref={containerRef}
        className="scroll-container"
        style={{
          position: "relative",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1, // 👈 ensure it doesn't overlay too long
        }}
      >
        <img
          ref={imgRef}
          src={currentFrame(0)}
          alt="scroll animation"
          style={{
            width: 1280,
            maxWidth: "90%",
            height: "auto",
          }}
        />
      </div>

      {/* 🔵 content after */}
      <section style={{ minHeight: "100vh" }}>
        <h2 style={{ paddingTop: "40vh", textAlign: "center" }}>
          Animation complete — continue scrolling!
        </h2>
      </section>
    </>
  );
}

function Content() {
  return (
    <article
      style={{
        padding: "150px 20px",
        display: "flex",
        flexDirection: "column",
        gap: 20,
      }}
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac
        rhoncus quam.
      </p>
      <p>
        Fringilla quam urna. Cras turpis elit, euismod eget ligula quis,
        imperdiet sagittis justo. In viverra fermentum ex ac vestibulum.
      </p>
      <h2>Sub-header</h2>
    </article>
  );
}

export default SeaSaw;
