import Image from "next/image";
import user from "../../../public/images/user.jpeg";

const UserCard = ({
  image = user,
  title = "CEO",
  subtitle = "At Standout Studio",
  buttonText = "Lets Talk",
  href = "#",
}) => {
  return (
    <div className="flex flex-row gap-3 w-full overflow-x-auto">
      {/* User Image */}
      <div className="bg-white rounded-[12px] p-1 flex-shrink-0">
        <Image
          src={image}
          alt="user image"
          width={78}
          height={120}
          className="w-16 h-auto sm:w-20 md:w-[78px]"
        />
      </div>

      {/* Info Card */}
      <div className="bg-white rounded-[12px] p-3 sm:p-2 text-[#171717] w-[232px] flex flex-col justify-between gap-2 min-h-[126px] flex-shrink-0">
        <div>
          <h4 className="text-[#171717] text-base sm:text-lg md:text-[20px] leading-[22px] md:leading-[26px]">
            {title}
          </h4>
          <h5 className="text-[#5D5D5D] text-sm sm:text-base md:text-[16px] leading-[20px] md:leading-[22px] font-normal">
            {subtitle}
          </h5>
        </div>

        <a
          href={href}
          className="group relative flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-black border border-black text-white rounded-full text-sm sm:text-base md:text-[18px] overflow-hidden w-full"
        >
          <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 transform group-hover:-translate-y-full">
            {buttonText}
          </span>
          <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 transform translate-y-full group-hover:translate-y-0">
            {buttonText}
          </span>
        </a>
      </div>
    </div>
  );
};

export default UserCard;