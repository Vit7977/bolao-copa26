import Link from "next/link";

export default function NotFound(){
    return (
        <div className="h-screen flex flex-col justify-center items-center bg-black text-white">
            <h1 className="font-medium text-2xl">404 | PÁGINA NÃO ENCONTRADA.</h1>
            <Link href={"/"} className="text-lime-600 underline">Retornar</Link>
        </div>
    )
}