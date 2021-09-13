import React, { useState } from "react";
import { useForm } from "react-hook-form";

export function Form() {
  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState([]);
  const onSubmit = (data) => {
    if (data.Edad > 50) {
      data.Categoria = "Mayor";
    } else if (data.Edad <= 50 && data.Edad >= 31) {
      data.Categoria = "Adulto";
    } else if (data.Edad > 13 && data.Edad <= 30) {
      data.Categoria = "Joven";
    } else if (data.Edad >= 0 && data.Edad <= 13) {
      data.Categoria = "Niño";
    } else if (data.Edad < 0) {
      data = {};
    }
    setResult([...result, data]);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Nombre: </label>
      <input {...register("Nombre")} placeholder="Nombre" />
      <br></br>
      <label>Edad: </label>
      <input {...register("Edad")} placeholder="Edad" />
      <br></br>
      <label>Ocupación: </label>
      <select {...register("Ocupacion")}>
        <option value="Estudiante">Estudiante</option>
        <option value="Empleado">Empleado</option>
        <option value="Jubilado">Jubilado</option>
      </select>
      <br></br>
      <input type="submit" />

      <table class="default">
        <tr>
          <th>Nombre</th>
          <th>Edad</th>
          <th>Ocupación</th>
          <th>Categoría</th>
        </tr>
        {result.map((data) => {
          return (
            <tr>
              <td>{data.Nombre}</td>
              <td>{data.Edad}</td>
              <td>{data.Ocupacion} </td>
              <td>{data.Categoria} </td>
            </tr>
          );
        })}
      </table>
    </form>
  );
}
