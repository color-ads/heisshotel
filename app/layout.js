import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import SocialMedia from "@/components/SocialMedia";

const now = localFont({
  src: [
    {
      path: "../public/fonts/Now-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Now-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Now-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Now-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata = {
  title: { default: "Heiss hotel", template: "%s - Heiss hotel" },
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={now.className}>
        <div className="relative">
          <Header />
          {children}
          <SocialMedia />
        </div>
      </body>
    </html>
  );
}
