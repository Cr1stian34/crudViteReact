import { IconCake, IconMail, IconPencil, IconUserCircle, IconX } from "@tabler/icons-react"

const User = ({ user, deleteUser, updateUser, handleShowModalWarning }) => {
    return (
        <article className="userContainer grid justify-center">
            <article className="user">
                <div className="userData userIcon">
                    <button onClick={()=>updateUser(user)} className="btnEdit">
                        <IconPencil />
                    </button>
                    <button onClick={()=>handleShowModalWarning(user)} className="btnDelete">
                        <IconX />
                    </button>
                </div>
                <div className="userData">
                    <IconUserCircle className="iconUser" />
                    <h5>{user.first_name} {user.last_name}</h5>
                </div>
                <div className="userData">
                    <IconMail className="iconUser"/>
                    <h5>{user.email}</h5>
                </div>
                <div className="userData">
                    <IconCake className="iconUser" />
                    <h5>{user.birthday}</h5>
                </div>
            </article>
        </article>
    )
}

export default User