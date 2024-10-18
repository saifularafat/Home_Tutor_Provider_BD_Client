const PersonalInformation = () => {
  return (
    <div className="pt-7 pb-2">
      <h3 className="text-2xl font-bold text-[#165b81]">Personal Information</h3>
      <div className="flex justify-between gap-5">
        <div className="w-1/2 pt-4">
          <p><span className="text-base font-semibold text-slate-700">Gender: </span>Male</p>
        </div>
        <div className="w-1/2 pt-4">
          <p><span className="text-base font-semibold text-slate-700">
            Living Country: </span>Bangladesh</p>
        </div>
      </div>
      <div className="flex justify-between gap-5">
        <div className="w-1/2 pt-4">
          <p><span className="text-base font-semibold text-slate-700">Living City: </span>Dhaka</p>
        </div>
        <div className="w-1/2 pt-4">
          <p><span className="text-base font-semibold text-slate-700">Living Location: </span>Mirpur</p>
        </div>
      </div>
      <div className="flex justify-between gap-5">
        <div className="w-1/2 pt-4">
          <p><span className="text-base font-semibold text-slate-700">Member Since: </span> 1 hour ago</p>
        </div>
      </div>
    </div >
  );
};

export default PersonalInformation;