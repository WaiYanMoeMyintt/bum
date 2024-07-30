import { Nunito } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
const inter = Nunito({ subsets: ["latin"] });
import BumBum from "./context/BumBum";
export const metadata = {
  title: "BumBum | ToDolist app",
  description: "Organize your work and life, peronal development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClerkProvider>
             <BumBum>
                {children}
             </BumBum>
        </ClerkProvider>
      </body>
    </html>
  );
}
