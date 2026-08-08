import "./globals.scss"
import Navbar from "@/component/Navbar";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">

      <body>

        <Navbar />

        {children}

      </body>

    </html>
  );
}