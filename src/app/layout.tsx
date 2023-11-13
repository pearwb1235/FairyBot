import { Metadata } from "next";

export const metadata: Metadata = {
  title: "小精靈",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-tw">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
