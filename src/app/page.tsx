import Link from "next/link";
import prisma from "../prisma"
export type TodoType = {
    id: string;
    title: string;
    complete: boolean;
    deleted: boolean;
};
import trash from "../../public/trash-icon.svg"
import {revalidatePath} from "next/cache";
import Image from "next/image";

async function getTodos() {
    const todos = await prisma.todo.findMany();
    return todos;
}

export default async function Home() {
    const todos = await getTodos();

    async function addTodo(formData: FormData){
        "use server"
        const text = formData.get("text")
        await prisma.todo.create({
            data:{
                content: text?.toString(),
            }
        })
        revalidatePath("/")
    }

    async function delTodo(formData: FormData){
        "use server"
        const id = formData.get("id")
        await prisma.todo.delete({
            where:{
                id: parseInt(id),
            }
        })
        revalidatePath("/")
    }
    return (
        <div>
            <header className="max-w-screen-md m-auto text-center items-center pb-5">
                <h1 className="text-2xl underline underline-offset-4 ">Todos</h1>
                <div className="flex flex-row gap-20 items-center justify-center">
                    <form action={addTodo} className="flex flex-col items-center">
                        <input type="text" name="text" className="border-2 w-full"/>
                        <button type="submit" className=" border border-slate-300 text-slate-300 rounded px-2 w-max flex py-1 hover:bg-zinc-700 focus-within:bg-zinc-700 outline-none">
                            Add todo
                        </button>
                    </form>
                </div>
            </header>
            <div className="py-4">
                {todos.map((todo) => (
                    <div className="py-4">
                        <div key={todo.id} className="flex m-auto max-w-screen-md justify-between border-2 p-4">
                            <a> {todo.content} </a>
                            <form action={delTodo}>
                                <button name="id" value={todo.id} type="submit"> <Image className="h-4" src={trash}/></button>
                            </form>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}