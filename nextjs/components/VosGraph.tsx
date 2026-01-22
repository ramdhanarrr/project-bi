"use client";

import { useEffect, useRef, useState } from "react";
import { Network } from "vis-network/standalone";

export default function VosGraph() {
  const ref = useRef<HTMLDivElement>(null);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("/test.json")
      .then(res => res.json())
      .then(setData);
  }, []);

  useEffect(() => {
    if (!data || !ref.current) return;

    const items = data.network.items;
    const links = data.network.links;

   const nodes = items.map((item: any) => ({
      id: item.id,
      label: item.label,
      x: item.x * 800,
      y: -item.y * 800,
      value: Math.sqrt(item.weights.Occurrences) * 18,
      group: item.cluster,
      fixed: true,
      font: {
        align: "top", // 🔑 label keluar node
        size: 14,
      },
    }));


    const edges = links.map((l: any) => ({
      from: l.source_id,
      to: l.target_id,
      width: 1,
    }));

    const options = {
  physics: false,
  nodes: {
    shape: "dot",
    borderWidth: 1,
    color: {
      background: "#e41a1c", // merah vosviewer
      border: "#b2182b",
    },
  },
  edges: {
    smooth: {
      type: "continuous", // 🔑 kurva natural
      roundness: 0.4,
    },
    color: {
      color: "#e41a1c",
      opacity: 0.35,
    },
    width: 1,
  },
  interaction: {
    zoomView: true,
    dragView: true,
  },
};


    new Network(
      ref.current,
      { nodes, edges },
      {
        physics: false, // 🔒 INI KUNCI UTAMA
        nodes: {
          shape: "dot",
          font: {
            size: 16,
            face: "Arial",
          },
        },
        edges: {
          color: { opacity: 0.3 },
          smooth: true,
        },
      }
    );
  }, [data]);

  return <div ref={ref} className="h-full w-full" />;
}
