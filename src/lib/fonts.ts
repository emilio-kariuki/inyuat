import { Inter, Quicksand } from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });

const monasans = localFont({ src: '../assets/mona-sans.ttf' })

const quicksand = Quicksand({ subsets: ["latin"], weight: ["600"] });

export {inter , monasans , quicksand}
