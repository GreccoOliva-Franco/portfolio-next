import dayjs from "dayjs";

export default function Footer() {
  const year = dayjs().year();
  return <p className="text-center font-light p-6">&copy; Grecco.dev - {year}</p>;
}
