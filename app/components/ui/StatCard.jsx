const StatCard = ({ number, label }) => {
  return (
    <div className="relative flex flex-row justify-between items-center bg-white h-[80px] sm:h-[90px] md:h-[100px] rounded-[12px] p-3 sm:p-4">
      <div>
        <h3 className="text-3xl sm:text-4xl md:text-[44px] text-[#171717] leading-[36px] sm:leading-[40px] md:leading-[44px] font-medium">
          {number}
        </h3>
      </div>

      <div className="absolute top-3 sm:top-4 right-3 sm:right-5">
        <p className="text-xs sm:text-sm md:text-[14px] leading-[18px] sm:leading-[20px] text-[#6D6D6D] font-medium">
          {label}
        </p>
      </div>
    </div>
  );
};

export default StatCard;