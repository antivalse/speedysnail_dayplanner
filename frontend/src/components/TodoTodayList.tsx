/**
 * Component for list of active activity options
 */

import { Option } from "../types/Options";

interface TodoTodayListProps {
  options: Option[];
  handleToggle: (option: Option) => void;
}

const TodoTodayList: React.FC<TodoTodayListProps> = ({
  options,
  handleToggle,
}) => {
  return (
    <>
      <h2>Today's adventures:</h2>
      <ul>
        {options.map((option) => (
          <li key={option.id} onClick={() => handleToggle(option)}>
            {option.title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoTodayList;
