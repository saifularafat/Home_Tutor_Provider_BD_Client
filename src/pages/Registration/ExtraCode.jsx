
// comment image and nid cart
{/* coaching Ted License file */ }
<div className="md:1/3 w-full ">
    <label htmlFor="coachingTedLicense" className="block text-slate-700 font-medium pb-1">
        <span className="font-bold text-slate-500 tracking-wider">Coaching TED License</span>
    </label>
    <div className='form-control rounded-lg border-2   items-center '>
        <input
            {...register('coachingTedLicense', { required: true })}
            name='coachingTedLicense'
            type='file'
            className='file-input file-input-bordered file-input-md w-full max-w-md'
        />
        {errors.coachingTedLicense && (
            <span className="mt-1 text-red-500">
                Coaching Ted License is required
            </span>
        )}
        {imageError && (
            <p className="text-red-500 text-sm">{imageError}</p>
        )}
    </div>
</div>


{/* parent NID Image file */ }
<div className="md:col-span-2 col-span-1">
    <label htmlFor="parentNIDCart" className="block text-slate-700 font-medium pb-1">
        <span className="font-bold text-slate-500 tracking-wider">Upload Your NID Cart</span>
    </label>
    <div className='form-control rounded-lg border-2   items-center '>
        <input
            {...register('parentNIDCart', { required: true })}
            name='parentNIDCart'
            type='file'
            className='file-input file-input-bordered file-input-md w-full max-w-md'
        />
        {errors.parentNIDCart && (
            <span className="mt-1 text-red-500">
                NID Cart is required
            </span>
        )}
        {imageError && (
            <p className="text-red-500 text-sm">{imageError}</p>
        )}
    </div>
</div>


{/* tutor Student ID Image file */ }
<div className="md:col-span-2 col-span-1">
    <label htmlFor="tutorIDCart" className="block text-slate-700 font-medium pb-1">
        <span className="font-bold text-slate-500 tracking-wider">Upload Student Id Cart</span>
    </label>
    <div className='form-control rounded-lg border-2   items-center '>
        <input
            {...register('tutorIDCart', { required: true })}
            name='tutorIDCart'
            type='file'
            className='file-input file-input-bordered file-input-md w-full max-w-md'
        />
        {errors.tutorIDCart && (
            <span className="mt-1 text-red-500">
                ID Cart is required
            </span>
        )}
        {imageError && (
            <p className="text-red-500 text-sm">{imageError}</p>
        )}
    </div>
</div> 
 
