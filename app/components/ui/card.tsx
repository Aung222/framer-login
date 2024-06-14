export function Card({ children }: { children: React.ReactNode }) {
    return (
        
        <div className="rounded-lg w-2/5 bg-gray-800 flex justify-center items-center mx-auto my-72">
            <div className="p-6 flex flex-col gap-3 items-center w-full justify-center">{children}</div>
        </div>
        
    );
}