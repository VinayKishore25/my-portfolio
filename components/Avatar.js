import Image from "next/image";

const Avatar = () => {
  return (
    <div className="flex w-full h-full items-end justify-center">
      <Image
        src={"/owl.png"}
        width={737}
        height={378}
        alt="avatar"
        className="translate-z-0 w-full h-auto max-w-[500px] object-contain"
        priority
        sizes="500px"
      />
    </div>
  );
};

export default Avatar;
