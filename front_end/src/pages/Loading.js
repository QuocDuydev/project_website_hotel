import { Spinner } from "@material-tailwind/react";

export function Loading() {
    return (
        <>
            <div className=" mx-auto flex justify-center">
                <Spinner className="h-16 w-16 text-gray-900/50" />
            </div>
        </>
    );
} export default Loading;