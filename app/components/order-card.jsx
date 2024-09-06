import { HandleOrderInsertion, handleOrderItemDelete, HandleOrderMinus } from "@/utils/action";
import { MdClose } from "react-icons/md";

const OrderCard = ({ order }) => {
    return (
        <div className=" flex gap-2 bg-white rounded-2xl border">
            <div className=" p-3">
                <img src={`/dish/${order.recipeId.image}`} className="object-fit w-[100px] rounded-xl h-[70px]" alt="" />

            </div>
            <div className=" flex-1 flex flex-col gap-2 p-3">
                <div className="flex items-center justify-between">
                    <h2 className="   ">{order.recipeId.recipeName}</h2>
                </div>
                <div className=" flex gap-5">
                    <form action={handleOrderItemDelete} method="post">

                        <input type="hidden" name="orderId" value={order._id} />
                        <button type="submit" >
                            <MdClose className=" h-6 w-6" />
                        </button>
                    </form>
                    <span className="flex gap-3 ">
                        <form action={HandleOrderMinus} method="post">
                            <input type="hidden" name="recipeId" value={order.recipeId._id} />
                            <input type="submit" className="text-white bg-red-500 px-2 " value="-" />
                        </form>
                        <span className="text-black">{order.qty}</span>
                        <form action={HandleOrderInsertion} className="flex flex-col " method="post">
                            <div className="w-full">
                                <input type="hidden" name="recipeId" value={order.recipeId._id} />
                                <input type="submit" className="text-white bg-green-500 px-2 self-start" value="+" />
                            </div>
                            <div className="flex items-center mt-2">
                                <h2 className="text-xs">₹{order.recipeId.recipePrice}x{order.qty}={order.recipeId.recipePrice * order.qty}</h2>
                            </div>
                        </form>

                    </span>
                </div>

            </div>

        </div>
    )
}

export default OrderCard