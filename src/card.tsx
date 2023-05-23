/* eslint-disable @typescript-eslint/no-explicit-any */
const Card = (props: { item: any }) => {
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = 'SOLD OUT';
  } else if (props.item.location === 'Online') {
    badgeText = 'ONLINE';
  }
  return (
    <div className="relative ml-10 mt-10 flex w-[176px] flex-col gap-2">
      {badgeText && (
        <div className="absolute left-2 top-2 rounded-md bg-white px-2 py-1 text-xs  text-black">
          {badgeText}
        </div>
      )}
      <img
        className="mb-2 rounded-2xl"
        src={props.item.coverImg}
        alt="Photo of Catie Zaferes"
      />
      <div className="flex items-center gap-1">
        {' '}
        <img className="h-[14px] w-[14px] " src="/public/star.png" alt="" />
        <h3 className="text-xs font-light">{props.item.stats.rating}</h3>
        <p
          className="text-xs font-light text-gray-400
        "
        >
          ({props.item.stats.reviewCount})・{props.item.location}
        </p>
      </div>
      <p className="text-xs font-light">{props.item.description}</p>
      <p className=" text-xs font-light">
        <span className="text-xs font-bold">From £{props.item.price} </span>/
        person
      </p>
    </div>
  );
};

export default Card;
