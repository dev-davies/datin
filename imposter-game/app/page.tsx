'use client';

import React, { useState } from 'react';

type GamePhase = 'setup' | 'passReveal' | 'discussion' | 'voting' | 'resolution';

const wordCategories: Record<string, string[]> = {
  'Movies': ['The Matrix', 'Titanic', 'Black Panther', 'Inception', 'Avatar', 'The Godfather', 'Jaws', 'Toy Story', 'Spider-Man', 'Jurassic Park'],
  'Events': ['Olympics', 'World Cup', 'Met Gala', 'Super Bowl', 'Coachella', 'Comic-Con', 'Election Day', 'Christmas', 'New Year'],
  'Naija Slangs': ['Sapa', 'Wahala', 'Japa', 'Odogwu', 'Aza', 'Trenches', 'E Choke', 'Bant', 'Gbas Gbos', 'Idan', 'Soro Soke'],
  'Pop Culture': ['TikTok', 'Cancel Culture', 'K-Pop', 'Euphoria', 'Memes', 'Influencer', 'Viral Video', 'Stan Twitter', 'Podcasts']
};

export default function ImposterGame() {
  const [gamePhase, setGamePhase] = useState<GamePhase>('setup');
  const [selectedCategory, setSelectedCategory] = useState<string>('Movies');
  const [players, setPlayers] = useState<string[]>([]);
  const [newPlayerName, setNewPlayerName] = useState('');
  
  const [currentWord, setCurrentWord] = useState('');
  const [imposterIndex, setImposterIndex] = useState<number | null>(null);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [isRoleVisible, setIsRoleVisible] = useState(false);
  
  const [votes, setVotes] = useState<number[]>([]);
  const [votedOutIndex, setVotedOutIndex] = useState<number | null>(null);
  const [votedOutPlayer, setVotedOutPlayer] = useState('');

  const addPlayer = () => {
    if (newPlayerName.trim()) {
      setPlayers([...players, newPlayerName.trim()]);
      setNewPlayerName('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addPlayer();
    }
  };

  const removePlayer = (index: number) => {
    setPlayers(players.filter((_, i) => i !== index));
  };

  const startGame = () => {
    if (players.length < 3) return;
    setImposterIndex(Math.floor(Math.random() * players.length));
    const words = wordCategories[selectedCategory];
    setCurrentWord(words[Math.floor(Math.random() * words.length)]);
    setCurrentPlayerIndex(0);
    setIsRoleVisible(false);
    setGamePhase('passReveal');
  };

  const nextPlayerReveal = () => {
    setIsRoleVisible(false);
    if (currentPlayerIndex < players.length - 1) {
      setCurrentPlayerIndex(currentPlayerIndex + 1);
    } else {
      setGamePhase('discussion');
    }
  };

  const startVoting = () => {
    setCurrentPlayerIndex(0);
    setIsRoleVisible(false);
    setVotes(new Array(players.length).fill(0));
    setGamePhase('voting');
  };

  const castVote = (votedForIndex: number) => {
    const newVotes = [...votes];
    newVotes[votedForIndex]++;
    setVotes(newVotes);
    setIsRoleVisible(false);

    if (currentPlayerIndex < players.length - 1) {
      setCurrentPlayerIndex(currentPlayerIndex + 1);
    } else {
      resolveGame(newVotes);
    }
  };

  const resolveGame = (finalVotes: number[]) => {
    let maxVotes = 0;
    let playerWithMostVotes = -1;

    for (let i = 0; i < finalVotes.length; i++) {
      if (finalVotes[i] > maxVotes) {
        maxVotes = finalVotes[i];
        playerWithMostVotes = i;
      }
    }

    setVotedOutIndex(playerWithMostVotes);
    setVotedOutPlayer(players[playerWithMostVotes]);
    setGamePhase('resolution');
  };

  const resetGame = () => {
    setGamePhase('setup');
    setCurrentPlayerIndex(0);
    setIsRoleVisible(false);
    setVotes([]);
  };

  // Helper styles replacing Vue scoped CSS, mapping to Tailwind utility classes
  const btnBase = "px-6 py-3 text-lg sm:text-xl font-black uppercase tracking-tighter cursor-pointer border-4 border-black rounded-3xl transition-all active:translate-y-1 active:shadow-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed disabled:shadow-none disabled:active:translate-y-0 text-center";
  const btnPrimary = `${btnBase} bg-white hover:bg-gray-100 text-black`;
  const btnSuccess = `${btnBase} bg-green-400 hover:bg-green-500 text-black w-full`;
  const btnDanger = `${btnBase} bg-red-600 hover:bg-red-700 text-white`;
  const btnDangerSmall = `px-3 py-1 font-black cursor-pointer border-2 border-black rounded-xl bg-red-600 hover:bg-red-700 text-white transition-all active:translate-y-1 active:shadow-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-sm`;
  const btnVote = `${btnBase} bg-white hover:bg-pink-100 text-black w-full flex flex-col items-center justify-center`;

  return (
    <div className="w-full min-h-screen bg-yellow-400 font-sans flex flex-col items-center p-4 sm:p-8 overflow-y-auto">
      <div className="w-full max-w-lg flex flex-col gap-6 text-center pb-12">
        <div className="flex flex-col items-center">
          <span className="bg-black text-white px-3 py-1 rounded-full text-xs font-black tracking-widest uppercase mb-2">
            PARTY GAME
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-black leading-none uppercase tracking-tighter mix-blend-color-burn">
            Imposter <span className="text-red-600 italic">Hunt</span>
          </h1>
        </div>

      {/* PHASE 1: SETUP */}
      {gamePhase === 'setup' && (
        <div className="bg-white p-6 sm:p-8 rounded-[40px] border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex flex-col relative mt-2">
          <div className="absolute -top-4 -right-2 bg-blue-400 border-4 border-black text-black px-4 py-1 rounded-full font-black text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform rotate-6">
            SETUP
          </div>

          <h2 className="text-2xl font-black mb-4 text-black uppercase tracking-tight text-left">Select Category</h2>
          <div className="grid grid-cols-2 gap-3 mb-8">
            {Object.keys(wordCategories).map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-3 font-black uppercase text-xs sm:text-sm border-4 border-black rounded-2xl transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none ${selectedCategory === cat ? 'bg-pink-400 text-black' : 'bg-white text-black hover:bg-gray-100'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <hr className="border-2 border-black mb-8 border-dashed opacity-20" />

          <h2 className="text-2xl font-black mb-6 text-black uppercase tracking-tight text-left">Add Players</h2>
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <input 
              value={newPlayerName}
              onChange={(e) => setNewPlayerName(e.target.value)}
              onKeyUp={handleKeyPress}
              placeholder="ENTER PLAYER NAME..." 
              className="flex-1 p-4 border-4 border-black rounded-2xl text-lg font-bold focus:outline-none focus:ring-4 focus:ring-yellow-400 transition-all uppercase placeholder-gray-400 uppercase"
            />
            <button onClick={addPlayer} className={`${btnPrimary} sm:w-auto w-full py-4 rounded-2xl`}>Add</button>
          </div>

          <ul className="list-none p-0 mb-6 flex flex-col gap-3 text-left">
            {players.map((player, index) => (
              <li key={index} className="bg-gray-100 border-4 border-black p-4 flex justify-between items-center rounded-2xl font-black text-black text-xl uppercase">
                {player}
                <button onClick={() => removePlayer(index)} className={btnDangerSmall}>X</button>
              </li>
            ))}
          </ul>

          <div className="mt-2">
            {players.length < 3 ? (
              <div className="p-4 bg-orange-100 text-black border-4 border-black rounded-2xl font-black uppercase text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                Need at least 3 players ({players.length}/3)
              </div>
            ) : (
              <button onClick={startGame} className={btnSuccess}>
                Start Game
              </button>
            )}
          </div>
        </div>
      )}

      {/* PHASE 2: PASS & REVEAL */}
      {gamePhase === 'passReveal' && (
        <div className="bg-white p-6 sm:p-8 rounded-[40px] border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex flex-col relative mt-2">
          {!isRoleVisible ? (
            <div className="py-6 flex flex-col items-center">
              <h2 className="text-xl font-black text-black uppercase tracking-widest mb-4 opacity-70">Pass the device to</h2>
              <h1 className="text-red-500 text-5xl sm:text-6xl my-6 font-black uppercase tracking-tighter truncate w-full px-2" style={{ textShadow: '2px 2px 0px #000' }}>
                {players[currentPlayerIndex]}
              </h1>
              <p className="text-black font-bold mb-8 italic uppercase">Make sure no one else is looking!</p>
              <button onClick={() => setIsRoleVisible(true)} className={`${btnPrimary} w-full`}>
                I am {players[currentPlayerIndex]}
              </button>
            </div>
          ) : (
            <div className="animate-in fade-in zoom-in-95 duration-200">
              <h2 className="text-2xl font-black text-black mb-4 uppercase tracking-tighter text-left flex items-center gap-2">
                <span className="text-3xl">🎯</span> YOUR ROLE
              </h2>
              {currentPlayerIndex === imposterIndex ? (
                <div className="p-6 rounded-3xl my-6 border-4 bg-red-100 text-black border-black shadow-[8px_8px_0px_0px_rgba(255,71,87,1)] transform rotate-1">
                  <h3 className="text-3xl font-black mb-3 uppercase tracking-tighter text-red-600">🔪 Imposter</h3>
                  <p className="font-bold text-lg">Try to blend in. You do not know the secret word.</p>
                </div>
              ) : (
                <div className="p-6 rounded-3xl my-6 border-4 bg-green-100 text-black border-black shadow-[8px_8px_0px_0px_rgba(74,222,128,1)] transform -rotate-1">
                  <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter text-green-600">🧑‍🚀 Crewmate</h3>
                  <p className="mb-2 font-bold opacity-70 uppercase tracking-widest text-sm">The secret word is</p>
                  <div className="bg-white border-4 border-black p-4 rounded-2xl transform rotate-2 mt-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] inline-block">
                    <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tighter">{currentWord}</h2>
                  </div>
                </div>
              )}
              
              <button onClick={nextPlayerReveal} className={`${btnDanger} w-full mt-6`}>
                Hide & Continue
              </button>
            </div>
          )}
        </div>
      )}

      {/* PHASE 3: DISCUSSION */}
      {gamePhase === 'discussion' && (
        <div className="bg-white p-6 sm:p-8 rounded-[40px] border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex flex-col relative mt-2 text-left">
           <div className="absolute -top-4 -right-2 bg-pink-400 border-4 border-black text-black px-4 py-1 rounded-full font-black text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform rotate-6">
            PHASE 03
          </div>
          <h2 className="text-3xl font-black mb-4 text-black uppercase tracking-tighter flex items-center gap-2">
            <span className="text-3xl">💬</span> DISCUSSION
          </h2>
          <p className="text-black font-bold leading-tight text-lg mb-4 opacity-80">
            Ask questions about the secret word. Find out who doesn&apos;t know it!
          </p>
          <div className="text-3xl sm:text-4xl p-8 sm:p-12 bg-black text-yellow-400 rounded-3xl my-6 font-black tracking-widest uppercase text-center border-4 border-black shadow-[8px_8px_0px_0px_rgba(255,255,255,0.5)] transform -rotate-1">
            DISCUSS!
          </div>
          <button onClick={startVoting} className={`${btnDanger} w-full`}>
            Stop & Vote Now
          </button>
        </div>
      )}

      {/* PHASE 4: SECRET VOTING */}
      {gamePhase === 'voting' && (
        <div className="bg-black p-6 sm:p-8 rounded-[40px] border-4 border-black shadow-[12px_12px_0px_0px_rgba(255,71,87,1)] flex flex-col relative mt-2 text-white">
          {!isRoleVisible ? (
            <div className="py-8 flex flex-col items-center">
              <h2 className="text-xl font-black uppercase tracking-widest mb-4 opacity-70">Pass to vote secretly</h2>
              <h1 className="text-yellow-400 text-5xl sm:text-6xl my-6 font-black uppercase tracking-tighter truncate w-full px-2">
                {players[currentPlayerIndex]}
              </h1>
              <button onClick={() => setIsRoleVisible(true)} className={`${btnPrimary} w-full mt-4`}>
                Ready to vote
              </button>
            </div>
          ) : (
            <div className="animate-in fade-in zoom-in-95 duration-200 flex flex-col items-center w-full">
              <h2 className="text-3xl font-black mb-8 text-white uppercase tracking-tighter text-center">Who is the Imposter?</h2>
              <div className="grid grid-cols-1 gap-4 w-full">
                {players.map((player, index) => (
                  <button 
                    key={index}
                    onClick={() => castVote(index)}
                    className={btnVote}
                    disabled={index === currentPlayerIndex}
                  >
                    <span className="text-2xl">{player}</span>
                    {index === currentPlayerIndex && <span className="text-[10px] font-bold text-blue-600 bg-blue-100 px-2 py-0.5 rounded-full mt-1 uppercase border border-blue-600">You</span>}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* PHASE 5: RESOLUTION */}
      {gamePhase === 'resolution' && (
        <div className="bg-white p-6 sm:p-8 rounded-[40px] border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex flex-col relative mt-2 animate-in slide-in-from-bottom-4 duration-500">
          <h2 className="text-4xl font-black mb-6 text-black uppercase tracking-tighter text-center border-b-4 border-black pb-4">Game Over!</h2>
          
          <div className="p-6 bg-yellow-100 rounded-3xl text-lg mb-8 border-4 border-black text-left shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
            <p className="mb-4 text-black font-bold uppercase text-sm">The group voted out: <strong className="text-red-500 block text-3xl mt-1 tracking-tighter bg-white border-2 border-black inline-block px-3 py-1 mt-2 transform rotate-2">{votedOutPlayer}</strong></p>
            <p className="text-black font-bold uppercase text-sm">The actual Imposter was: <strong className="text-green-600 block text-3xl mt-1 tracking-tighter bg-white border-2 border-black inline-block px-3 py-1 mt-2 transform -rotate-2">{players[imposterIndex!]}</strong></p>
          </div>

          <div className="py-6 text-center">
            {votedOutIndex === imposterIndex ? (
              <h1 className="text-5xl font-black text-green-500 uppercase tracking-tighter" style={{ textShadow: '3px 3px 0px #000' }}>
                Crewmates Win!
              </h1>
            ) : (
              <h1 className="text-5xl font-black text-red-500 uppercase tracking-tighter" style={{ textShadow: '3px 3px 0px #000' }}>
                Imposter Wins!
              </h1>
            )}
          </div>

          <div className="mt-8 mb-4 border-t-4 border-black pt-6 flex flex-col items-center">
            <p className="text-sm font-black uppercase tracking-widest mb-2">The secret word was</p>
            <strong className="text-black bg-white border-4 border-black px-4 py-2 rounded-2xl text-3xl uppercase tracking-tighter shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              {currentWord}
            </strong>
          </div>

          <button onClick={resetGame} className={`${btnPrimary} w-full mt-6`}>Play Again</button>
        </div>
      )}

      </div>
    </div>
  );
}
