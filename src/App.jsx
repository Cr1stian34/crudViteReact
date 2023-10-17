import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Users from './components/Users'
import axios, { Axios } from 'axios'
import Modal from './components/Modal'
import { useForm } from 'react-hook-form'
import { data } from 'autoprefixer'
import { EMPTY_FORM_DATA } from './constants/users'
import ModalAlert from './components/ModalAlert'

function App() {

  const [isShowModal, setIsShowModal] = useState(false);
  const [users, setUsers] = useState([]);
  const [changeText, setChangeText] = useState(null);
  const [warningAlert, setWarningAlert] = useState(false);
  const [idUser, setIdUser] = useState(null)

  const { handleSubmit, register, reset, formState } = useForm();
  const {errors} = formState
  const submit = (e) => {
    // console.log(e)
    if(changeText){
      handleUpdateUser(e)
    }else{
      createUser(e);
    }
    
  }

  const createUser = (data) => {
    axios.post("https://users-crud.academlo.tech/users/", data)
      .then(({ data }) => {
        handleCloseModal()
        reset(EMPTY_FORM_DATA)
        getAllUsers()
      })
      .catch((err) => console.log(err))
  }

  const deleteUser = (id) => {
    axios.delete(`https://users-crud.academlo.tech/users/${id}/`)
      .then(({ data }) => {
        getAllUsers()
        handleCloseWarning()
      })
      .catch((err) => console.log(err))
  }

  const updateUser = (dataUpdate) => {
    handleShowModal();
    setChangeText(dataUpdate.id);
    reset(dataUpdate);
    handleUpdateUser(dataUpdate.id);
  }

  const handleUpdateUser = (dataUser) => {
    axios.put(`https://users-crud.academlo.tech/users/${changeText}/`, dataUser)
      .then(({ data }) => {
        getAllUsers();
        handleCloseModal();
      })
      .catch((err) => console.log(err))
  }

  const getAllUsers = () => {
    axios.get("https://users-crud.academlo.tech/users/")
      .then(({ data }) => setUsers(data))
      .catch((err) => console.log(err))
  }

  const handleCloseModal = () => {
    setIsShowModal(false)
    reset(EMPTY_FORM_DATA)
    setChangeText(null)
  }

  const handleShowModal = () => {
    setIsShowModal(true);
    reset(EMPTY_FORM_DATA);
  }

  const handleShowModalWarning = (data)=>{
    setWarningAlert(true)
    setIdUser(data.id)
  }

  const handleCloseWarning = ()=>{
    setWarningAlert(false)
  }

  useEffect(() => {
    axios.get("https://users-crud.academlo.tech/users/")
      .then(({ data }) => setUsers(data))
      .catch((err) => console.log(err))
  }, [])

  // console.log(typeof (changeText))
  console.log(users)
  return (
    <main className='min-h-screen bg-[#F5FAFE]'>
      <Header />
      <Users handleShowModal={handleShowModal} handleShowModalWarning={handleShowModalWarning} users={users} deleteUser={deleteUser} updateUser={updateUser} />
      <Modal handleCloseModal={handleCloseModal} isShowModal={isShowModal} handleSubmit={handleSubmit} register={register} submit={submit} changeText={changeText} errors={errors}/>
      <ModalAlert warningAlert={warningAlert} handleCloseWarning={handleCloseWarning} deleteUser={deleteUser} idUser={idUser}/>
    </main>
  )
}

export default App
