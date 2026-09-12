import React, { useState, useEffect } from 'react';
import { 
  X, 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Award, 
  RotateCcw, 
  HelpCircle, 
  Flag, 
  Bookmark, 
  Check, 
  ChevronRight,
  Sparkles,
  AlertCircle,
  BarChart2
} from 'lucide-react';

const SUBJECT_DRILL_BANKS = {
  "maths-5": [
    {
      id: 1,
      question: "What is the perimeter of a rectangular playground with a length of 24 meters and a breadth of 16 meters?",
      options: ["80 meters", "40 meters", "384 sq meters", "48 meters"],
      correct: 0,
      hint: "Perimeter of rectangle = 2 × (Length + Breadth)",
      explanation: "Perimeter = 2 × (24m + 16m) = 2 × 40m = 80 meters."
    },
    {
      id: 2,
      question: "Which of the following Roman numerals correctly represents the number 89?",
      options: ["LXXXIX", "XCVIII", "LXXXXIX", "XCIX"],
      correct: 0,
      hint: "80 = LXXX, and 9 = IX",
      explanation: "80 is written as LXXX and 9 is IX, combining them gives LXXXIX."
    },
    {
      id: 3,
      question: "If a water tank has a capacity of 4.5 liters, how many milliliters is that equal to?",
      options: ["450 ml", "4,500 ml", "45,000 ml", "45 ml"],
      correct: 1,
      hint: "1 liter = 1,000 milliliters",
      explanation: "4.5 × 1,000 = 4,500 milliliters."
    },
    {
      id: 4,
      question: "Which fraction is equivalent to 3/5?",
      options: ["6/10", "5/3", "9/20", "12/25"],
      correct: 0,
      hint: "Multiply numerator and denominator by the same integer",
      explanation: "3/5 × 2/2 = 6/10."
    },
    {
      id: 5,
      question: "A train leaves at 09:35 AM and arrives at its destination at 01:20 PM. What is the total travel duration?",
      options: ["3 hours 45 minutes", "4 hours 15 minutes", "3 hours 15 minutes", "4 hours 45 minutes"],
      correct: 0,
      hint: "From 09:35 to 12:00 is 2h 25m, plus 1h 20m",
      explanation: "09:35 to 12:35 is 3h. 12:35 to 01:20 is 45m. Total duration is 3 hours 45 minutes."
    }
  ],
  "science-5": [
    {
      id: 1,
      question: "Which simple machine consists of a rigid bar that turns around a fixed point called a fulcrum?",
      options: ["Lever", "Pulley", "Inclined plane", "Screw"],
      correct: 0,
      hint: "Scissors and see-saws are examples of this machine.",
      explanation: "A lever rotates around a pivot called the fulcrum to amplify applied force."
    },
    {
      id: 2,
      question: "Seeds of cocklebur and burdock have hooks and spines. How do they disperse?",
      options: ["By wind currents", "By clinging to animal fur and clothes", "By bursting open automatically", "By floating on water"],
      correct: 1,
      hint: "Think about how burrs stick to dog fur or your socks during a walk in the fields.",
      explanation: "Their hook-like bristles cling tightly to passing animals or clothing to travel far away."
    },
    {
      id: 3,
      question: "Which part of the human skeletal system specifically protects the heart and lungs?",
      options: ["The Skull", "The Ribcage", "The Backbone (Spine)", "The Pelvis"],
      correct: 1,
      hint: "A cage of 12 pairs of curved bones in your chest.",
      explanation: "The 12 pairs of ribs form a protective cage around the vital heart and lung tissues."
    },
    {
      id: 4,
      question: "Which planet in our solar system is famously known as the 'Red Planet' due to iron oxide on its surface?",
      options: ["Venus", "Jupiter", "Mars", "Mercury"],
      correct: 2,
      hint: "It is the 4th planet from the Sun.",
      explanation: "Mars is called the Red Planet because reddish iron minerals coat its rocky soil."
    },
    {
      id: 5,
      question: "Which deficiency disease is caused by lack of Vitamin D in a growing child's diet?",
      options: ["Scurvy", "Rickets", "Beriberi", "Goitre"],
      correct: 1,
      hint: "It leads to weak, soft, and bent leg bones.",
      explanation: "Lack of Vitamin D leads to poor calcium absorption, causing Rickets in children."
    }
  ],
  "english-5": [
    {
      id: 1,
      question: "Select the sentence where the apostrophe is used correctly to show possession:",
      options: [
        "The boys' coats were hung in the classroom.",
        "The boy's coats' were hung in the classroom.",
        "The boys coats were hung in the classroom.",
        "The boy's coats were hung in the classroom's."
      ],
      correct: 0,
      hint: "Plural nouns ending in -s take an apostrophe at the very end.",
      explanation: "For plural boys possessing coats, the apostrophe goes after the s: boys'."
    },
    {
      id: 2,
      question: "Identify the abstract noun in: 'Her kindness brought immense joy to the whole family.'",
      options: ["family", "kindness & joy", "brought", "whole"],
      correct: 1,
      hint: "Abstract nouns name emotions, virtues, or qualities that cannot be physically touched.",
      explanation: "'Kindness' (quality) and 'joy' (emotion) are abstract nouns."
    },
    {
      id: 3,
      question: "Choose the correct past continuous verb: 'The birds _____ cheerfully across the meadow.'",
      options: ["was singing", "were singing", "singed", "are singing"],
      correct: 1,
      hint: "Plural subject 'birds' in past continuous needs 'were'.",
      explanation: "Plural subject takes 'were' + present participle: 'were singing'."
    },
    {
      id: 4,
      question: "What does the idiom 'once in a blue moon' mean?",
      options: ["Very frequently", "Something that happens very rarely", "During night time only", "When the sky is completely clear"],
      correct: 1,
      hint: "A blue moon is an uncommon astronomical event.",
      explanation: "'Once in a blue moon' is a figure of speech meaning very rarely."
    },
    {
      id: 5,
      question: "Select the correct antonym for the word 'ANCIENT':",
      options: ["Historic", "Antique", "Modern", "Elderly"],
      correct: 2,
      hint: "The opposite of very old in historical time.",
      explanation: "'Modern' represents contemporary times, the opposite of ancient."
    }
  ],
  "sst-5": [
    {
      id: 1,
      question: "Which continent is the largest by both geographical land area and human population?",
      options: ["Africa", "North America", "Asia", "Europe"],
      correct: 2,
      hint: "It contains countries like India, China, and Japan.",
      explanation: "Asia covers about 30% of Earth's land area and holds 60% of world population."
    },
    {
      id: 2,
      question: "The imaginary horizontal line running around the center of the Earth at 0° latitude is the:",
      options: ["Prime Meridian", "Equator", "Tropic of Cancer", "Antarctic Circle"],
      correct: 1,
      hint: "It divides the Earth into Northern and Southern hemispheres.",
      explanation: "The Equator is the 0° line of latitude."
    },
    {
      id: 3,
      question: "On a geographical map, what color is universally used to depict mountain ranges and highland plateaus?",
      options: ["Blue", "Green", "Brown", "Yellow"],
      correct: 2,
      hint: "Blue is for water, green is for lowlands, brown is for highlands.",
      explanation: "Standard cartographic conventions use shades of brown for mountains and hills."
    },
    {
      id: 4,
      question: "In which year did the Constitution of India formally come into force, celebrated as Republic Day?",
      options: ["1947", "1950", "1952", "1948"],
      correct: 1,
      hint: "Celebrated on 26th January every year.",
      explanation: "The Constitution came into legal effect on January 26, 1950."
    },
    {
      id: 5,
      question: "Which of the following is NOT one of the three principal organs of the Indian government?",
      options: ["Legislature", "Executive", "Judiciary", "Commercial Banks"],
      correct: 3,
      hint: "The 3 democratic organs make laws, execute laws, and interpret laws.",
      explanation: "The 3 branches are Legislature, Executive, and Judiciary. Commercial banks are financial institutions."
    }
  ]
};

