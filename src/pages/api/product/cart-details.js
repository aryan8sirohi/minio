import { PrismaClient } from '@prisma/client'
import { NextApiHandler } from 'next';

const prisma = new PrismaClient()

async function CartDetails(req, res) {
    try {
        
        const { product_id, quantity } = req.body;
        // const { quantity } = req.body;//


        const product = await prisma.product.findFirst({
            where: { skuid: product_id },
        }); 8



        // Throw an error if the product doesn't exist
        if (!product) {
            throw new Error(`Product with ID ${productId} not found`);
        }


        const cartItem = await prisma.cart.create({
            data: {
                productId: product_id,
                userId: 'clefhzm50000fhqpooy9gspo6',
                qty: quantity
            },
        });

        res.json( 200,  cartItem);
    } catch (error) {
        // Send a JSON response with the error message
        res.status(400).json({ message: error.message });
    }
}

export default CartDetails;

