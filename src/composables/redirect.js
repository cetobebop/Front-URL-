import { useLinkStore } from "src/stores/linkStore";

export async function useRedirect(to, from, next) {
  const linkStore = useLinkStore();

  try {
    const { longLink } = await linkStore.getLongLink(to.params.shortid);

    location.href = longLink;
  } catch (error) {
    next("/404");
    console.log(error);
  }

  next();
}
