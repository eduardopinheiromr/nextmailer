import { FormEvent, useState } from "react";
import axios from "axios";
import Head from "next/head";

const HomePage = () => {
  const initialState = {
    name: "",
    email: "",
    message: "",
  };
  const [formData, setFormData] = useState(initialState);
  const [message, setMessage] = useState(false);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const { data } = await axios.post("/api/sendmail", { ...formData });
    console.log(data);
    setFormData(initialState);

    setMessage(true);
    setTimeout(() => {
      setMessage(false);
    }, 7000);
  };
  return (
    <>
      <Head>
        <title>Nextmailer</title>
      </Head>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col max-w-md mx-auto my-20">
          <label htmlFor="name">Nome</label>
          <input
            className="bg-gray-100 mb-4 rounded p-2"
            type="text"
            id="name"
            value={formData.name}
            onChange={(event) =>
              setFormData({
                ...formData,
                name: event.target.value,
              })
            }
            required
          />

          <label htmlFor="email">Email</label>
          <input
            className="bg-gray-100 mb-4 rounded p-2"
            type="email"
            id="email"
            value={formData.email}
            onChange={(event) =>
              setFormData({
                ...formData,
                email: event.target.value,
              })
            }
            required
          />

          <label htmlFor="message">Mensagem</label>
          <input
            className="bg-gray-100 mb-4 rounded p-2"
            type="text"
            id="message"
            value={formData.message}
            onChange={(event) =>
              setFormData({
                ...formData,
                message: event.target.value,
              })
            }
            required
          />

          <input type="submit" value="Enviar" className="p-4 cursor-pointer" />
        </div>
      </form>

      <div className={message ? "block text-center" : "hidden"}>
        <p>Email enviado com sucesso, confira a caixa de entrada.</p>
      </div>
    </>
  );
};

export default HomePage;
