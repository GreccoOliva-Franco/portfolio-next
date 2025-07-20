import dayjs from "dayjs";

export default function Footer() {
  const year = dayjs().year();
  return (
    <footer className="h-fit w-full border-x-2 border-t-2 rounded-t-2xl">
      <p className="text-center font-light p-4">&copy; Grecco.dev - {year}</p>
    </footer>
  );
}
