import { useNavigate } from "react-router";

const GetStarted = () => {
  const navigate = useNavigate();

  return (
    <div className="flex mx-auto mt-[200px] self-center justify-center items-center text-center flex-col space-y-4 w-1/2">
      <p>
        As I can see you a new nigga, click the button and signup. And yeah that
        ain't gon log you in automatically, go to login and do it yourself
        bitch.
      </p>
      <button
        className="flex border-2 w-fit p-1 border-black rounded-md"
        onClick={() => {
          navigate("/signup");
        }}
      >
        Get Started
      </button>
    </div>
  );
};

export default GetStarted;