export default function FullScreenDrillModal({ subject, chapter, session, onClose }) {
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({}); // { [qId]: optionIndex }
  const [markedForReview, setMarkedForReview] = useState({});
  const [showHint, setShowHint] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(600); // 10 minutes timer
  const [isFinished, setIsFinished] = useState(false);

  const questions = SUBJECT_DRILL_BANKS[subject?.id] || SUBJECT_DRILL_BANKS["maths-5"];
  const currentQ = questions[currentQIndex] || questions[0];

  // Timer countdown
  useEffect(() => {
    if (isFinished) return;
    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsFinished(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isFinished]);

  const formatTime = (secs) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins < 10 ? '0' : ''}${mins}:${s < 10 ? '0' : ''}${s}`;
  };

  const handleSelectOption = (optIdx) => {
    setUserAnswers((prev) => ({
      ...prev,
      [currentQ.id]: optIdx
    }));
  };

  const handleNext = () => {
    setShowHint(false);
    if (currentQIndex + 1 < questions.length) {
      setCurrentQIndex(currentQIndex + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handlePrev = () => {
    setShowHint(false);
    if (currentQIndex > 0) {
      setCurrentQIndex(currentQIndex - 1);
    }
  };

  const handleClearAnswer = () => {
    setUserAnswers((prev) => {
      const copy = { ...prev };
      delete copy[currentQ.id];
      return copy;
    });
  };

  const handleToggleReview = () => {
    setMarkedForReview((prev) => ({
      ...prev,
      [currentQ.id]: !prev[currentQ.id]
    }));
  };

  // Calculate score
  let correctCount = 0;
  questions.forEach((q) => {
    if (userAnswers[q.id] === q.correct) {
      correctCount += 1;
    }
  });

  const accuracyPercent = Math.round((correctCount / questions.length) * 100);

  return (
    <div className="fixed inset-0 z-[100] bg-[#F6F8FC] flex flex-col overflow-hidden animate-in fade-in duration-200">
      {/* Background Soft Lighting - Educational Teal */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none -z-10">
        <div className="absolute top-6 left-1/4 w-[500px] h-[500px] bg-[#CCFBF1]/70 rounded-full blur-[120px]" />
        <div className="absolute top-20 right-1/4 w-[450px] h-[450px] bg-teal-200/40 rounded-full blur-[140px]" />
      </div>

      {/* TOP HEADER BAR */}
      <header className="h-16 px-4 sm:px-8 border-b border-teal-100/90 bg-white/85 backdrop-blur-xl flex items-center justify-between shadow-xs">
        {/* Left: Back/Exit & Title */}
        <div className="flex items-center gap-3">
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            title="Exit Drill"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-[#0D9488] uppercase tracking-wider">
                {subject?.title}
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-xs font-semibold text-slate-700">
                {chapter?.title}
              </span>
            </div>
            <div className="text-sm font-bold text-slate-900">
              {session?.title || "Practice Drill"}
            </div>
          </div>
        </div>

        {/* Center: Live Timer */}
        <div className="hidden sm:flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#CCFBF1] border border-teal-200 text-[#0D9488] font-mono text-sm font-bold shadow-xs">
          <Clock className="w-4 h-4" />
          <span>{formatTime(secondsLeft)}</span>
        </div>

        {/* Right: Progress Pill & End Drill Button */}
        <div className="flex items-center gap-3">
          <div className="text-xs font-semibold text-slate-600 hidden sm:block">
            Answered: <strong className="text-slate-900">{Object.keys(userAnswers).length}/{questions.length}</strong>
          </div>
          <button
            onClick={() => setIsFinished(true)}
            className="px-4 py-1.5 rounded-xl border border-teal-200 bg-white hover:bg-teal-50 text-xs font-bold text-[#0D9488] transition-colors"
          >
            Finish Drill
          </button>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-800 hover:bg-slate-100"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* MAIN BODY */}
      <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-8 flex flex-col justify-between max-w-4xl mx-auto w-full">
        {isFinished ? (
          /* RESULT SUMMARY SCREEN */
          <div className="my-auto py-8 text-center animate-in zoom-in-95 duration-200">
            <div className="w-20 h-20 rounded-3xl bg-[#CCFBF1] border border-teal-200 flex items-center justify-center text-[#0D9488] mx-auto mb-5 shadow-sm">
              <Award className="w-10 h-10" />
            </div>

            <span className="text-xs font-bold uppercase tracking-wider text-[#0D9488] bg-[#CCFBF1] px-3 py-1 rounded-full border border-teal-200">
              Drill Completed
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 mb-2">
              Great Effort, Junior Scholar!
            </h2>
            <p className="text-sm text-slate-600 max-w-md mx-auto mb-8">
              Here is your performance breakdown for <strong>{chapter?.title}</strong>. Review your solutions below.
            </p>

            {/* Scorecard Grid */}
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mb-10">
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="text-xs text-slate-500 font-medium">Score</div>
                <div className="text-2xl font-bold text-slate-900 mt-1">
                  {correctCount} / {questions.length}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="text-xs text-slate-500 font-medium">Accuracy</div>
                <div className="text-2xl font-bold text-[#0D9488] mt-1">
                  {accuracyPercent}%
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="text-xs text-slate-500 font-medium">Time Used</div>
                <div className="text-2xl font-bold text-slate-900 mt-1">
                  {formatTime(600 - secondsLeft)}
                </div>
              </div>
            </div>

            {/* Question by question answers review */}
            <div className="text-left max-w-2xl mx-auto space-y-4 mb-10">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 mb-2">
                Detailed Solutions & Explanations:
              </h3>
              {questions.map((q, idx) => {
                const ans = userAnswers[q.id];
                const isCorrect = ans === q.correct;
                const answered = ans !== undefined;

                return (
                  <div
                    key={q.id}
                    className={`p-4 rounded-2xl border transition-all ${
                      isCorrect
                        ? 'bg-emerald-50/70 border-emerald-200'
                        : answered
                        ? 'bg-rose-50/70 border-rose-200'
                        : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <span className="text-xs font-bold text-slate-800">
                        Q{idx + 1}. {q.question}
                      </span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full flex-shrink-0 ${
                        isCorrect
                          ? 'bg-emerald-200 text-emerald-800'
                          : answered
                          ? 'bg-rose-200 text-rose-800'
                          : 'bg-slate-200 text-slate-600'
                      }`}>
                        {isCorrect ? 'Correct ✓' : answered ? 'Incorrect ✗' : 'Skipped'}
                      </span>
                    </div>

                    <div className="text-xs text-slate-600 mt-1">
                      <span className="font-semibold text-slate-700">Correct Answer:</span> {q.options[q.correct]}
                    </div>
                    <div className="text-xs text-slate-600 mt-0.5">
                      <span className="font-semibold text-slate-700">Explanation:</span> {q.explanation}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Actions */}
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => {
                  setUserAnswers({});
                  setMarkedForReview({});
                  setCurrentQIndex(0);
                  setSecondsLeft(600);
                  setIsFinished(false);
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-xs sm:text-sm font-semibold text-slate-700 shadow-xs"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Retake Drill</span>
              </button>

              <button
                onClick={onClose}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-[#0D9488] hover:bg-teal-700 text-white text-xs sm:text-sm font-semibold shadow-md shadow-teal-700/20"
              >
                <span>Return to Practice Hub</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          /* ACTIVE QUESTION FULL SCREEN VIEW */
          <div className="flex flex-col justify-between flex-1 py-4">
            <div>
              {/* Question Tracker & Tag */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-lg bg-[#CCFBF1] text-[#0D9488] font-bold text-xs">
                    Question {currentQIndex + 1} of {questions.length}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    Single Choice
                  </span>
                </div>

                {markedForReview[currentQ.id] && (
                  <span className="flex items-center gap-1 text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full">
                    <Flag className="w-3 h-3 fill-amber-500 text-amber-500" />
                    <span>Marked for review</span>
                  </span>
                )}
              </div>

              {/* Progress Bar */}
              <div className="w-full h-1.5 bg-slate-200/80 rounded-full overflow-hidden mb-8">
                <div
                  className="h-full bg-[#0D9488] rounded-full transition-all duration-300"
                  style={{ width: `${((currentQIndex + 1) / questions.length) * 100}%` }}
                />
              </div>

              {/* Large Question Text */}
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug mb-8">
                {currentQ.question}
              </h2>

              {/* Options List with Premium Glass styling */}
              <div className="space-y-3.5 mb-6">
                {currentQ.options.map((option, idx) => {
                  const isSelected = userAnswers[currentQ.id] === idx;

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-150 flex items-center justify-between group ${
                        isSelected
                          ? 'bg-[#CCFBF1]/60 border-[#0D9488] shadow-sm text-[#0D9488] ring-1 ring-[#0D9488]'
                          : 'bg-white/90 hover:bg-white border-slate-200/90 text-slate-800 shadow-xs hover:border-teal-300'
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <span className={`w-8 h-8 rounded-xl text-xs font-bold flex items-center justify-center transition-colors ${
                          isSelected
                            ? 'bg-[#0D9488] text-white'
                            : 'bg-slate-100 group-hover:bg-teal-50 text-slate-700 group-hover:text-[#0D9488]'
                        }`}>
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span className="text-sm sm:text-base font-medium">
                          {option}
                        </span>
                      </div>

                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'border-[#0D9488] bg-[#0D9488] text-white'
                          : 'border-slate-300 group-hover:border-teal-400'
                      }`}>
                        {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Expandable Hint helper */}
              <div className="mt-4">
                <button
                  onClick={() => setShowHint(!showHint)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-[#0D9488] transition-colors"
                >
                  <HelpCircle className="w-4 h-4" />
                  <span>{showHint ? "Hide Hint" : "Need a Hint?"}</span>
                </button>
                {showHint && (
                  <div className="mt-2 p-3.5 rounded-xl bg-amber-50/80 border border-amber-200 text-xs text-amber-900 animate-in fade-in">
                    <strong>💡 Hint:</strong> {currentQ.hint}
                  </div>
                )}
              </div>
            </div>

            {/* Quick Question Jump Strip */}
            <div className="pt-8 mt-8 border-t border-slate-200/70">
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleToggleReview}
                    className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border transition-colors ${
                      markedForReview[currentQ.id]
                        ? 'bg-amber-100 border-amber-300 text-amber-800'
                        : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <Flag className="w-3.5 h-3.5" />
                    <span>{markedForReview[currentQ.id] ? "Marked" : "Review Later"}</span>
                  </button>

                  {userAnswers[currentQ.id] !== undefined && (
                    <button
                      onClick={handleClearAnswer}
                      className="px-3 py-2 rounded-xl text-xs font-semibold text-slate-500 hover:text-rose-600 transition-colors"
                    >
                      Clear Selection
                    </button>
                  )}
                </div>

                {/* Question Numbers Pills */}
                <div className="flex items-center gap-1.5 overflow-x-auto py-1">
                  {questions.map((q, idx) => {
                    const isAnswered = userAnswers[q.id] !== undefined;
                    const isCurrent = idx === currentQIndex;
                    const isMarked = markedForReview[q.id];

                    return (
                      <button
                        key={q.id}
                        onClick={() => {
                          setShowHint(false);
                          setCurrentQIndex(idx);
                        }}
                        className={`w-7 h-7 rounded-lg text-xs font-bold transition-all ${
                          isCurrent
                            ? 'ring-2 ring-[#0D9488] bg-white text-[#0D9488] shadow-sm'
                            : isAnswered
                            ? 'bg-[#0D9488] text-white'
                            : isMarked
                            ? 'bg-amber-400 text-white'
                            : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                        }`}
                      >
                        {idx + 1}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Prev and Next Action Buttons */}
              <div className="flex items-center justify-between pt-2">
                <button
                  disabled={currentQIndex === 0}
                  onClick={handlePrev}
                  className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    currentQIndex > 0
                      ? 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 shadow-xs'
                      : 'opacity-40 text-slate-400 cursor-not-allowed border border-transparent'
                  }`}
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>

                <button
                  onClick={handleNext}
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-[#0D9488] hover:bg-teal-700 text-white text-xs sm:text-sm font-bold shadow-md shadow-teal-700/20 hover:shadow-lg transition-all active:scale-[0.98]"
                >
                  <span>{currentQIndex + 1 < questions.length ? "Next Question" : "Submit Drill"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
