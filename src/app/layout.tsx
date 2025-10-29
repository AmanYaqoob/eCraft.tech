import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Sora } from "next/font/google";
import "../styles/index.css";

export const metadata: Metadata = {
  title: {
    template: "%s | eCraft°",
    default: "eCraft°",
  },
  description:
    "We are a full-service e-commerce agency that specializes in multi-platform marketplace management and growth optimization. Our mission is to empower online sellers by handling every aspect of e-commerce operations across all major marketplaces.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  metadataBase: new URL("https://eCraft.tech"),
  openGraph: {
    type: "website",
    url: "https://eCraft.tech",
    title: "eCraft°",
    description:
      "We are a full-service e-commerce agency that specializes in multi-platform marketplace management and growth optimization. Our mission is to empower online sellers by handling every aspect of e-commerce operations across all major marketplaces.",
    siteName: "eCraft°",
    images: [
      {
        url: "https://k0wq6pnnph6kt8et.public.blob.vercel-storage.com/eCraft/eCraft_meta_images-DeG1eHIDn5ppeJXCaQgZV6zOPzRaqX.png",
      },
    ],
  },
};

const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body className={`bg-white dark:bg-black ${sora.className}`}>
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
import { Providers } from "./providers";
import { Metadata } from "next";
