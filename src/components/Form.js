import React, { useState } from "react";
import { useForm } from "react-hook-form";

export function Form() {
  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState("");
  const onSubmit = (data) => setResult(JSON.stringify(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Nombre: </label>
      <input {...register("Nombre")} placeholder="Nombre" />
      <br></br>
      <label>Edad: </label>
      <input {...register("Edad")} placeholder="Edad" />
      <br></br>
      <label>Ocupación: </label>
      <select {...register("category")}>
        <option value="Estudiante">Estudiante</option>
        <option value="Empleado">Empleado</option>
        <option value="Jubilado">Jubilado</option>
      </select>

      <p>{result}</p>
      <input type="submit" />
    </form>
  );
}
