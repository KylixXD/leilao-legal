import Link from "next/link";

interface ButtonHeaderProps {
    icone: React.ReactNode;
    nome: string;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    href: string; // Add the href prop for Link
}

const ButtonHeader: React.FC<ButtonHeaderProps> = ({ icone, nome, onClick, href }) => {
    return (
      <Link href={href} >
          <div className="flex flex-col justify-center items-center rounded-md border-gray-500 py-4 px-2 hover:bg-gray-100" onClick={onClick}>
            <span>{icone}</span>
            <p>{nome}</p>
          </div>
      </Link>
    );
  };
  
  export default ButtonHeader;