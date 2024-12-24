'use client';
import { useSelector } from "react-redux";
import { Button } from "../ui/button";
import { removeFromCart } from "@/store/slices/cart-slice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

function Cart() {
    
    const [totalAmount, setTotalAmount] = useState(0);
    const { cart } = useSelector((state) => state);
    console.log(cart.cartItems);
    const dispatch = useDispatch();

    useEffect(() => {
        setTotalAmount(
            cart.cartItems.reduce((total, item) => 
            total + item.price,
             0));
    }, [cart.cartItems]);

    if (cart.cartItems.length === 0) return <h1 className="text-4xl font-bold flex justify-center">Cart is empty.</h1>

    function handleRemoveFromCart(getCurrentItemID) {
        dispatch(removeFromCart(getCurrentItemID));
    }

    return (
        <div className="bg-white py-4">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-extrabold text-[#333]">Cart</h2>
                <div className="overflow-y-auto">
                    <table className="mt-12 w-full border-collapse divide-y">
                        <thead className="whitespace-nowrap text-left">
                            <tr>
                                <th className="p-3 font-bold uppercase bg-gray-200  border border-gray-300 hidden lg:table-cell">Title</th>
                                <th className="p-3 font-bold uppercase bg-gray-200  border border-gray-300 hidden lg:table-cell">Price</th>
                                <th className="p-3 font-bold uppercase bg-gray-200  border border-gray-300 hidden lg:table-cell">Remove</th>
                            </tr>
                        </thead>
                        <tbody className="whitespace-nowrap divide-y">
                            {
                                cart.cartItems.map((item) => (
                                    <tr key={item.id}>
                                        <td className="flex justify-center">
                                            <div className="flex flex-row items-center gap-6 w-max">
                                                <img
                                                    src={item.thumbnail}
                                                    alt={item.title}
                                                    className="w-64 h-64 object-contain"
                                                />
                                                <p className="text-lg font-bold text-black">{item.title}</p>
                                            </div>
                                        </td>
                                        <td className="py-5 px-4">
                                            <p className="flex justify-center">{item.price}$</p>
                                        </td>
                                        <td className="py-5 px-4">
                                            <Button
                                                className="text-bold text-white rounded hover:bg-red-500"
                                                onClick={() => {handleRemoveFromCart(item?.id)}}
                                            >
                                                Remove
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
                <div className="max-w-xl ml-auto mt-6">
                    <p className="text-lg font-bold text-[#333]">Subtotal: {totalAmount}$</p>
                </div>
            </div>


        </div>
    )
}

export default Cart;