import { Prisma } from "@prisma/client";
import { prisma } from "@/clients";

export const createFavorite = async (favorite: Prisma.FavoriteCreateInput) => {
  return await prisma.favorite.create({
    data: favorite,
  });
};

export const updateFavorite = async (id: string, favorite: Prisma.FavoriteUpdateInput) => {
  return await prisma.favorite.update({
    where: {
      id,
    },
    data: favorite,
  });
};

export const deleteFavorite = async (id: string) => {
  return await prisma.favorite.delete({
    where: {
      id,
    },
  });
};

export const findFavorite = async (id: string) => {
  return await prisma.favorite.findUnique({
    where: {
      id,
    },
  });
};
