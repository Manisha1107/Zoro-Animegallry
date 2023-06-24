const Card = (props) => {
  return (
    //        <div className=' h-auto bg-black '>
    //      <div className='w-52  bg-gray-50 mb-6'>
    //    <div className="bg-stone-900 ">
    <div>
      <div className="mt-10 mb-1 bg-stone-700 h-96 w-60 ml-2 mr-2 rounded-2xl">
        <img
          className="h-60 w-60 rounded-t-2xl"
          src={props.imageURL}
          alt="one piece"
        />

        <div className="mb-4 text-1xl text-white font-bold  tracking-wide ml-2 font-sans">
          {props.title}
        </div>

        <div className="text-slate-300 text-xs font-normal p-2 mb-3">
          {props.tname}
        </div>
        <div className="text-slate-300 text-sm ">{props.duration}</div>
      </div>
    </div>
  );
};
export default Card;
