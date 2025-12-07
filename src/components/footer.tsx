import { date } from "@/lib/date";

export const FOOTER_HEIGH = 64; // = to tw h-16

export default function Footer() {
  const year = date().year();

  return (
    <footer className="h-16 bg-background w-full border-x-2 border-t-2 rounded-t-2xl">
      <p className="text-center font-light p-4">&copy; Grecco.dev - {year}</p>
    </footer>
  );
}
