import { useState } from "react";
import { FaUserGraduate, FaUsers } from "react-icons/fa";
import { GiFamilyHouse } from "react-icons/gi";
import { Link } from "react-router-dom";


const RegistrationView = () => {
    const [selectedOption, setSelectedOption] = useState('')

    const handleOptionChange = event => {
        console.log(event.target.value)
        setSelectedOption(event.target.value)
    }
    return (
        <div className="container mx-auto py-12">
            <h3 className="text-4xl font-extrabold tracking-wider text-slate-800 text-center">Join Us Today</h3>
            <div className='grid md:grid-cols-3 grid-cols-1 mx-3 md:mx-0 space-y-5 md:gap-5 items-center md:py-12 py-1'>
                <label
                    className={`cursor-pointer grid md:grid-cols-2 grid-cols-1 hover:scale-105 transition-all duration-200 md:w-[400px] rounded-lg mt-5
          ${selectedOption === 'parent' ? 'bg-[#1e5e35] ' : 'bg-[#16A34A]'}
          `}
                >
                    <div className="md:w-[400px] w-full h-full shadow-xl hover:shadow-sky-300 md:mb-0 mb-5">
                        <div className="pt-5">
                            <FaUsers className="text-white w-12 h-12 mx-auto mb-6" />
                        </div>
                        <div className="text-center bg-white z-30 h-2/3 rounded-lg w-full md:p-7 p-3">
                            <h1 className="text-2xl text-[#16A34A] font-bold pb-3">Parent Registration</h1>
                            <p className="font-medium text-slate-600">Register as a parent to find a tutor for your child.</p>
                        </div>
                    </div>
                    <input
                        type='radio'
                        name='radio-2'
                        className="invisible"
                        value='parent'
                        checked={selectedOption === 'parent'}
                        onChange={handleOptionChange}
                    />
                </label>
                <label
                    className={`cursor-pointer grid md:grid-cols-2 grid-cols-1 hover:scale-105 transition-all duration-200 md:w-[400px] rounded-lg
           ${selectedOption === 'tutor' ? ' bg-sky-600' : 'bg-sky-400'
                        }
           `} >
                    <div className="md:w-[400px] w-full h-full shadow-xl hover:shadow-sky-300 mb-5">
                        <div className="pt-5">
                            <FaUserGraduate className="text-white w-12 h-12 mx-auto mb-6" />
                        </div>
                        <div className="text-center bg-white z-30 h-2/3 rounded-lg w-full md:p-7 p-3">
                            <h1 className="text-2xl text-sky-600 font-bold pb-3">Tutor Registration</h1>
                            <p className="font-medium text-slate-600">Sign up as a tutor to start teaching.</p>
                        </div>
                    </div>
                    <input
                        type='radio'
                        name='radio-2'
                        className="invisible"
                        value='tutor'
                        checked={selectedOption === 'tutor'}
                        onChange={handleOptionChange}
                    />
                </label>
                <label
                    className={`cursor-pointer grid md:grid-cols-2 grid-cols-1 hover:scale-105 transition-all duration-200 md:w-[400px] rounded-lg
           ${selectedOption === 'coaching' ? ' bg-red-600' : 'bg-red-400'
                        }
           
           `}
                >
                    <div className="md:w-[400px] w-full h-full shadow-xl hover:shadow-red-300 md:mb-0 mb-5">
                        <div className="pt-5">
                            <GiFamilyHouse className="text-white w-12 h-12 mx-auto mb-6" />
                        </div>
                        <div className="text-center bg-white z-30 h-2/3 rounded-lg w-full md:p-7 p-3">
                            <h1 className="text-2xl text-red-500 font-bold pb-3">Coaching Registration</h1>
                            <p className="font-medium text-slate-600">Sign up your coaching center to start accepting students.</p>
                        </div>
                    </div>
                    <input
                        type='radio'
                        name='radio-2'
                        className="invisible"
                        value='coaching'
                        checked={selectedOption === 'coaching'}
                        onChange={handleOptionChange}
                    />
                </label>
            </div>
            <div className="text-center text-lg md:pt-0 pt-6">
                {
                    selectedOption ?
                        <Link to={`/registration/${selectedOption}`}
                            state={{ registerRole: selectedOption }}>
                            <button className="group relative z-20 h-14 w-32 overflow-hidden border-y-4 border-sky-950 bg-sky-700 md:text-xl text-base tracking-wider text-white duration-500"><span className="uppercase">{selectedOption ? selectedOption : "User"}</span><span className="absolute inset-0 z-10 flex items-center justify-center text-white opacity-0 duration-100 ease-out group-hover:opacity-100 group-hover:duration-1000">Register</span><span className="absolute inset-0 -translate-y-full bg-sky-950 group-hover:translate-y-0 group-hover:duration-1000"></span><span className="absolute inset-0 translate-y-full bg-sky-950 group-hover:translate-y-0 group-hover:duration-1000"></span><span className="absolute inset-0 translate-x-full bg-sky-950 delay-100 duration-1000 group-hover:translate-x-0 group-hover:delay-300"></span><span className="absolute inset-0 -translate-x-full bg-sky-950 delay-100 duration-1000 group-hover:translate-x-0 group-hover:delay-300"></span></button>
                        </Link>
                        :
                        <button disabled className="group relative z-20 h-14 w-32 overflow-hidden border-y-4 border-sky-950 bg-sky-700 md:text-xl text-base tracking-wider text-white duration-500"><span className="uppercase">{selectedOption ? selectedOption : "User"}</span><span className="absolute inset-0 z-10 flex items-center justify-center text-white opacity-0 duration-100 ease-out group-hover:opacity-100 group-hover:duration-1000">Register</span><span className="absolute inset-0 -translate-y-full bg-sky-950 group-hover:translate-y-0 group-hover:duration-1000"></span><span className="absolute inset-0 translate-y-full bg-sky-950 group-hover:translate-y-0 group-hover:duration-1000"></span><span className="absolute inset-0 translate-x-full bg-sky-950 delay-100 duration-1000 group-hover:translate-x-0 group-hover:delay-300"></span><span className="absolute inset-0 -translate-x-full bg-sky-950 delay-100 duration-1000 group-hover:translate-x-0 group-hover:delay-300"></span></button>
                }
            </div>
        </div>
    );
};

export default RegistrationView;