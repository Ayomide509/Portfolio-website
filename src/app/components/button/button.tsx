"use client"

import { useRouter } from "next/navigation";

interface ButtonProp {
    label: string;
    route: string;
}




export default function Button({ label, route }: ButtonProp) {
    const router = useRouter();

    function handleClick() {
        if (route.startsWith('#')) {
            const section = document.querySelector(route);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" })
            }
        } else {
            router.push(route);

        }
    }

    return (
        <div className="bg-violet-600 px-8 py-2  rounded-3xl">
            <button onClick={handleClick}>{label}</button>
        </div>
    )

}