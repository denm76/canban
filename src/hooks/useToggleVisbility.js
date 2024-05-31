import { useEffect, useState } from "react";


export default function useToggleVisibility(isPressed) {
  const [visibility, setVisibility] = useState(false);
  useEffect(() => {
    if (isPressed && !visibility) {
      setVisibility(true);
    } else if (!isPressed && visibility) {
      setVisibility(false);
    }
  }, [isPressed, visibility]);
  return visibility;
}