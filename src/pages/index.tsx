import { FormEvent, useState } from "react";
import axios from "axios";

const HomePage = () => {
  const initialState = {
    name: "",
    email: "",
    message: "",
  };
  const [formData, setFormData] = useState(initialState);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const { data } = await axios.post("/api/sendmail", { ...formData });
    console.log(data);
    setFormData(initialState);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col max-w-md mx-auto my-20">
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(event) =>
              setFormData({
                ...formData,
                name: event.target.value,
              })
            }
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(event) =>
              setFormData({
                ...formData,
                email: event.target.value,
              })
            }
          />

          <label htmlFor="message">Mensagem</label>
          <input
            type="text"
            id="message"
            value={formData.message}
            onChange={(event) =>
              setFormData({
                ...formData,
                message: event.target.value,
              })
            }
          />

          <input type="submit" value="Enviar" />
        </div>
      </form>
    </div>
  );
};

export default HomePage;
