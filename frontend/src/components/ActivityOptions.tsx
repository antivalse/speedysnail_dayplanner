/**
 * Component for rendering list of activity options
 */

import { Option } from "../types/Options";

interface ActivityOptionsProps {
  options: Option[];
  handleToggle: (option: Option) => void;
}

const ActivityOptions: React.FC<ActivityOptionsProps> = ({
  options,
  handleToggle,
}) => {
  return (
    <>
      <h2>Options:</h2>
      <div>
        <ul>
          {options.map((option) => (
            <li
              key={option.id}
              onClick={() => {
                handleToggle(option);
              }}
            >
              {option.title}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ActivityOptions;
