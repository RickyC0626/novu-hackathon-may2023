import "./globals.css";
import "mapbox-gl/dist/mapbox-gl.css";
import { Poppins } from "next/font/google";

const popins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata = {
  title: "WanderAlert",
  description: "Real-time weather alert for travelers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={popins.className}>{children}</body>
    </html>
  );
}
