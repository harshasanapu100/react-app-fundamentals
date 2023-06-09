import React from "react";
import { FieldValues, useForm } from "react-hook-form";

interface FormData {
  name: string;
  age: number;
}

const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>();

  console.log(useForm());

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          id="name"
          type="text"
          className="form-control"
          {...register("name", { required: true, minLength: 3 })}
        />
        {errors.name?.type === "required" && (
          <p className="text-danger">The name field is required</p>
        )}
        {errors.name?.type === "minLength" && (
          <p className="text-danger">The name must be at least 3 characters</p>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          id="age"
          type="number"
          className="form-control"
          {...register("age", { required: true, max: 60, min: 18 })}
        />
        {errors.age?.type === "required" && (
          <p className="text-danger">The age field is required</p>
        )}
        {(errors.age?.type === "max" || errors.age?.type === "min") && (
          <p className="text-danger">The age must be between 18 and 60</p>
        )}
      </div>

      <button disabled={!isValid} className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default ReactHookForm;
