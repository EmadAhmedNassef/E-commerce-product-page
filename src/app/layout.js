import { Kumbh_Sans } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const kumbhSans = Kumbh_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Sneakers | Fall Limited Edition",
  description: "Shop the Fall Limited Edition Sneakers.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${kumbhSans.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
