import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { personal } from "@/lib/data";

export const metadata: Metadata = {
  title: `${personal.name} — Graduate Software Engineer`,
  description:
    "Graduate Software Engineer based in Sydney, Australia. Full-stack development, GenAI applications, cloud-based systems, and client-facing project delivery.",
  keywords: [
    "Graduate Software Engineer",
    "Full-stack Developer",
    "AI Developer",
    "Sydney",
    "Australia",
    "React",
    "Java",
    "Spring Boot",
    "GenAI",
    "AWS",
    "Chun Wai Chiu",
  ],
  authors: [{ name: personal.name }],
  openGraph: {
    title: `${personal.name} — Graduate Software Engineer`,
    description:
      "Graduate Software Engineer based in Sydney, Australia. Full-stack development, GenAI applications, and client-facing project delivery.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
