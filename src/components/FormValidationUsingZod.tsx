import React, { FormEvent } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z
  .object({
    name: z
      .string({
        required_error: "Name is required",
      })
      .min(3, { message: "Name must be minimu 3 characters length" })
      .max(5, { message: "Name must be maximum 20 characters length" }),
    age: z
      .number({
        invalid_type_error: "Age is required",
      })
      .positive()
      .min(18, { message: "Age must be between 18 and 60" })
      .max(60, { message: "Age must be between 18 and 60" }),
  })
  .required();

type FormData = z.infer<typeof schema>;
const FormValidationUsingZod = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          id="name"
          type="text"
          className="form-control"
          {...register("name")}
        />
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          id="age"
          type="number"
          className="form-control"
          {...register("age", { valueAsNumber: true })}
        />
        {errors.age && <p className="text-danger">{errors.age.message}</p>}
      </div>
      <button disabled={!isValid} className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default FormValidationUsingZod;
