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
            <div className='grid grid-cols-3 gap-5 items-center py-12'>
                <label
                    className={`cursor-pointer grid grid-cols-2 hover:scale-105 transition-all duration-200 md:w-[400px] rounded-lg
          ${selectedOption === 'parent' ? 'bg-[#1e5e35] ' : 'bg-[#16A34A]'}
          `}
                >
                    <div className="md:w-[400px] shadow-md hover:shadow-2xl hover:shadow-sky-300">
                        <div className="pt-5">
                            <FaUsers className="text-white w-12 h-12 mx-auto mb-6" />
                        </div>
                        <div className="text-center bg-white z-10 rounded-lg w-full h-36 p-7">
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
                    className={`cursor-pointer grid grid-cols-2 hover:scale-105 transition-all duration-200 md:w-[400px] rounded-lg
           ${selectedOption === 'tutor' ? ' bg-sky-600' : 'bg-sky-400'
                        }
           `} >
                    <div className="md:w-[400px] shadow-md hover:shadow-2xl hover:shadow-sky-300 ">
                        <div className="pt-5">
                            <FaUserGraduate className="text-white w-12 h-12 mx-auto mb-6" />
                        </div>
                        <div className="text-center bg-white z-10 rounded-lg w-full h-36 p-7">
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
                    className={`cursor-pointer grid grid-cols-2 hover:scale-105 transition-all duration-200 md:w-[400px] rounded-lg
           ${selectedOption === 'coaching' ? ' bg-red-600' : 'bg-red-400'
                        }
           
           `}
                >
                    <div className="md:w-[400px] shadow-md hover:shadow-2xl hover:shadow-red-300 ">
                        <div className="pt-5">
                            <GiFamilyHouse className="text-white w-12 h-12 mx-auto mb-6" />
                        </div>
                        <div className="text-center bg-white z-10 rounded-lg w-full p-7">
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
            <div className="text-center text-lg ">
                {
                    selectedOption? 
                    <Link to={`/${selectedOption}/registration`}>
                        <button className="group relative z-50 h-14 w-32 overflow-hidden border-y-4 border-sky-950 bg-sky-700 text-xl text-white duration-500"><span className="uppercase">{selectedOption ? selectedOption : "User"}</span><span className="absolute inset-0 z-10 flex items-center justify-center text-white opacity-0 duration-100 ease-out group-hover:opacity-100 group-hover:duration-1000">Register</span><span className="absolute inset-0 -translate-y-full bg-sky-950 group-hover:translate-y-0 group-hover:duration-1000"></span><span className="absolute inset-0 translate-y-full bg-sky-950 group-hover:translate-y-0 group-hover:duration-1000"></span><span className="absolute inset-0 translate-x-full bg-sky-950 delay-100 duration-1000 group-hover:translate-x-0 group-hover:delay-300"></span><span className="absolute inset-0 -translate-x-full bg-sky-950 delay-100 duration-1000 group-hover:translate-x-0 group-hover:delay-300"></span></button>
                    </Link>
                    :
                    <button disabled className="group relative z-50 h-14 w-32 overflow-hidden border-y-4 border-sky-950 bg-sky-700 text-xl text-white duration-500"><span className="uppercase">{selectedOption ? selectedOption : "User"}</span><span className="absolute inset-0 z-10 flex items-center justify-center text-white opacity-0 duration-100 ease-out group-hover:opacity-100 group-hover:duration-1000">Register</span><span className="absolute inset-0 -translate-y-full bg-sky-950 group-hover:translate-y-0 group-hover:duration-1000"></span><span className="absolute inset-0 translate-y-full bg-sky-950 group-hover:translate-y-0 group-hover:duration-1000"></span><span className="absolute inset-0 translate-x-full bg-sky-950 delay-100 duration-1000 group-hover:translate-x-0 group-hover:delay-300"></span><span className="absolute inset-0 -translate-x-full bg-sky-950 delay-100 duration-1000 group-hover:translate-x-0 group-hover:delay-300"></span></button>
                }
            </div>
        </div>
    );
};

export default RegistrationView;