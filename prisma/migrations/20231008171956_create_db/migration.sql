-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR(32) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "profiles" (
    "id" SERIAL NOT NULL,
    "nickName" VARCHAR(16) NOT NULL,
    "fullName" VARCHAR(32) NOT NULL,
    "bio" VARCHAR(128),
    "description" VARCHAR(255),
    "birthday" DATE NOT NULL,
    "avatarUrl" TEXT,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "profiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userProducts" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,

    CONSTRAINT "userProducts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "practices" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "practices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "practiceAdventages" (
    "id" SERIAL NOT NULL,
    "adventage" TEXT,
    "practiceId" INTEGER NOT NULL,

    CONSTRAINT "practiceAdventages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "practiceProducts" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "practiceId" INTEGER NOT NULL,

    CONSTRAINT "practiceProducts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "profiles_nickName_key" ON "profiles"("nickName");

-- CreateIndex
CREATE UNIQUE INDEX "profiles_userId_key" ON "profiles"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "userProducts_userId_productId_key" ON "userProducts"("userId", "productId");

-- AddForeignKey
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userProducts" ADD CONSTRAINT "userProducts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userProducts" ADD CONSTRAINT "userProducts_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "practiceAdventages" ADD CONSTRAINT "practiceAdventages_practiceId_fkey" FOREIGN KEY ("practiceId") REFERENCES "practices"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "practiceProducts" ADD CONSTRAINT "practiceProducts_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "practiceProducts" ADD CONSTRAINT "practiceProducts_practiceId_fkey" FOREIGN KEY ("practiceId") REFERENCES "practices"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
