import { nanoid } from "nanoid";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const id = nanoid();

  const todo = { id, ...body };

  await useStorage("local").setItem(id, todo);

  return { ...todo };
});
