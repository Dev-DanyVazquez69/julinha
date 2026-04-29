"use client";

import { useState } from "react";

export default function Home() {
  const [modal, setModal] = useState(false);
  const [tipo, setTipo] = useState<"boa" | "ruim" | "segredo" | null>(null);
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

  function handleSegredo() {
    setTipo("segredo");
    setModal(true);
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-[url('/bg.svg')] bg-cover bg-center px-4 py-6">
      {/* confete */}
      {confete && (
        <div className="absolute inset-0 pointer-events-none text-center text-6xl animate-ping">
          🎉
        </div>
      )}

      {/* CARD */}
      <div className="relative w-full max-w-sm h-[92vh] rounded-[32px] shadow-2xl flex flex-col justify-between p-5 overflow-hidden">

        {/* camada de background dentro do card */}
        <div className="absolute inset-0 bg-[url('/bg.svg')] bg-contain bg-center bg-no-repeat opacity-30" />
        {/* camada branca translúcida (efeito vidro) */}
        <div className="absolute inset-0 bg-white/70 backdrop-blur-md" />

        {/* conteúdo real */}
        <div className="relative z-10 flex flex-col justify-between h-full">

          {/* topo */}
          <div className="text-center mt-2">
            <h1 className="text-2xl font-bold text-purple-800">
              Bom dia,
            </h1>

            <h2 className="text-5xl font-extrabold text-pink-500 mb-3 tracking-wide">
              Perfeição!
            </h2>

            <p className="bg-white rounded-full px-4 py-2 text-sm shadow inline-block">
              Se o dia for corrido, não esquece: você continua sendo a melhor parte dele ❤️
            </p>
          </div>

          {/* meio */}
          <div className="text-center flex flex-col gap-6 mt-4">

            <h3 className="text-lg font-semibold text-gray-700">
              Você está bem?
            </h3>

            <div className="flex flex-col gap-3">

              <button
                onClick={handleSim}
                className="w-full bg-green-400 text-white py-4 rounded-2xl text-lg font-semibold shadow-md active:scale-95"
              >
                😊 Sim, tô bem!
              </button>

              <button
                onClick={handleNao}
                className="w-full bg-red-400 text-white py-4 rounded-2xl text-lg font-semibold shadow-md border-2 border-dashed border-red-300 active:scale-95"
              >
                😢 Não, não tô
              </button>

            </div>
          </div>

          {/* rodapé */}
          <div className="flex flex-col items-center gap-2 mb-2">
            <button
              onClick={handleSegredo}
              className="text-sm text-purple-700 border-2 border-dashed border-purple-300 px-3 py-2 rounded-xl active:scale-95"
            >
              Tenho Uma fofoca, clica aqui 😂
            </button>

            <span className="text-xl">⬆️</span>
          </div>

        </div>
      </div>

      {/* MODAL */}
      {modal && tipo && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center px-4 z-50">

          <div className="relative bg-white w-full max-w-xs rounded-3xl p-4 text-center shadow-2xl animate-[pop_.3s_ease]">

            {/* imagem */}
            <div className="w-full h-56 mb-4">
              <img
                src={
                  tipo === "boa"
                    ? "/feliz.jpg"
                    : tipo === "ruim"
                      ? "/meme.jpg"
                      : "/segredo.jpg"
                }
                alt="meme"
                className="rounded-2xl w-full h-full object-cover"
              />
            </div>

            {/* texto */}
            <p className="text-xl font-bold text-pink-500">
              {tipo === "boa"
                ? "Bem e Linda 💅💅"
                : tipo === "ruim"
                  ? "Nam, coragem 💖"
                  : "Fofoca é com ela mesmo 🤣🤣"}
            </p>

            <div className="text-pink-400 text-2xl mt-2">♡</div>

            {/* fechar */}
            <button
              onClick={() => setModal(false)}
              className="absolute -top-4 -right-4 bg-pink-400 text-white w-10 h-10 rounded-full shadow-lg text-xl"
            >
              ✕
            </button>

          </div>
        </div>
      )}
    </main>
  );
}