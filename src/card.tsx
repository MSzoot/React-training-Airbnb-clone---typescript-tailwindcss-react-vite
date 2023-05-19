const Card = () => {
  return (
    <div className="m-10 flex w-[176px] flex-col gap-2">
      <img
        className="mb-2 rounded-2xl"
        src="/public/katie-zaferes.png"
        alt="Photo of Catie Zaferes"
      />
      <div className="flex items-center gap-1">
        {' '}
        <img className="h-[14px] w-[14px] " src="/public/star.png" alt="" />
        <h3 className="text-xs font-light">5.0</h3>
        <p
          className="text-xs font-light text-gray-400
        "
        >
          (6)・USA
        </p>
      </div>
      <p className="text-xs font-light">Life Lessons with Katie Zaferes</p>
      <p className=" text-xs font-light">
        <span className="text-xs font-bold">From £136 </span>/ person
      </p>
    </div>
  );
};

export default Card;
