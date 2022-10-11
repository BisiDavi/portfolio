export default function Button({
  text,
  bgColor = "black",
  color = "white",
  onClick,
  type = "button",
}: ButtonProps) {
  return (
    <>
      <button type={type} onClick={onClick} className="button">
        {text}
      </button>
      <style jsx>{`
        .button {
          color: ${color};
          background-color: ${bgColor};
          border-radius: 25px;
          padding: 7px 15px;
          font: normal normal 16px/18px "Roboto", sans-serif;
          border: none;
          cursor: pointer;
          font-family: "Raleway", sans-serif;
        }
        .button:hover {
          color: red;
          opacity: 0.8;
        }
        @media (max-width: 500px) {
          button.button {
            font: normal normal 14px/16px "Raleway", sans-serif;
            padding: 5px 20px;
          }
        }
      `}</style>
    </>
  );
}

interface ButtonProps {
  text: string;
  bgColor?: string;
  color?: string;
  onClick?: (e: any) => void;
  type?: "submit" | "reset" | "button";
}
