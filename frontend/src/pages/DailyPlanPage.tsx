/**
 * Welcome page and daily planner
 */

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import ActivityOptions from "../components/ActivityOptions";
import TodoTodayList from "../components/TodoTodayList";
import { Option } from "../types/Options";
import * as ActivitiesAPI from "../services/ActivitiesAPI";

const DailyPlanPage = () => {
  const [activityOptions, setActivityOptions] = useState<Option[]>([]);
  const [chosenActivities, setChosenActivities] = useState<Option[]>([]);
  const [toggle, setToggle] = useState(false);

  const { username } = useParams();

  // create navigate instance
  const navigate = useNavigate();

  // set today's date and format it
  const timestamp = Date.now();
  const date = new Date(timestamp);
  const dateOptions: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = new Intl.DateTimeFormat("en-US", dateOptions).format(
    date
  );

  const getActivityOptions = async () => {
    setActivityOptions([]);
    try {
      const data = await ActivitiesAPI.getOptions();
      setActivityOptions(data);
      console.log("data is: ", data);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
      } else {
        console.log("Something unexpected happened.");
      }
    }
  };

  const { data } = useQuery({
    queryKey: ["activities"],
    queryFn: () => ActivitiesAPI.getOptions(),
  });

  console.log("data from usequery is: ", data);

  // Separate active options from inactive options
  const inactiveOptions = activityOptions.filter((option) => option.active);

  // Toggle activity option's active status
  const handleToggleOption = async (option: Option) => {
    // Update option in database
    const updatedOption = await ActivitiesAPI.updateOption(option.id, {
      active: !option.active,
    });
    setActivityOptions([...activityOptions, updatedOption]);
    setChosenActivities([...chosenActivities, updatedOption]);
    setToggle(!toggle);
  };

  useEffect(() => {
    getActivityOptions();
  }, [toggle]);

  return (
    <>
      {" "}
      <h1>Welcome to your daily planner, {username}!</h1>
      <h2>{formattedDate}</h2>
      {data && (
        <ActivityOptions handleToggle={handleToggleOption} options={data} />
      )}
      <TodoTodayList
        handleToggle={handleToggleOption}
        options={inactiveOptions}
      />
      <button onClick={() => navigate("/")}>Log out</button>
    </>
  );
};

export default DailyPlanPage;
