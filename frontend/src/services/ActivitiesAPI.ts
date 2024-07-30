/**
 * Service for communicating with the json-server backend
 */

import axios from "axios";
import { Option } from "../types/Options";

const BASE_URL = "http://localhost:3000";

/**
 * Get all options
 */

export const getOptions = async () => {
  const res = await axios.get<Option[]>(BASE_URL + "/options");
  return res.data;
};

/**
 * Update a single option
 * @param option_id Identify option to be updated
 * @param data Identify data to update option with
 */

export const updateOption = async (
  option_id: number,
  data: Partial<Option>
) => {
  const res = await axios.patch<Option>(
    `${BASE_URL}/options/${option_id}`,
    data
  );
  return res.data;
};
