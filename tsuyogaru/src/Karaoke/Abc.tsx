import React, { useEffect, useState, useRef } from "react";
import abcjs from "abcjs";

export function Abc({ abc }: { abc: string }) {
  const [abcTune, setAbcTune] = useState<string>(abc);
  const inputEl = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (inputEl.current === null) {
      return;
    }
    abcjs.renderAbc(inputEl.current, abcTune, {
      add_classes: true,
      responsive: "resize",
      //generateDownload: true
      //timeBasedLayout: {
      //  minPadding: 20,
      //  align: "left",
      //},
    });
  }, [abcTune]);

  useEffect(() => {
    setAbcTune(abc);
  }, [abc]);

  return (
    <div>
      <div ref={inputEl}></div>
    </div>
  );
}
