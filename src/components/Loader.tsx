// src/app/loading.tsx
import { SparkLoader } from "@/components/ui/SparkLoader";

export default function Loading() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999,
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
        backdropFilter: "blur(20px)",
      }}
    >
      <div style={{ position: "relative" }}>
        <div
          style={{
            position: "absolute",
            width: "150px",
            height: "150px",
            background: "rgba(107, 59, 241, 0.4)",
            filter: "blur(60px)",
            borderRadius: "50%",
          }}
        />
        <SparkLoader />
      </div>
    </div>
  );
}
