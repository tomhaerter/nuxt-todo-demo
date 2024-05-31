export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");

  if (!id) {
    throw new Error("No id provided");
  }

  try {
    await useStorage("local").removeItem(id);
  } catch (e) {
    throw new Error("No item with that id");
  }

  return { success: true };
});
