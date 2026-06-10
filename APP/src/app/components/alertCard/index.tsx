import { BiError, BiCheckCircle } from "react-icons/bi";

interface Props {
  message: string;
  error: boolean;
  visibility: boolean;
}

export default function AlertCard({ message, error, visibility }: Props) {
  return (
    <div
      className={`${visibility ? "opacity-100" : "opacity-0"} 
        flex items-center gap-1 absolute top-10 right-20 p-2  max-w-2xl shadow-md
        rounded-lg ${error ? "bg-red-600 text-red-950 shadow-red-700/50" : "bg-lime-600 text-lime-100 shadow-lime-700/50"} 
    `}
    >
      <span>{error ? <BiError fontSize={24} /> : <BiCheckCircle fontSize={24} />}</span>
      <span className="text-base">{message}</span>
    </div>
  );
}
