const Sidebar = (props) => {
  return (
    <div>
      {/* // <div className=" h-10 border border-black "> */}
      <div className="flex flex-row justify-around mt-6 border-b">
        <div className="w-6 text-xl border-b border-lime-300 mb-8 font-bold text-white">
          {props.number}
        </div>
        <img className=" h-12 w-1/4 mb-4 " src={props.image} alt="one piece" />
        <div className="w-1/2 font-sans text-white">{props.content}</div>
      </div>
    </div>
  );
};

export default Sidebar;
