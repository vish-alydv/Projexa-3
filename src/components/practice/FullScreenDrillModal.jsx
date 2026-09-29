import React, { useState, useEffect } from 'react';
import { 
  X, 
  ArrowLeft, 
  ArrowRight, 
  Clock, 
  Award, 
  RotateCcw, 
  HelpCircle, 
  Flag, 
  Check, 
  ChevronRight
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
      question: "Which part of the human skeletal system specifically protects the heart and lungs?",
      options: ["The Skull", "The Ribcage", "The Backbone (Spine)", "The Pelvis"],
      correct: 1,
      hint: "A cage of 12 pairs of curved bones in your chest.",
      explanation: "The 12 pairs of ribs form a protective cage around the vital heart and lung tissues."
    },
    {
      id: 3,
      question: "Which planet in our solar system is famously known as the 'Red Planet'?",
      options: ["Venus", "Jupiter", "Mars", "Mercury"],
      correct: 2,
      hint: "It is the 4th planet from the Sun.",
      explanation: "Mars is called the Red Planet because reddish iron minerals coat its soil."
    }
  ],
  "english-5": [
    {
      id: 1,
      question: "Select the correct antonym for the word 'ANCIENT':",
      options: ["Historic", "Antique", "Modern", "Elderly"],
      correct: 2,
      hint: "The opposite of very old in historical time.",
      explanation: "'Modern' represents contemporary times, the opposite of ancient."
    },
    {
      id: 2,
      question: "What does the idiom 'once in a blue moon' mean?",
      options: ["Very frequently", "Something that happens very rarely", "During night time only", "When the sky is blue"],
      correct: 1,
      hint: "A blue moon is an uncommon astronomical event.",
      explanation: "'Once in a blue moon' means something that happens very rarely."
    }
  ],
  "english-grammar-5": [
    {
      id: 1,
      question: "Choose the correct past continuous verb: 'The birds _____ cheerfully across the meadow.'",
      options: ["was singing", "were singing", "singed", "are singing"],
      correct: 1,
      hint: "Plural subject 'birds' in past continuous needs 'were'.",
      explanation: "Plural subject takes 'were' + present participle: 'were singing'."
    },
    {
      id: 2,
      question: "Identify the abstract noun in: 'Her kindness brought immense joy to the whole family.'",
      options: ["family", "kindness & joy", "brought", "whole"],
      correct: 1,
      hint: "Abstract nouns name emotions or virtues.",
      explanation: "'Kindness' (quality) and 'joy' (emotion) are abstract nouns."
    }
  ],
  "hindi-literature-5": [
    {
      id: 1,
      question: "तिब्बती लोककथा 'राख की रस्सी' में मंत्री के बेटे की समस्या का समाधान किसने किया?",
      options: ["राजा ने", "एक समझदार लड़की ने", "पड़ोसी ने", "सिपाही ने"],
      correct: 1,
      hint: "मंत्री का बेटा चतुर लड़की के पास सहायता मांगने गया था।",
      explanation: "एक बुद्धिमान लड़की ने राख की रस्सी बनाकर मंत्री के बेटे की मुश्किल हल की।"
    },
    {
      id: 2,
      question: "कविता 'खिलौनेवाला' की प्रसिद्ध रचयिता कौन हैं?",
      options: ["महादेवी वर्मा", "सुभद्रा कुमारी चौहान", "सरोजिनी नायडू", "अमृता प्रीतम"],
      correct: 1,
      hint: "इन्होंने 'झाँसी की रानी' प्रसिद्ध कविता भी लिखी है।",
      explanation: "'खिलौनेवाला' कविता सुभद्रा कुमारी चौहान द्वारा रचित है।"
    }
  ],
  "hindi-grammar-5": [
    {
      id: 1,
      question: "हिन्दी भाषा की लिपि कौन-सी है?",
      options: ["रोमन", "देवनागरी", "गुरमुखी", "फ़ारसी"],
      correct: 1,
      hint: "संस्कृत और मराठी भाषा भी इसी लिपि में लिखी जाती हैं।",
      explanation: "हिन्दी भाषा देवनागरी लिपि में लिखी जाती है।"
    },
    {
      id: 2,
      question: "निम्न में से कौन-सा शब्द 'भाववाचक संज्ञा' का उदाहरण है?",
      options: ["मिठास", "राम", "हिमालय", "पुस्तक"],
      correct: 0,
      hint: "जिसे देखा या छुआ न जा सके, केवल महसूस किया जा सके।",
      explanation: "'मिठास' एक गुण का नाम है, जो भाववाचक संज्ञा है।"
    }
  ],
  "general-knowledge-5": [
    {
      id: 1,
      question: "Which is the national aquatic animal of India?",
      options: ["Gangetic River Dolphin", "Blue Whale", "Great White Shark", "Sea Turtle"],
      correct: 0,
      hint: "It lives in the sacred Ganga river.",
      explanation: "The Gangetic River Dolphin is official national aquatic animal of India."
    },
    {
      id: 2,
      question: "Who is known as the 'Father of Indian Space Program'?",
      options: ["Dr. Homi Bhabha", "Dr. Vikram Sarabhai", "Dr. APJ Abdul Kalam", "Satish Dhawan"],
      correct: 1,
      hint: "ISRO owes its early founding vision to him.",
      explanation: "Dr. Vikram Sarabhai pioneered space research in India."
    }
  ],
  "sst-5": [
    {
      id: 1,
      question: "Which continent is the largest by both land area and human population?",
      options: ["Africa", "North America", "Asia", "Europe"],
      correct: 2,
      hint: "It contains countries like India and China.",
      explanation: "Asia covers 30% of Earth's land area and holds 60% of population."
    },
    {
      id: 2,
      question: "In which year did the Constitution of India come into force?",
      options: ["1947", "1950", "1952", "1948"],
      correct: 1,
      hint: "Celebrated on 26th January as Republic Day.",
      explanation: "The Constitution came into effect on January 26, 1950."
    }
  ]
};

