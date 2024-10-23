import { FaCircleCheck } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";
import { Link } from "react-router-dom";

const PremiumCourseCard = () => {

    const user = {
        email: 'testuser@example.com', // Hardcoded user email for demo purposes
        name: 'Test User', // You can add more static fields as needed
    };
    // Static pricing data for different packages
    const pricingOptions = [
        {
            name: 'Free',
            packageAmount: 0.00,
            features: [
                { name: 'Limited Access', available: true },
                { name: 'Basic Support', available: true },
                { name: 'No Custom Domain', available: false }
            ],
            _id: '11111', // For demo purposes
        },
        {
            name: 'Premium',
            packageAmount: 49.99,
            features: [
                { name: 'Unlimited Access', available: true },
                { name: 'Priority Support', available: true },
                { name: 'Custom Domain', available: false }
            ],
            _id: '12345', // For demo purposes
        },
        {
            name: 'Ultimate',
            packageAmount: 99.99,
            features: [
                { name: 'Unlimited Access', available: true },
                { name: 'Premium Support', available: true },
                { name: 'Custom Domain', available: true },
                { name: 'Exclusive Features', available: true }
            ],
            _id: '67890', // For demo purposes
        }
    ];

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return (
        <>
            {pricingOptions.map((price, index) => (
                <div
                    key={index}
                    className={`w-72 p-3 mx-auto space-y-4 text-center hover:transition-all border rounded-lg shadow-md bg-slate-800 text-white 
                        ${price.name === 'Premium'
                            ? 'scale-110 hover:scale-105'
                            : 'hover:scale-105'
                        } hover:outline-blue-400 hover:outline translate hover:z-10`}
                >
                    <p className="my-2 text-lg font-bold">{price.name}</p>
                    <h3 className="text-xl">${price.packageAmount}</h3>
                    <div className="flex flex-col divider divide-purple-950 h-fit">
                        {price.features?.map((feature, index) => (
                            <p
                                key={index}
                                className="inline-flex items-center justify-center ml-2 uppercase text-start"
                            >
                                {feature.name}
                                {feature.available ? (
                                    <FaCircleCheck className="ml-2 text-center text-primary" />
                                ) : (
                                    <MdCancel className="ml-2 text-lg text-center text-red-500" />
                                )}
                            </p>
                        ))}
                    </div>

                    <div className="pt-4">
                        {price.name === 'Free' ? (
                            <Link
                                onClick={user?.email && scrollToTop}
                                to={!user?.email && '/login'}
                                className="btn-primary btn hover:outline"
                            >
                                {user ? 'Enjoy your free package' : 'Start by signing up'}
                            </Link>
                        ) : (
                            <Link
                                to={`/paymentOption/${price?._id}`}
                                className={`btn ${price.name === 'Premium'
                                    ? 'btn-info'
                                    : price.name === 'Ultimate'
                                        ? 'btn-success'
                                        : 'btn-primary'
                                    } hover:outline-blue-400 hover:outline translate`}
                            >
                                {price.name === 'Premium' && 'Buy Premium Package'}
                                {price.name === 'Ultimate' && 'Buy Ultimate Package'}
                            </Link>
                        )}
                    </div>
                </div>
            ))}
        </>
    );
};

export default PremiumCourseCard;