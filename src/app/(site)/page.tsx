import DisplayMap from "@/components/DisplayMap";
import React, { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <Suspense fallback={<p>Loading feed...</p>}>
        <DisplayMap />
      </Suspense>
    </div>
  );
}
