const Sidebar = (props) => {
  return (
    <div>
      {/* // <div className=" h-10 border border-black "> */}
      <div className="flex flex-row justify-around sm:mt-6    lg:mt-6    xl:mt-6    md:mt-6 mt-2 border-b">
        <div className="md:w-6 md:text-xl md:border-b md:border-lime-300 md:mb-8    lg:w-6 ld:text-xl ld:border-b lg:border-lime-300 lg:mb-8   xl:w-6 xl:text-xl xl:border-b xl:border-lime-300 xl:mb-8 text-sm border-b border-lime-300 mb-6 text-white ">
          {props.number}
        </div>
        <img
          className=" xl:h-12  xl:w-1/4  xl:mb-4   md:h-12 md:w-1/4 md:mb-4     lg:h-12 lg:w-1/4 lg:mb-4   h-8 w-10 mb-2  "
          src={props.image}
          alt="one piece"
        />
        <div className="w-1/2 font-sans text-white font-abc ">
          {props.content}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
