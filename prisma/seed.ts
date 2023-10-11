import prisma from "../src/database/db.connection";
import { products, practicesData } from "../src/utils/constants.utils";

async function seedProduct() {
  const { _count } = await prisma.product.aggregate({ _count: { _all: true } });
  const count = _count._all;

  const data = Array.from({ length: products.length - count }).map((_p, i) => ({
    name: products[count + i],
  }));
  return prisma.product.createMany({ data });
}

async function seedPractice() {
  const { _count } = await prisma.practice.aggregate({
    _count: { _all: true },
  });
  const count = _count._all;
  const data = Array.from({ length: practicesData.length - count }).map(
    (_p, i) => ({
      name: practicesData[count + i].name,
    })
  );
  return await prisma.practice.createMany({ data });
}

async function seedPracticeAdvantage() {
  const { _count } = await prisma.practiceAdvantage.aggregate({
    _count: { _all: true },
  });
  const count = _count._all;

  const result = await prisma.practice.findMany({
    select: { id: true },
  });

  const data = Array.from({
    length: practicesData.length - count,
  }).map((_p, i) => ({
    practiceId: result[count + i].id,
    advantage: practicesData[count + i].advantage,
    description: practicesData[count + i].description,
  }));
  return await prisma.practiceAdvantage.createMany({
    data,
  });
}

async function seedPracticeProduct() {
  const { _count } = await prisma.practiceProduct.aggregate({
    _count: { _all: true },
  });
  const count = _count._all;

  const practiceData = await prisma.practice.findMany({
    select: { id: true },
  });

  const dataPracticeProduct: { productId: number; practiceId: number }[] = [];

  practicesData.forEach((practice, i) => {
    practice.products.forEach((product) => {
      dataPracticeProduct.push({
        productId: product,
        practiceId: practiceData[i].id,
      });
    });
  });

  const data = Array.from({
    length: dataPracticeProduct.length - count,
  }).map((_p, i) => ({
    practiceId: dataPracticeProduct[count + i].practiceId,
    productId: dataPracticeProduct[count + i].productId,
  }));
  return await prisma.practiceProduct.createMany({ data });
}

async function main() {
  await seedProduct(),
    await seedPractice(),
    await seedPracticeAdvantage(),
    await seedPracticeProduct();
}

main()
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
