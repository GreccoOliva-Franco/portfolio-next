import Image from "next/image";

export function LogoText() {
  return <h2 className="text-2xl font-bold">Grecco<span className="text-emerald-600">.Dev</span></h2>;
}

export function LogoImage() {
  return (
    <div className="flex items-center gap-2">
      <Image
        src={"/logo.jpg"}
        alt={"logo"}
        height={50}
        width={50}
        className="rounded-b-xl"
      />
    </div>
  );
}
