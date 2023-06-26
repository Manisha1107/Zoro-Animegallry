const Card = (props) => {
  return (
    //        <div className=' h-auto bg-black '>
    //      <div className='w-52  bg-gray-50 mb-6'>
    //    <div className="bg-stone-900 ">
    <div>
      <div className=" mt-8  bg-stone-700 h-60 w-36 ml-2 mr-2 rounded-2xl sm:h-96 sm:w-60 sm:mt-10 lg:h-96 lg:w-60 lg:mt-10 md:h-96 md:w-60 md:mt-10 xl:h-96 xl:w-60 xl:mt-10">
        <img
          className="h-48 w-36 rounded-t-2xl sm:h-96 sm:w-60 lg:h-96 lg:w-60 md:h-52 md:w-60 xl:h-52 xl:w-60"
          src={props.imageURL}
          alt="one piece"
        />

        <div className="mb-2 text-sm text-white font-normal font-abc tracking-wide ml-2   sm:text-white   sm:ml-2 md:mb-4 md:text-1xl sm:font-abc md:font-abc xl:font-abc lg:font-abc md:text-white   md:ml-2   lg:mb-4 lg:text-1xl lg:text-white    lg:ml-2    xl:mb-2 xl:text-xl xl:text-white    xl:ml-2 ">
          {props.title}
        </div>

        <div className="text-slate-300 text-xs font-normal p-2 mb-2 font-abc hidden sm:block lg:block md:block xl:block xl:text-sm">
          {props.tname}
        </div>
        <div className="text-slate-300 text-sm hidden font-abc sm:block lg:block md:block xl:block">
          {props.duration}
        </div>
      </div>
    </div>
  );
};
export default Card;
