import { customAlphabet } from "nanoid";

const nanoid = customAlphabet("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", 21);

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const id = nanoid();

  const todo = { id, ...body, createdAt: Date.now() };

  await useStorage("local").setItem(id, todo);

  return { ...todo };
});
