import { useState } from "react";

export default function useModal() {
  const [isModal, setIsModal] = useState(false);

  const onModalToggle = () => {
    setIsModal(!isModal);
  };

  return { isModal, onModalToggle };
}
