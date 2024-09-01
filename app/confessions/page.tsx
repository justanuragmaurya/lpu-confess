import Confessions from "@/components/Confessions"

export const dynamic = 'force-dynamic';

export default function ConfessionsPage(){
    return(
        <div className="flex gap-5 p-5 justify-center items-center">
            <Confessions/>
        </div>
    )
}