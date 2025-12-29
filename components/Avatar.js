import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src={"/owl.png"}
        width={737}
        height={378}
        alt="avatar"
        className="translate-z-0 w-full h-auto"
        priority
        sizes="(max-width: 1024px) 0px, (max-width: 1280px) 480px, 600px"
      />
    </div>
  );
};

export default Avatar;
