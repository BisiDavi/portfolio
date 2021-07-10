export default function Button({
    text,
    bgColor = 'black',
    color = 'white',
}: ButtonProps) {
    return (
        <>
            <button className='button'>{text}</button>
            <style jsx>{`
                .button {
                    color: ${color};
                    background-color: ${bgColor};
                    border-radius: 5px;
                    padding: 15px 20px;
                    font: normal normal 16px/18px 'Roboto', sans-serif;
                    border: none;
                    cursor: pointer;
                }
            `}</style>
        </>
    );
}

interface ButtonProps {
    text: string;
    bgColor?: string;
    color?: string;
}
