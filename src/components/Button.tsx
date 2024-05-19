import { useEffect, useState } from "react";

export default function Button({
  email,
  isUserLoading,
  isButtonDisabled,
}: {
  email: string | null;
  isUserLoading: boolean;
  isButtonDisabled: boolean;
}) {
  const [buttonState, setButtonState] = useState({
    email,
    isUserLoading,
    isButtonDisabled,
  });
  const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

  useEffect(() => {
    setButtonState({
      email,
      isUserLoading,
      isButtonDisabled,
    });
  }, [email, isUserLoading, isButtonDisabled]);

  return (
    <button
      type="submit"
      className="border border-white"
      onClick={() => {
        setHasBeenSubmitted(true);
      }}
      disabled={buttonState.isButtonDisabled}
    >
      {hasBeenSubmitted ? (
        buttonState.isUserLoading ? (
          <div className="flex space-x-2 justify-center items-center bg-white h-5 dark:invert">
            <span className="sr-only">Loading...</span>
            <div className="h-3  w-3 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="h-3 w-3 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="h-3 w-3 bg-black rounded-full animate-bounce"></div>
          </div>
        ) : buttonState.email ? (
          "Success!"
        ) : (
          "Failed. Please Click Again."
        )
      ) : (
        "Submit"
      )}
    </button>
  );
}
