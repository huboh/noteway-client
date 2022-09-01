import moment from "moment";
import { getDuration } from "./utils";
import { useRef, useState, useEffect, Dispatch, SetStateAction, useMemo } from "react";

interface useElapsedTimeProps {
  from: Date;
}

const getMomentTime = (date: Date) => moment(date).fromNow();
const setMomentTime = (date: Date, setter: Dispatch<SetStateAction<string>>) => setter(getMomentTime(date));

const useElapsedTime = (props: useElapsedTimeProps) => {
  const timeoutRef = useRef<number>();
  const [elapsedTime, setElapsedTime] = useState(getMomentTime(props.from));
  const duration = useMemo(() => getDuration(elapsedTime.split(" ")), [elapsedTime]);

  useEffect(() => {
    timeoutRef.current = setTimeout(setMomentTime, duration, props.from, setElapsedTime);

    return () => clearTimeout(timeoutRef.current);
  }, [elapsedTime, duration, props.from]);

  return elapsedTime;
};

export {
  useElapsedTime as default
};