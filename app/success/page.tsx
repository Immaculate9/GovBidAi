"use client";
import { useRouter } from "next/navigation";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

export default function Success() {
  const router = useRouter();
  const handleGoHome = () => {
    router.push(`/`);
  };
  return (
    <div className="w-full h-screen p-32 flex justify-center">
      <div className=" bg-white opacity-80 h-full w-full md:w-2/3 rounded-lg shadow">
        <div className="text-center">
          <div className="flex justify-center p-8">
            <IoMdCheckmarkCircleOutline size={160} color="orange" />
          </div>
          <div className="text-black opacity-100">
            <h6 className="font-bold text-lg">Thank You!</h6>
            <p>Your request has been received</p>
          </div>
        </div>
        <div className="flex justify-center pt-5">
          <button
            onClick={handleGoHome}
            className="w-1/3 bg-primary text-white p-3 rounded-md"
          >
            Go back
          </button>
        </div>
      </div>
    </div>
  );
}
