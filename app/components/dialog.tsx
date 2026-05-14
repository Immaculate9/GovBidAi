"use client";
import { ValidationError, useForm } from "@formspree/react";
import { useSearchParams, useRouter } from "next/navigation";
import { useRef, useEffect, useState } from "react";

type Props = {
  title: string;
  onClose: () => void;
  onOk: () => void;
};

export default function Dialog({ title, onClose, onOk }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const dialogRef = useRef<null | HTMLDialogElement>(null);
  const showDialog = searchParams.get("showDialog");

  const [isButtonDisabled, setButtonDisabled] = useState(true);
  const [isValidNameField, setValidNameField] = useState(false);
  const [isValidEmailField, setValidEmailField] = useState(false);
  const [isValidMessageField, setValidMessageField] = useState(false);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    if (showDialog === "y") {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [showDialog]);

  const closeDialog = () => {
    router.replace("/", undefined);
    dialogRef.current?.close();
    onClose();
  };

  const clickOk = () => {
    onOk();
    closeDialog();
  };

  let [formState, handleSubmit] = useForm("xvoegykq");
  if (formState.succeeded) {
    setTimeout(() => {
      router.replace("/success", undefined);
    }, 1000);
    return true;
  }

  async function onNameInputChange(formData: any) {
    const name: string = formData.target.value;
    try {
      if (name !== "") {
        setValidNameField(true);
      } else {
        setValidNameField(false);
      }
    } catch (err: any) {
      return err.toString();
    }
    validateInputs();
  }
  async function onEmailInputChange(formData: any) {
    const email = formData.target.value;
    const validEmail = email.toLowerCase().match(/\S+@\S+\.\S+/);
    try {
      if (validEmail) {
        setValidEmailField(true);
      } else {
        setValidEmailField(false);
      }
    } catch (err: any) {
      return err.toString();
    }
    validateInputs();
  }
  async function onMessageInputChange(formData: any) {
    const message = formData.target.value;
    try {
      if (message !== "") {
        setValidMessageField(true);
      } else {
        setValidMessageField(false);
      }
    } catch (err: any) {
      return err.toString();
    }
    validateInputs();
  }
  const validateInputs = () => {
    if (isValidEmailField && isValidNameField && isValidMessageField) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  };

  const onSubmitClick = () => {
    setLoading(true);
    if (formState.succeeded) {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  };

  const style = {
    disabledButton: {
      opacity: 0.75,
      cursor: "not-allowed",
      boxShadow: "0px 0px 10px 0px grey",
    },
    enabledButton: {
      opacity: 1,
      cursor: "pointer",
      boxShadow: "0px 0px 10px 0px grey",
    },

    displayError: {
      display: "none",
    },
    hideError: {
      display: "block",
    },
  };

  const dialog: JSX.Element | null =
    showDialog === "y" ? (
      <dialog
        ref={dialogRef}
        className="fixed top-50 left-50 -translate-x-50 -translate-y-50 z-10  rounded-xl backdrop:bg-gray-800/50"
      >
        <div className="w-[500px] max-w-full bg-gray-200 flex flex-col">
          <div className="flex flex-row justify-between p-5 py-3 items-center">
            <h5 className="text-xl">{title}</h5>
            <button
              onClick={closeDialog}
              className="mb-2 py-1 px-2 cursor-pointer rounded border-none w-8 h-8 font-bold text-black opacity-50"
            >
              x
            </button>
          </div>
          <hr />
          {/* Form */}
          <form onSubmit={handleSubmit} className="p-5 flex flex-col gap-4">
            <div className="md:flex w-full">
              <div className="w-full md:w-1/3 flex items-center">
                <label htmlFor="name" className="opacity-60">
                  Full Name
                </label>
              </div>
              <div className="w-full md:w-2/3">
                <input
                  onChange={(e) => onNameInputChange(e)}
                  placeholder="Enter your name"
                  id="name"
                  type="text"
                  name="name"
                  required
                  className="w-full border p-2 box-border rounded-md focus:border focus:outline-none focus:no-underline focus:border-l text-sm"
                />
                <p className="text-orange text-sm pt-1">
                  {/* {isEmptyNameField ? "Name field is required" : ""} */}
                </p>
              </div>
            </div>
            <ValidationError
              prefix="Name"
              field="name"
              errors={formState.errors}
            />
            <div className="md:flex w-full">
              <div className="w-full md:w-1/3 flex items-center">
                <label htmlFor="email" className="opacity-60">
                  Email Address
                </label>
              </div>
              <div className="w-full md:w-2/3">
                <input
                  onChange={(e) => onEmailInputChange(e)}
                  required
                  placeholder="myemail@gmail.com"
                  id="email"
                  type="email"
                  name="email"
                  className="w-full border p-2 box-border rounded-md focus:border focus:outline-none focus:no-underline focus:border-l text-sm"
                />
              </div>
            </div>
            <ValidationError
              prefix="Email"
              field="email"
              errors={formState.errors}
            />
            <div className="md:flex w-full">
              <div className="w-full md:w-1/3 flex items-center">
                <label htmlFor="message" className="opacity-60">
                  Message
                </label>
              </div>
              <div className="w-full md:w-2/3">
                <textarea
                  onChange={(e) => onMessageInputChange(e)}
                  required
                  placeholder="Type your message here"
                  id="message"
                  name="message"
                  className="w-full border p-2 box-border rounded-md focus:border focus:outline-none focus:no-underline focus:border-l text-sm"
                />
              </div>
            </div>
            <ValidationError
              prefix="Message"
              field="message"
              errors={formState.errors}
            />
            <button
              onClick={onSubmitClick}
              className="text-white bg-primary w-full items-center p-3 rounded-md"
              type="submit"
              style={
                isButtonDisabled ? style.disabledButton : style.enabledButton
              }
              disabled={formState.submitting || isButtonDisabled}
            >
              {formState.submitting ? (
                <svg
                  aria-hidden="true"
                  role="status"
                  className="inline w-4 h-4 me-3 text-white animate-spin"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="#E5E7EB"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentColor"
                  />
                </svg>
              ) : (
                ""
              )}
              Submit
            </button>
          </form>
        </div>
      </dialog>
    ) : null;

  return dialog;
}
