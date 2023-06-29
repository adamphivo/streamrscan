import { Prisma } from "@prisma/client";
import { prisma } from "@/clients";

export const createUser = async (user: Prisma.UserCreateInput) => {
  return await prisma.user.create({
    data: user,
  });
};

export const updateUser = async (address: string, user: Prisma.UserUpdateInput) => {
  return await prisma.user.update({
    where: {
      address,
    },
    data: user,
  });
};

export const deleteUser = async (address: string) => {
  return await prisma.user.delete({
    where: {
      address,
    },
  });
};

export const findUser = async (address: string) => {
  return await prisma.user.findUnique({
    where: {
      address,
    },
  });
};
