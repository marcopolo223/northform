"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale } from "@/lib/i18n/locale-provider";
import { site } from "@/site.config";

/**
 * IntakeQ embed. `intake` shows the booking / new-patient packet;
 * `portal` shows the returning-patient client area. Both use the same mount id,
 * so render only one per page.
 *
 * The widget draws its own iframe into #intakeq. We wrap it in a fixed, framed
 * panel with a loading state so nothing jumps while it arrives, and remove any
 * duplicate iframe a double-mounted effect could leave behind.
 */
export function IntakeWidget({ mode }: { mode: "intake" | "portal" }) {
  const { t } = useLocale();
  const mountRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    const w = window as unknown as Record<string, unknown>;
    w.intakeq = site.intakeq.id;
    if (mode === "portal") {
      w.intakeqClientArea = true;
      delete w.intakeqLocationId;
    } else {
      w.intakeqLocationId = site.intakeq.locationId;
      delete w.intakeqClientArea;
    }

    mount.innerHTML = "";
    const observer = new MutationObserver(() => {
      const frames = mount.querySelectorAll("iframe");
      frames.forEach((frame, index) => {
        if (index > 0) frame.remove();
      });
      if (frames.length > 0) setReady(true);
    });
    observer.observe(mount, { childList: true, subtree: true });

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://intakeq.com/js/widget.min.js?1";
    document.head.appendChild(script);

    return () => {
      observer.disconnect();
      script.remove();
      mount.innerHTML = "";
      setReady(false);
    };
  }, [mode]);

  return (
    <div className={`relative border-y border-fg/20 bg-ground sm:border ${mode === "portal" ? "min-h-[22rem]" : "min-h-[34rem]"}`}>
      {!ready ? (
        <div className="absolute inset-0 flex items-center justify-center px-6 text-center" aria-live="polite">
          <p className="type-meta flex items-center gap-3 text-[#4a5c50]">
            <span
              aria-hidden
              className="h-2 w-2 animate-pulse rounded-full bg-[#4a5c50] motion-reduce:animate-none"
            />
            {t.start.loading}
          </p>
        </div>
      ) : null}
      <div id="intakeq" ref={mountRef} className="relative w-full [&_iframe]:block [&_iframe]:w-full [&_iframe]:bg-transparent [&_iframe]:border-0" />
    </div>
  );
}
