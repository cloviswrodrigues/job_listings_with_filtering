import { ReactComponent as CloseSVG } from "../../assets/images/icon-remove.svg";

const ButtonClose = () => {
  return (
    <button className="bg-cyan-dark flex items-center p-2 rounded-r-md hover:bg-cyan-very-dark">
      <CloseSVG />
    </button>
  );
};

export default ButtonClose;
