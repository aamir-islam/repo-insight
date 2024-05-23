"use client";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const route = useRouter();
  const [name, setName] = useState("");
  const onSubmit = () => {
    fetch(`https://api.github.com/users/${name}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        route.push("about");
      });
  };

  return (
    <div>
      <h1>helo world</h1>
      <input
        type="text"
        value={name}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
      />
      <button onClick={onSubmit}>Check</button>
    </div>
  );
}
