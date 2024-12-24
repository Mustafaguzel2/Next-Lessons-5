'use client';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

function ProductCard({ product }) {

    const router = useRouter();

    return (
        <Card className="shadow-md shadow-gray-500 overflow-hidden p-2">
            <CardHeader className="text-center">
                <CardTitle>{product.id}. {product.title}</CardTitle>
                <CardDescription className="flex justify-center">
                <img className="w-72 h-72 object-cover"
                    src={product.thumbnail}
                    alt="recipe image">
                </img></CardDescription>
            </CardHeader>
            <CardContent className="flex flex-row justify-evenly text-center">
                <p >{product.rating}⭐</p>
                <p>{product.price}$</p>
                <p className="capitalize">Category: {product.category}</p>
            </CardContent>
            <CardFooter className="flex justify-center">
                <Button onClick={() => router.push(`/${product?.id}`)}>View Details</Button>
            </CardFooter>
        </Card>
    )
}
export default ProductCard;