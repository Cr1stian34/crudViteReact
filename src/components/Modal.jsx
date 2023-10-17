import { IconEyeOff, IconSquareX } from "@tabler/icons-react"
import { useForm } from "react-hook-form";

const Modal = ({ handleCloseModal, isShowModal, handleSubmit, submit, register, changeText, errors }) => {

    // console.log(errors)
    return (
        <section className={`fixed top-0 bottom-0 right-0 left-0 bg-black/50 flex justify-center items-center ${isShowModal ? "visible opacity-100" : "invisible opacity-0"}`}>
            <form onSubmit={handleSubmit(submit)} className="formContainer relative">
                <button type="button" className="absolute top-5 right-5 rounded-md bg-black text-white" onClick={handleCloseModal}><IconSquareX /></button>
                <h2 className="text-white text-center pb-5">{changeText? "Actualizar Usuario": "Crear Usuario"}</h2>
                <div className="container1 text-[#FFF] ">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="first_name">Name</label>
                        <input id="first_name" {...register("first_name",{
                            required:{
                                value: true,
                                message: "Este campo es requerido"
                            },
                            maxLength:{
                                value: 25,
                                message: "El campo no puede tener mas de 25 caracteres"
                            },
                            minLength: {
                                value: 1,
                                message: "Este campo necesita mas de un caracter"
                            }
                        })} type="text" placeholder="Enter name" className="p-[3px]" />
                        {errors.first_name && (
                                <span className="text-xs text-red-500">{errors.first_name.message}</span>
                            )
                        }
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="last_name">Last Name</label>
                        <input id="last_name" {...register("last_name",{
                            required: {
                                value: true,
                                message: "Este campo es requerido"
                            },
                            maxLength: {
                                value: 25,
                                message: "El campo no puede tener mas de 25 caracteres"
                            }
                        })} type="text" placeholder="Enter last name" className="p-[3px]" />
                        {errors.last_name && (
                            <span className="text-xs text-red-500">{errors.last_name.message}</span>
                        )}
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="birthday">Birthday</label>
                        <input id="birthday" {...register("birthday")} type="date" placeholder="dd/mm/yyyy" className="p-[3px] text-[#c9bebe]" />
                    </div>

                </div>

                <div className="container2 text-[#FFF]">
                    <div className="flex flex-col gap-2 modalEmail">
                        <label htmlFor="email" className="mt-3" >Email address</label>
                        <input id="email" {...register("email", {
                            required: {
                                value: true,
                                message: "Este campo es requerido"
                            },
                            maxLength: {
                                value: 150,
                                message: "Este campo no puede tener mas de 150 caracteres"
                            },
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "email invalido"
                            }
                        })} type="text" placeholder="Enter email" className="p-[3px]" />
                        {errors.email && (
                            <span className="text-xs text-red-500">{errors.email.message}</span>
                        )}
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="password" className="mt-3">Password</label>
                        <input id="password" {...register("password", {
                            required: {
                                value: true,
                                message: "Este campo es obligatorio"
                            },
                            maxLength: {
                                value: 25,
                                message: "La contraseña no puede tener mas de 25 caracteres"
                            }
                        })} type="password" placeholder="Password" className="p-[3px]" />
                        {
                            errors.password && (
                                <span className="text-xs text-red-500">{errors.password.message}</span>
                            )
                        }
                    </div>
                </div>
                <button className="btn_Modal mt-7">{changeText? "Actualizar Usuario": "Crear Usuario"}</button>
            </form>
        </section>
    )
}

export default Modal