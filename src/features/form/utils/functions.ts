import { Moment } from "moment";

export const handleDateChange = (date: string | Moment, setter: React.Dispatch<React.SetStateAction<Date | string>>) => {
    if (typeof date === "string") {
      setter(date);
    } else {
      setter(date.toDate());
    }
  };