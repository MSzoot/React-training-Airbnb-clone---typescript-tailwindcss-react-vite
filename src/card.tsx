const Card = (props) => {
  return (
    <div className="ml-10 mt-10 flex w-[176px] flex-col gap-2">
      <img
        className="mb-2 rounded-2xl"
        src={props.img}
        alt="Photo of Catie Zaferes"
      />
      <div className="flex items-center gap-1">
        {' '}
        <img className="h-[14px] w-[14px] " src="/public/star.png" alt="" />
        <h3 className="text-xs font-light">{props.rating}</h3>
        <p
          className="text-xs font-light text-gray-400
        "
        >
          ({props.comments})・{props.location}
        </p>
      </div>
      <p className="text-xs font-light">{props.discription}</p>
      <p className=" text-xs font-light">
        <span className="text-xs font-bold">From £{props.price} </span>/ person
      </p>
    </div>
  );
};

export default Card;
