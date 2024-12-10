import StyledComponentsRegistry from "../lib/registry";
import { Providers } from "./providers";

export const metadata = {
  title: "Community Board",
  description: "A simple community board application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <Providers>{children}</Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
