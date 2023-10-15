import { defineStore } from "pinia";
import { api } from "src/boot/axios";
import { useUserStore } from "src/stores/userStore";
import { ref } from "vue";

export const useLinkStore = defineStore("linkStore", () => {
  const userStore = useUserStore();

  const links = ref([]);

  const createLink = async (longLink) => {
    try {
      const res = await api({
        method: "POST",
        url: "/links/link",
        data: {
          longLink,
        },
        headers: {
          x_access_token: userStore.token,
        },
      });

      links.value.push(res.data.newLink);
    } catch (error) {
      throw error.response.data;
    }
  };

  const getLongLink = async (shortid) => {
    try {
      const res = await api.get("/links/link/" + shortid, {
        headers: {
          x_access_token: userStore.token,
        },
      });

      return res.data;
    } catch (error) {
      throw error.response.data;
    }
  };

  const getLinks = async () => {
    try {
      const res = await api.get("/links/link", {
        headers: {
          x_access_token: userStore.token,
        },
      });

      links.value = res.data.link.map((l) => l);
    } catch (error) {
      throw error.message;
    }
  };

  const deleteLinks = async (_id) => {
    try {
      return await api.delete(`/links/${_id}`, {
        headers: {
          x_access_token: userStore.token,
        },
      });
    } catch (error) {
      throw error.response.data;
    }
  };

  const updateLink = async (_id, longLink) => {
    try {
      return await api.patch(
        `/links/${_id}`,
        {
          longLink,
        },
        {
          headers: {
            x_access_token: userStore.token,
          },
        }
      );
    } catch (error) {
      throw error.response.data;
    }
  };

  return {
    createLink,
    getLinks,
    links,
    deleteLinks,
    updateLink,
    getLongLink,
  };
});
