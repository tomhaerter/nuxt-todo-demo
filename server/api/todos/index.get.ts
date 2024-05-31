export default defineEventHandler(async (event) => {
  const keys = await useStorage("local").getKeys();

  let todos = await Promise.all(
    keys.map(async (key) => {
      return await useStorage("local").getItem(key);
    }),
  );

  return todos;
});
