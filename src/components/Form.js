import React, { useState } from "react";
import { useForm } from "react-hook-form";

export function Form() {
  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState([]);

  const ACTITUD_ESTUDIANTE = "la perseverancia";
  const ACTITUD_JUBILADO = "la solidaridad";
  const ACTITUD_EMPLEADO = "la empatía";
  const ACTITUDES_MAYOR = "la paciencia, la sabiduría y ";
  const ACTITUDES_ADULTO = "la responsabilidad, la solidaridad y ";
  const ACTITUDES_JOVEN = "la paciencia, el autocuidado y ";
  const ACTITUDES_NIÑO = "la alegría, la curiosidad y ";

  function mensajeOcupacion(data) {
    if (data.Ocupacion === "Estudiante") {
      data.Actitud_ocupacion = ACTITUD_ESTUDIANTE;
    } else if (data.Ocupacion === "Empleado") {
      data.Actitud_ocupacion = ACTITUD_EMPLEADO;
    } else if (data.Ocupacion === "Jubilado") {
      data.Actitud_ocupacion = ACTITUD_JUBILADO;
    }
  }

  function asignarCategoria(data) {
    if (data.Edad > 50) {
      data.Categoria = "Mayor";
      data.Actitud_edad = ACTITUDES_MAYOR;
    } else if (data.Edad <= 50 && data.Edad >= 31) {
      data.Categoria = "Adulto";
      data.Actitud_edad = ACTITUDES_ADULTO;
    } else if (data.Edad > 13 && data.Edad <= 30) {
      data.Categoria = "Joven";
      data.Actitud_edad = ACTITUDES_JOVEN;
    } else if (data.Edad >= 0 && data.Edad <= 13) {
      data.Categoria = "Niño";
      data.Actitud_edad = ACTITUDES_NIÑO;
    } else if (data.Edad < 0) {
      data = {};
    }
  }

  function imprimirMensaje(data) {
    data.Mensaje =
      "Al " +
      data.Categoria +
      " " +
      data.Nombre +
      " de " +
      data.Edad +
      " años de edad le recomendamos tener presente " +
      data.Actitud_edad +
      data.Actitud_ocupacion +
      " para ser un(a) buen(a) " +
      data.Ocupacion;
  }

  const onSubmit = (data, e) => {
    if (
      data === null ||
      data === "undefined" ||
      data.Edad < 0 ||
      data.Edad > 120 ||
      isNaN(data.Edad)
    ) {
      alert("Ingrese valor de edad válido");
      return;
    }

    if (data.Nombre === "" || data.Edad === "") {
      alert("Ingrese un nombre con una edad");
      return;
    }

    asignarCategoria(data);
    mensajeOcupacion(data);
    imprimirMensaje(data);
    setResult([...result, data]);
    e.target.reset();
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h1> Recomendaciones para todos </h1>
        <p>
          Escriba la infomación a continuación para recibir su recomendación
        </p>
        <div className="contenedor_inputs">
          <div className="input">
            <label>Nombre: </label>
            <input {...register("Nombre")} placeholder="Nombre" />
          </div>
          <div className="input">
            <label>Edad: </label>
            <input {...register("Edad")} placeholder="Edad" />
          </div>
          <div className="input">
            <label>Ocupación: </label>
            <select {...register("Ocupacion")}>
              <option value="Estudiante">Estudiante</option>
              <option value="Empleado">Empleado</option>
              <option value="Jubilado">Jubilado</option>
            </select>
          </div>
        </div>
        <br></br>
        <div className="button">
          <input type="submit" />
        </div>
      </form>

      <table className="default tabla">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Ocupación</th>
            <th>Categoría</th>
            <th>Mensaje</th>
          </tr>
        </thead>
        <tbody>
          {result.map((data) => {
            return (
              <tr key={result.indexOf(data)}>
                <td>{data.Nombre}</td>
                <td>{data.Edad}</td>
                <td>{data.Ocupacion} </td>
                <td>{data.Categoria} </td>
                <td>{data.Mensaje}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
