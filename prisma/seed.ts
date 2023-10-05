import prisma from "../src/database/db.connection";
import { products } from "../src/utils/constants.utils";

async function main() {
    const { _count } = await prisma.product.aggregate({ _count: { _all: true } });
    const count = _count._all;

    const data = Array
        .from({ length: products.length - count })
        .map((_p, i) => ({ name: products[count + i] }));

    return prisma.product.createMany({ data });
}

main()
    .catch(async (e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });