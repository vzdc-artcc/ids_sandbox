import "./globals.css";
import {AppRouterCacheProvider} from "@mui/material-nextjs/v13-appRouter";
import {Roboto} from "next/font/google";
import {ThemeProvider} from "@mui/material/styles";
import theme from "@/theme/theme";
import Navbar from "@/components/Navbar/Navbar";
import {ToastContainer} from "react-toastify";
import {Container, Typography} from "@mui/material";
import Script from "next/script";

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.variable}>
      <body>
          <AppRouterCacheProvider>
              <ThemeProvider theme={theme}>
                  <Navbar />
                  <Container maxWidth="xl" sx={{display: {xs: 'inherit', lg: 'none'},}}>
                      <Typography variant="h6" textAlign="center">The I.D.S. is not made for smaller screen sizes. Please
                          increase your screen size or zoom out to access the IDS.</Typography>
                  </Container>
                  <Container maxWidth="xl" sx={{display: {xs: 'none', lg: 'inherit'},}}>
                      {children}
                      <Script
                          src="https://rybbit.vzdc.org/api/script.js"
                          data-site-id={process.env.NEXT_PUBLIC_RYBBIT_SITE_ID}
                          strategy="afterInteractive"
                      />
                  </Container>
                  <ToastContainer theme="dark" autoClose={1000} />
              </ThemeProvider>
          </AppRouterCacheProvider>
      </body>
    </html>
  );
}
