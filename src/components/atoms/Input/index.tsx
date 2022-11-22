import { Wrapper } from "./styles";
import type { InputProps } from "./interfaces";

const Input = (props: InputProps) => {
  /**
   * @example REDUX
   * const { users } = useSelector((state: StateReducer) => state);
   * const dispatch = useDispatch();
   * dispatch(setUsers(data))
   */

  /**
   * @example REACT CONTEXT
   * const { users, setUsers } = useContext(UsersContext);
   */

  return <Wrapper>Input</Wrapper>;
};

export default Input;
