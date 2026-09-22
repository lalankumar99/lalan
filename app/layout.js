import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://lalan-electrical.vercel.app"),

  title: {
    default: "Lalan Kumar | Electrical Engineering Portfolio",
    template: "%s | Lalan Kumar",
  },

  description:
    "Lalan Kumar — Diploma Electrical Engineering student portfolio featuring skills, projects, education and electrical engineering work.",

  keywords: [
    "Lalan Kumar",
    "Electrical Engineering",
    "Diploma Electrical Engineering",
    "Electrical Engineer Portfolio",
    "Polytechnic Student",
    "Government Polytechnic Banka",
  ],

  authors: [
    {
      name: "Lalan Kumar",
    },
  ],

  creator: "Lalan Kumar",

  alternates: {
    canonical: "https://lalan-electrical.vercel.app/",
  },

  openGraph: {
    title: "Lalan Kumar | Electrical Engineering Portfolio",
    description:
      "Portfolio of Lalan Kumar, Diploma Electrical Engineering student.",
    url: "https://lalan-electrical.vercel.app/",
    siteName: "Lalan Kumar Portfolio",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
  icons: {
  icon: "/favicon.png",
  shortcut: "/favicon.png",
  apple: "/favicon.png",
},
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
