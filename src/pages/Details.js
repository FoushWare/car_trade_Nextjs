import Link from 'next/link';

const people = [
    { v: 'car', name: "foush" },
    { v: 'bike', name: "John" },
    { v: 'airplane', name: "Mike" }
]
export default function Details() {
    return (
        <div>
            {people.map(e => (
                <div>

                    <Link as={`/${e.v}/${e.name}`} href="[vechicle]/[person]">
                        <a>Navigate to {e.name}'s {e.v}</a>
                    </Link>
                </div>
            ))}
        </div>
    )
}