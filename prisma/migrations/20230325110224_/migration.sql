-- CreateTable
CREATE TABLE "Articles" (
    "id" SERIAL NOT NULL,
    "articleId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "likedCount" INTEGER NOT NULL,
    "articleType" TEXT NOT NULL,
    "publishedYear" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "publishedAt" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Articles_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Articles_articleId_key" ON "Articles"("articleId");
