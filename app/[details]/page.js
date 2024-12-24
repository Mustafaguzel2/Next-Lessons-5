import { fetchProducDetails } from "@/actions/action";
import AddToCartButton from "@/components/add-to-cart-button";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

async function ProductDetails({ params }) {

    const getSession = await auth();

    if (!getSession?.user) {
        redirect('/unauth-page');
    }


    const getProductDetails = await fetchProducDetails(params.details);

    return (
        <div className="max-w-screen mx-auto p-2">
            <div className="p-6">
                <div className="grid items-start grid-cols-1 gap-12 lg:grid-cols-6">
                    <div className="lg:col-span-3 bg-gray-100 lg:sticky top-0 text-center p-6">
                        <img className="w-1/5 mx-auto lg:w-2/6 rounded object-cover"
                            src={getProductDetails?.thumbnail}
                            alt={getProductDetails?.title}
                        />
                        <hr className="border-black border-2 my-6" />
                        <div className="flex gap-5 overflow-x-auto scrollbar-hide p-3">
                            {getProductDetails?.images?.map((imageItem, index) => (
                                <img
                                    key={index}
                                    className="w-1/5 mx-auto lg:w-2/6 rounded object-cover flex-shrink-0  border-4 border-inherit"
                                    src={imageItem}
                                    alt={`${getProductDetails?.title} ${index}`}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="lg:col-span-3 text-2xl">
                        <h1 className="text-4xl font-bold text-gray-900">{getProductDetails?.title}</h1>
                        <p className="mt-5 text-gray-800">{getProductDetails?.description}</p>
                        <p className="mt-5 text-gray-800">{getProductDetails?.price}$</p>
                        <AddToCartButton productItem={getProductDetails} />
                    </div>
                </div>
                <hr className="border-black border-2 my-6" />
                <div className="items-start justify-center text-xl">
                    {
                        getProductDetails?.reviews && getProductDetails?.reviews?.length > 0 ?
                            getProductDetails?.reviews?.map((review) => (
                                <div className=" bg-gray-100 border-2 p-6 m-5">
                                    <p className="text-gray-800">Username: {review.reviewerName}
                                        <br />{review.comment}</p>
                                    <p className="text-gray-800">Rating: {review.rating}⭐</p>

                                </div>
                            ))
                            :
                            <p className="text-gray-800">No reviews found</p>
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;