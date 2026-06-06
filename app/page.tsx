"use client";

import { useState } from "react";
import DynamicRenderer from "../components/dynamic/renderer/DynamicRenderer";
import JsonEditor from "../components/dynamic/renderer/ui/JsonEditor";
import { sampleConfig } from "../data/sampleConfig";

export default function Home() {
  const [config, setConfig] = useState(sampleConfig);

  return (
    <div className="h-screen grid grid-cols-2 gap-4 p-4">
      
      {/* LEFT - JSON EDITOR */}
      <JsonEditor
        value={JSON.stringify(config, null, 2)}
        onChange={(val: string) => {
          try {
            setConfig(JSON.parse(val || "{}"));
          } catch (e) {
            // ignore invalid JSON
          }
        }}
      />

      {/* RIGHT - UI RENDER */}
      <div className="overflow-auto border rounded-lg p-4">
        <DynamicRenderer config={config} />
      </div>

    </div>
  );
}