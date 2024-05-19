import { useEffect, useState } from "react";

export default function Button({ email }: { email: string | null }) {
  const [buttonState, setButtonState] = useState({
    email,
    isClicked: false,
  });
  useEffect(() => {
    setButtonState({
      email,
      isClicked: false,
    });
  }, [email]);

  return (
    <button
      type="submit"
      className="border border-white"
      onClick={() => {
        setButtonState({
          email: null,
          isClicked: true,
        });
      }}
    >
      {buttonState.isClicked ? (
        buttonState.email ? (
          "Success!"
        ) : (
          <div className="flex space-x-2 justify-center items-center bg-white h-5 dark:invert">
            <span className="sr-only">Loading...</span>
            <div className="h-3  w-3 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="h-3 w-3 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="h-3 w-3 bg-black rounded-full animate-bounce"></div>
          </div>
        )
      ) : buttonState.email ? (
        "Success"
      ) : (
        "Submit"
      )}
    </button>
  );
}
