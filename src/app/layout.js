export const metadata = {
  title: "포트폴리오 사이트 Next-Site",
  description: "비트로 제작한 포트폴리오입니다.",
  keywords: [
    "포트폴리오",
    "리액트",
    "넥스트",
    "portfolio",
    "react.js",
    "next.js",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <link rel="icon" type="image/svg+xml" href="favicon.svg" />
      <body>{children}</body>
    </html>
  );
}
