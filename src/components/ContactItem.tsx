"use client"

type Props = {
    icon: React.ReactNode;
    label: string;
    link: string;
};

export const ContactItem = ({icon, label, link}: Props) => {
    return (
        <div className="w-50 cursor-pointer flex flex-row gap-3 mt-3 items-center p-5 bg-gray-950 rounded-2xl max-md:w-full max-md:p-3" onClick={() => window.open(link)}>
            {icon}
            <p>{label}</p>
        </div>
    );
}