export default function FullScreenDrillModal({ subject, chapter, session, drillTitle, questions: customQuestions, onClose }) {
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [markedForReview, setMarkedForReview] = useState({});
  const [showHint, setShowHint] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(600);
  const [isFinished, setIsFinished] = useState(false);

  const defaultQuestions = SUBJECT_DRILL_BANKS[subject?.id] || SUBJECT_DRILL_BANKS["maths-5"];
  const questions = customQuestions || defaultQuestions;
  const currentQ = questions[currentQIndex] || questions[0];

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
      [currentQ.id || currentQIndex]: optIdx
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

  // Calculate score
  let correctCount = 0;
  questions.forEach((q, idx) => {
    const qKey = q.id || idx;
    const correctIdx = q.correct !== undefined ? q.correct : q.correctOptionIndex;
    if (userAnswers[qKey] === correctIdx) {
      correctCount += 1;
    }
  });

  const accuracyPercent = Math.round((correctCount / questions.length) * 100);

  return (
    <div className="fixed inset-0 z-[100] bg-[#F4F6FB] flex flex-col overflow-hidden animate-in fade-in duration-200">
      {/* TOP HEADER BAR */}
      <header className="h-16 px-4 sm:px-8 border-b border-indigo-100 bg-white flex items-center justify-between shadow-xs">
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
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
                {drillTitle || subject?.title || "Class 5th Quiz"}
              </span>
              {chapter && (
                <>
                  <span className="text-slate-300">•</span>
                  <span className="text-xs font-semibold text-slate-700">{chapter.title}</span>
                </>
              )}
            </div>
            <div className="text-sm font-bold text-slate-900">
              {session?.title || "Interactive Drill"}
            </div>
          </div>
        </div>

        {/* Live Timer */}
        <div className="hidden sm:flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 font-mono text-sm font-bold shadow-xs">
          <Clock className="w-4 h-4 text-indigo-600" />
          <span>{formatTime(secondsLeft)}</span>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <div className="text-xs font-semibold text-slate-600 hidden sm:block">
            Answered: <strong className="text-slate-900">{Object.keys(userAnswers).length}/{questions.length}</strong>
          </div>
          <button
            onClick={() => setIsFinished(true)}
            className="px-4 py-1.5 rounded-xl border border-indigo-200 bg-indigo-50 hover:bg-indigo-100 text-xs font-bold text-indigo-700 transition-colors"
          >
            Finish Drill
          </button>
          <button onClick={onClose} className="p-1.5 rounded-xl text-slate-400 hover:text-slate-800 hover:bg-slate-100">
            <X className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* MAIN BODY */}
      <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-6 flex flex-col justify-between max-w-3xl mx-auto w-full">
        {isFinished ? (
          /* RESULT SUMMARY SCREEN */
          <div className="my-auto py-8 text-center animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-2xl bg-indigo-100 border border-indigo-200 flex items-center justify-center text-indigo-700 mx-auto mb-4 shadow-sm">
              <Award className="w-8 h-8" />
            </div>

            <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
              Drill Completed
            </span>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 mb-2">
              Great Effort, Junior Scholar!
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mb-6 font-medium">
              Here is your score breakdown for <strong>{drillTitle || chapter?.title || "Interactive Drill"}</strong>.
            </p>

            {/* Scorecard Grid */}
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mb-8">
              <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
                <div className="text-xs text-slate-400 font-bold uppercase">Score</div>
                <div className="text-2xl font-extrabold text-slate-900 mt-1">
                  {correctCount} / {questions.length}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
                <div className="text-xs text-slate-400 font-bold uppercase">Accuracy</div>
                <div className="text-2xl font-extrabold text-indigo-600 mt-1">
                  {accuracyPercent}%
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
                <div className="text-xs text-slate-400 font-bold uppercase">Time Spent</div>
                <div className="text-2xl font-extrabold text-slate-900 mt-1">
                  {formatTime(600 - secondsLeft)}
                </div>
              </div>
            </div>

            {/* Question by question answers review */}
            <div className="text-left max-w-2xl mx-auto space-y-3.5 mb-8">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Detailed Answers & Explanations:
              </h3>
              {questions.map((q, idx) => {
                const qKey = q.id || idx;
                const ans = userAnswers[qKey];
                const correctIdx = q.correct !== undefined ? q.correct : q.correctOptionIndex;
                const isCorrect = ans === correctIdx;
                const answered = ans !== undefined;
                const opts = q.options || [];

                return (
                  <div
                    key={idx}
                    className={`p-4 rounded-2xl border transition-all ${
                      isCorrect
                        ? 'bg-emerald-50/70 border-emerald-200'
                        : answered
                        ? 'bg-rose-50/70 border-rose-200'
                        : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3 mb-1.5">
                      <span className="text-xs font-bold text-slate-800">
                        Q{idx + 1}. {q.question || q.questionText}
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

                    <div className="text-xs text-slate-600 mt-1 font-medium">
                      <span className="font-bold text-slate-700">Correct Answer:</span> {opts[correctIdx]}
                    </div>
                    {q.explanation && (
                      <div className="text-xs text-slate-500 mt-0.5 font-medium">
                        <span className="font-bold text-slate-700">Explanation:</span> {q.explanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Bottom Actions */}
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={() => {
                  setUserAnswers({});
                  setMarkedForReview({});
                  setCurrentQIndex(0);
                  setSecondsLeft(600);
                  setIsFinished(false);
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-xs font-semibold text-slate-700 shadow-xs"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Retake Quiz</span>
              </button>

              <button
                onClick={onClose}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-semibold shadow-md shadow-indigo-600/20 active:scale-95 transition-all"
              >
                <span>Back to Dashboard</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          /* ACTIVE QUESTION VIEW */
          <div className="flex flex-col justify-between flex-1 py-2">
            <div>
              {/* Question Tracker & Tag */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-lg bg-indigo-100 text-indigo-700 font-bold text-xs">
                    Question {currentQIndex + 1} of {questions.length}
                  </span>
                  <span className="text-xs font-semibold text-slate-400">
                    Single Choice
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2 bg-slate-200/80 rounded-full overflow-hidden mb-6">
                <div
                  className="h-full bg-indigo-600 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQIndex + 1) / questions.length) * 100}%` }}
                />
              </div>

              {/* Question Text */}
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-snug mb-6">
                {currentQ.question || currentQ.questionText}
              </h2>

              {/* Options List */}
              <div className="space-y-3 mb-6">
                {(currentQ.options || []).map((option, idx) => {
                  const qKey = currentQ.id || currentQIndex;
                  const isSelected = userAnswers[qKey] === idx;

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      className={`w-full text-left p-4 rounded-2xl border transition-all duration-150 flex items-center justify-between group ${
                        isSelected
                          ? 'bg-indigo-50 border-indigo-600 shadow-sm text-indigo-900 ring-1 ring-indigo-600 font-bold'
                          : 'bg-white hover:bg-slate-50 border-slate-200/90 text-slate-800'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`w-7 h-7 rounded-xl text-xs font-bold flex items-center justify-center transition-colors ${
                          isSelected
                            ? 'bg-indigo-600 text-white'
                            : 'bg-slate-100 group-hover:bg-indigo-100 text-slate-700 group-hover:text-indigo-700'
                        }`}>
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span className="text-xs sm:text-sm font-semibold">
                          {option}
                        </span>
                      </div>

                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'border-indigo-600 bg-indigo-600 text-white'
                          : 'border-slate-300 group-hover:border-indigo-400'
                      }`}>
                        {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Expandable Hint helper */}
              {currentQ.hint && (
                <div className="mt-2">
                  <button
                    onClick={() => setShowHint(!showHint)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-indigo-600 transition-colors"
                  >
                    <HelpCircle className="w-4 h-4" />
                    <span>{showHint ? "Hide Hint" : "Need a Hint?"}</span>
                  </button>
                  {showHint && (
                    <div className="mt-2 p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 animate-in fade-in font-medium">
                      <strong>💡 Hint:</strong> {currentQ.hint}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Bottom Actions Bar */}
            <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
              <button
                disabled={currentQIndex === 0}
                onClick={handlePrev}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                  currentQIndex > 0
                    ? 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200'
                    : 'opacity-40 text-slate-400 cursor-not-allowed border border-transparent'
                }`}
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              <button
                onClick={handleNext}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-bold shadow-md shadow-indigo-600/20 active:scale-95 transition-all"
              >
                <span>{currentQIndex + 1 < questions.length ? "Next Question" : "Submit Drill"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
