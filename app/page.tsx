"use client";

import { useState } from "react";

export default function Home() {
  const [modal, setModal] = useState(false);
  const [tipo, setTipo] = useState<"boa" | "ruim" | null>(null);
  const [confete, setConfete] = useState(false);

  function handleSim() {
    setTipo("boa");
    setModal(true);

    setConfete(true);
    setTimeout(() => setConfete(false), 1500);
  }

  function handleNao() {
    setTipo("ruim");
    setModal(true);

    setTimeout(() => {
      setModal(false);
    }, 5000);
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 to-pink-100 px-4 py-6 overflow-hidden">

      {/* confete */}
      {confete && (
        <div className="absolute inset-0 pointer-events-none text-center text-6xl animate-ping">
          🎉
        </div>
      )}

      {/* CARD */}
      <div className="w-full max-w-sm h-[90vh] bg-white/70 backdrop-blur-md rounded-[32px] shadow-2xl flex flex-col justify-between p-5">

        <div className="text-center">
          <h1 className="text-2xl font-bold text-pink-600">
            Bom dia,
          </h1>

          <h2 className="text-4xl font-black text-pink-500 mb-3">
            Flor do dia!
          </h2>

          <p className="bg-white rounded-full px-4 py-2 text-sm shadow inline-block">
            Se o dia for corrido, não esquece: você continua sendo a melhor parte dele ❤️
          </p>
        </div>

        <div className="text-center flex flex-col gap-6">

          <h3 className="text-lg font-semibold">
            Você está bem hoje?
          </h3>

          <div className="flex flex-col gap-3">

            <button
              onClick={handleSim}
              className="w-full bg-green-400 text-white py-4 rounded-2xl text-lg font-semibold shadow active:scale-95"
            >
              😊 Sim, tô bem!
            </button>

            <button
              onClick={handleNao}
              className="w-full bg-red-400 text-white py-4 rounded-2xl text-lg font-semibold shadow active:scale-95"
            >
              😢 Não, não tô
            </button>

          </div>

        </div>

        <div className="text-center text-sm text-pink-500">
          Clique aqui para uma fofoca 👀
        </div>
      </div>

      {/* MODAL */}
      {modal && tipo && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center px-4 z-50">

          <div className="relative bg-white w-full max-w-xs rounded-2xl p-4 text-center shadow-xl animate-[pop_.3s_ease]">

            <div className="relative w-full h-56 mb-4">
              <img
                src={tipo === "boa" ? "/feliz.jpg" : "/meme.jpg"}
                alt="meme"
                className="rounded-xl w-full h-full object-cover"
              />
            </div>

            <p className="text-xl font-bold text-pink-500">
              {tipo === "boa"
                ? "Eu sabia 😎"
                : "Nam, coragem 💖"}
            </p>

            <button
              onClick={() => setModal(false)}
              className="absolute -top-3 -right-3 bg-pink-400 text-white w-8 h-8 rounded-full"
            >
              ✕
            </button>

          </div>
        </div>
      )}
    </main>
  );
}