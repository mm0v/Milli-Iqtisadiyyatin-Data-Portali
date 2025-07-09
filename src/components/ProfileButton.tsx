
interface buttonProps {
    value: string,
    width: string,
    onClick?: () => void;
}


const ProfileButton = ({value, width, onClick}: buttonProps) => {
    return (
        <button onClick={onClick} className={`${width} py-3 font-medium mt-5 text-xl text-white rounded-md bg-blue-500 cursor-pointer`}>{value}</button>
    )
}

export default ProfileButton