import { IconUserPlus } from "@tabler/icons-react"
import User from "./User"
import Vacio from "./Vacio"

const Users = ({ handleShowModal, users, deleteUser, updateUser, handleShowModalWarning }) => {
  return (
    <section className="pt-[5rem] usersContainer">

      {/* {users.length > 0 ? <Vacio /> : */}
      {
        users.length > 0 ? users.map((user) => <User key={user.id} user={user} deleteUser={deleteUser} updateUser={updateUser} handleShowModalWarning={handleShowModalWarning}/>) : <Vacio />
      }

      <button onClick={handleShowModal} className="btnCreateUser"><IconUserPlus /></button>
    </section>
  )
}

export default Users