
interface buttonProps {
    value: string,
    width: string
}


const ProfileButton = ({value, width}: buttonProps) => {
    return (
        <button className={`${width} py-3 font-medium mt-5 text-xl text-white rounded-md bg-blue-500 cursor-pointer`}>{value}</button>
    )
}

export default ProfileButton