
const ModalAlert = ({warningAlert, handleCloseWarning, deleteUser, idUser}) => {
    return (
        <section className={`fixed bg-black/50 top-0 bottom-0 right-0 left-0 flex justify-center items-center ${warningAlert? "visible opacity-100": "invisible opacity-0"}`}>
            <div className="w-[453px] h-[170px] bg-[#F5FAFE] p-4 rounded-md text-center flex flex-col gap-7">
                <h3 className="p-4">Are you sure you want to delete this user?</h3>
                <div className="flex justify-center gap-5 ">
                    <button onClick={handleCloseWarning} className="bg-[#5465FF] py-2 px-5 rounded-xl text-[#fff]">Cancel</button>
                    <button onClick={()=>deleteUser(idUser)} className="bg-[#EA2779] py-2 px-5 rounded-xl text-[#fff]">Delete</button>
                </div>
            </div>
        </section>
    )
}

export default ModalAlert