import React, { useState } from "react";
import Input from "./Input";
import { createCategory } from "../API/category";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const NewRecipeModal = ({ show, setShowModal }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: ["add category"],
    mutationFn: () =>
      createCategory(
        name,

        image
      ),
    onSuccess: () => {
      queryClient.invalidateQueries(["category"]);
      setShowModal(false);
    },
  });

  if (!show) return null;

  return (
    <div className="inset-0 fixed flex justify-center items-center flex-col z-20 overflow-hidden">
      <div className="bg-black absolute z-0 opacity-70 inset-0"></div>
      <div className="relative z-10 flex flex-col border-[2px] border-gray-300 rounded-lg w-[90%] md:w-[40%] bg-white p-6">
        <button
          className="absolute right-3 top-3 w-[80px] bg-red-500 text-white rounded-md hover:bg-red-600 transition"
          onClick={() => setShowModal(false)}
        >
          Close
        </button>

        <h2 className="text-xl font-bold mb-4">Add a New Category</h2>

        <div className="overflow-y-auto max-h-60 mb-4">
          <Input
            name="Category Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Input
            name="Image Link"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>

        <button
          onClick={mutate}
          className="bg-green-500 text-white rounded-md w-full py-2 hover:bg-green-600 transition"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default NewRecipeModal;
