import "@styles/globals.css";

import NextAuthProvider from "@components/providers/NextAuthProvider";
import { ThemeProvider } from "@components/providers/ThemeProvider";


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` dark:bg-[#121212]`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextAuthProvider>
            <main>{children}</main>
          </NextAuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
