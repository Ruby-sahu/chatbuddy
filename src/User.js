import { useSelector } from "react-redux"

export default function User() {
    const username = useSelector(state => state.uinfo.value.name)
    const userimage = useSelector(state => state.uinfo.value.image)
    return (<>

        <h4 className="text-center mt-3">Welcome {username}</h4>
        <img src={userimage} alt="" />
    </>)
}