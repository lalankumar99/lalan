import "./globals.css";

export const metadata = {
  title: "Lalan Kumar | Electrical Engineering Portfolio",
  description:
    "Official portfolio of Lalan Kumar, Diploma Electrical Engineering student.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}