// components/MondrianPivotEmbed.tsx
"use client";
export default function MondrianPivotEmbed() {
  return (
    <iframe
      src="http://localhost:8080/mondrian"  // ganti ke path pivot/test jsp yang ada di war-mu
      className="w-full h-[600px] rounded-xl border"
    />
  );
}
