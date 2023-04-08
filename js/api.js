const Api = {
  GET: async (value) => {
    try {
      let data = await fetch(`https://reqres.in/api/users?page=${value}`)
        .then((res) => res.json())
        .then((data) => data.data);

      return await data;
    } catch {
      return undefined;
    }
  },
  POST: async (data) => {
    try {
      let respons = await fetch(`https://reqres.in/api/users`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((json) => json);

      return respons;
    } catch {
      return alert("xatolik bo'ldi");
    }
  },
  DELETE: async (value) => {
    try {
      let respons = await fetch(`https://reqres.in/api/users/${value}`, {
        method: "DELETE",
      })

      return respons;
    } catch {
      return alert("xato");
    }
  },
};

export {Api};