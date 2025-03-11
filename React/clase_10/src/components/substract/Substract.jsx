import { CounterButtonStyled } from "./SubstractStyles";

import { FiDivideCircle } from "react-icons/fi";
import { RiNumber5 } from "react-icons/ri";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { decrement, decrement_5, divide } from "../../redux/counterSlice/counterSlice";

const Substract = () => {

  const dispatch = useDispatch()

  return (
    <>
      <CounterButtonStyled last>
        <FiDivideCircle size="32px" color="white" onClick={() => dispatch(divide())} />
      </CounterButtonStyled>
      <CounterButtonStyled onClick={() => dispatch(decrement_5())}>
        <p>
          -<RiNumber5 size="32px" color="white" />
        </p>
      </CounterButtonStyled>
      <CounterButtonStyled>
        <AiOutlineMinusCircle size="32px" color="white" onClick={() => dispatch(decrement())} />
      </CounterButtonStyled>
    </>
  );
};

export default Substract;
