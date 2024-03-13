export default function Todo() {
    return (
        <main classname="flex w-full m-auto min-h-screen justify-center items-center bg-slate-50 ">
            <div classname="bg-slate-300 rounded-3xl py-6  h-[400px] w-[450px] flex flex-col text-slate-800">
                <h1 classname="text-3xl text-center">My to dos</h1>
                <div classname="mx-8 mt-4 mb-6">
                    <form classname="flex gap-3 items-center">
                        <input type="text" name="title" placeholder="New todo" classname=" border border-slate-400 rounded-full flex-1  py-1 px-2 outline-none focus-within:border-slate-100 bg-slate-50 focus-within:bg-slate-100 placeholder:text-slate-300" required=""/>
                        <button classname="  bg-slate-50 rounded-full p-1 border border-slate-400 text-slate-400 hover:text-slate-500 text-base hover:ring-0 hover:ring-slate-100 hover:border-slate-500">
                            <p classname=" text-center">+</p>
                        </button>
                    </form>
                </div>
                <ul classname="px-6">
                    <li classname="flex px-4">
				<span classname="flex gap-2 flex-1">
					<input type="checkbox" name="check" classname="peer cursor-pointer accent-slate-300 "/>
					<label htmlfor="" classname="peer-checked:line-through peer-checked:text-slate-500 cursor-pointer">
						Todo 1
					</label>
				</span>
                        <button classname="text-slate-500  hover:text-slate-800 mr-3">
                            X
                        </button>
                    </li>
                </ul>
            </div>
        </main>
    );
}