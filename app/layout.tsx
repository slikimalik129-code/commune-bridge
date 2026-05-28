import "./globals.css";

export const metadata = {
  title: "Commune Bridge",
  description: "Smart community ecosystem",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}