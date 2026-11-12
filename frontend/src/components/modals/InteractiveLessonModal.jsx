import React, { useState, useEffect } from 'react';
import { 
  X, 
  ArrowLeft, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  XCircle,
  Award,
  RotateCcw,
  HelpCircle,
  Maximize2,
  Minimize2,
  Check,
  Bot
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export default function InteractiveLessonModal({ chapter, subjectTitle, customQuestions, onClose }) {
  const { currentUser, addXP } = useAuth();
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [userAnswers, setUserAnswers] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [aiExplanation, setAiExplanation] = useState(null);
  const [isAiLoading, setIsAiLoading] = useState(false);

  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  const toggleBrowserFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch(() => {});
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().then(() => {
          setIsFullscreen(false);
        }).catch(() => {});
      }
    }
  };

  if (!chapter) return null;

  // Generate dynamic quiz questions based on chapter title and topics
  const generateQuestionsForChapter = (chap, subjectName) => {
    const title = chap?.title?.toLowerCase() || '';
    const topics = chap?.topics || [];

    // Science: Human Body
    if (title.includes('human body') || title.includes('bones') || title.includes('nerves')) {
      return [
        {
          id: 1,
          question: "Which part of the human skeletal system forms a protective cage around the heart and lungs?",
          options: ["Ribcage (12 pairs of ribs)", "Skull (Cranium)", "Spine (Backbone)", "Pelvic Girdle"],
          correctIndex: 0,
          explanation: "The ribcage consists of 12 pairs of curved bones that protect the vital heart and lungs."
        },
        {
          id: 2,
          question: "What type of joint allows maximum 360-degree rotational movement at the shoulder and hip?",
          options: ["Ball and Socket Joint", "Hinge Joint", "Pivot Joint", "Fixed Joint"],
          correctIndex: 0,
          explanation: "Ball and socket joints allow movement in almost all directions, found at shoulder and hip joints."
        },
        {
          id: 3,
          question: "Which major organ acts as the control center of the human nervous system?",
          options: ["Brain", "Heart", "Spinal Cord", "Stomach"],
          correctIndex: 0,
          explanation: "The brain processes sensory inputs and coordinates all physical and cognitive functions."
        },
        {
          id: 4,
          question: "How many total bones are in a fully developed adult human skeleton?",
          options: ["206 bones", "300 bones", "150 bones", "500 bones"],
          correctIndex: 0,
          explanation: "An adult human body has 206 distinct bones supporting structural posture and protecting organs."
        },
        {
          id: 5,
          question: "Which long bundle of nerves inside the backbone transmits signals between the brain and body parts?",
          options: ["Spinal Cord", "Femur", "Tendons", "Cartilage"],
          correctIndex: 0,
          explanation: "The spinal cord runs inside the vertebral column and carries nervous impulses to and from the brain."
        }
      ];
    }

    // Science: Plants
    if (title.includes('plant') || title.includes('reproduction') || title.includes('adaptation')) {
      return [
        {
          id: 1,
          question: "Which part of a flower develops into a seed after successful fertilization?",
          options: ["Ovule", "Petal", "Sepal", "Stem"],
          correctIndex: 0,
          explanation: "The ovule inside the ovary develops into a seed containing the plant embryo."
        },
        {
          id: 2,
          question: "Which of these seeds is light with feathery bristles adapted for wind dispersal?",
          options: ["Dandelion & Cotton", "Coconut", "Mango", "Pea Pod"],
          correctIndex: 0,
          explanation: "Dandelion seeds have light hair-like structures (parachutes) easily carried by wind currents."
        },
        {
          id: 3,
          question: "What is the process called when a seed absorbs moisture and begins sprouting into a young seedling?",
          options: ["Germination", "Photosynthesis", "Transpiration", "Pollination"],
          correctIndex: 0,
          explanation: "Germination is the process where a seed absorbs water, swells, and sprouts into a young plant."
        },
        {
          id: 4,
          question: "Why do desert plants like Cactus modify their leaves into sharp spines?",
          options: ["To prevent water loss through transpiration", "To attract insects", "To capture more sunlight", "To store heavy rainfall"],
          correctIndex: 0,
          explanation: "Spines reduce surface area, preventing water loss in hot, dry desert climates."
        },
        {
          id: 5,
          question: "Which green pigment inside leaf cells absorbs sunlight energy for photosynthesis?",
          options: ["Chlorophyll", "Stomata", "Xylem", "Carotene"],
          correctIndex: 0,
          explanation: "Chlorophyll traps sunlight to convert carbon dioxide and water into essential plant sugars."
        }
      ];
    }

    // Science: Animals Habitats
    if (title.includes('animal') || title.includes('habitat') || title.includes('feeding')) {
      return [
        {
          id: 1,
          question: "Animals that spend the extreme cold winter season in a deep sleep state are undergoing:",
          options: ["Hibernation", "Migration", "Camouflage", "Aestivation"],
          correctIndex: 0,
          explanation: "Hibernation is winter dormancy that allows animals like polar bears to conserve energy."
        },
        {
          id: 2,
          question: "Which breathing organ do fish use to absorb dissolved oxygen directly from water?",
          options: ["Gills", "Lungs", "Spiracles", "Moist skin"],
          correctIndex: 0,
          explanation: "Gills are specialized respiratory organs in fish that absorb oxygen dissolved in water."
        },
        {
          id: 3,
          question: "In a food chain, what role do green plants always play?",
          options: ["Primary Producers", "Primary Consumers", "Decomposers", "Apex Predators"],
          correctIndex: 0,
          explanation: "Green plants produce their own food using sunlight, making them primary producers."
        },
        {
          id: 4,
          question: "Which bird travels thousands of miles from the Arctic to Antarctic in one of nature's longest migrations?",
          options: ["Arctic Tern", "Penguin", "Sparrow", "Ostrich"],
          correctIndex: 0,
          explanation: "The Arctic Tern flies up to 44,000 miles every year during its migratory cycle."
        },
        {
          id: 5,
          question: "How does a chameleon use camouflage in its natural habitat?",
          options: ["Changes skin color to blend into its background", "Flies away rapidly", "Plays dead", "Emits loud sounds"],
          correctIndex: 0,
          explanation: "Chameleons change skin pigmentation to blend in with foliage and escape predators."
        }
      ];
    }

    // Science: Matter, Solids, Liquids, Gases
    if (title.includes('solid') || title.includes('liquid') || title.includes('gas') || title.includes('matter')) {
      return [
        {
          id: 1,
          question: "In which state of matter are molecules packed most tightly in fixed positions?",
          options: ["Solid", "Liquid", "Gas", "Plasma"],
          correctIndex: 0,
          explanation: "In solids, intermolecular forces are strongest, keeping particles in tightly packed fixed arrays."
        },
        {
          id: 2,
          question: "The process of converting a liquid into vapor below its boiling point is known as:",
          options: ["Evaporation", "Condensation", "Sublimation", "Freezing"],
          correctIndex: 0,
          explanation: "Evaporation is the transition of liquid surface molecules into vapor at any temperature."
        },
        {
          id: 3,
          question: "When salt completely dissolves in water, water acts as the:",
          options: ["Solvent", "Solute", "Precipitate", "Suspension"],
          correctIndex: 0,
          explanation: "The liquid that dissolves another substance is called the solvent; salt is the solute."
        },
        {
          id: 4,
          question: "Which method is best suited to separate insoluble sand grains from clear water?",
          options: ["Filtration", "Evaporation", "Condensation", "Distillation"],
          correctIndex: 0,
          explanation: "Filtration through filter paper separates insoluble solid sand from liquid water."
        },
        {
          id: 5,
          question: "Which state of matter has neither a definite shape nor a definite volume?",
          options: ["Gas", "Solid", "Liquid", "Ice"],
          correctIndex: 0,
          explanation: "Gases take both the shape and the volume of the container in which they are placed."
        }
      ];
    }

    // Maths: Large Numbers & Roman Numerals
    if (title.includes('number') || title.includes('roman') || title.includes('operation')) {
      return [
        {
          id: 1,
          question: "Which Roman numeral correctly represents the number 90?",
          options: ["XC", "LXXXX", "CX", "LXL"],
          correctIndex: 0,
          explanation: "100 is C and 10 is X. Subtracting 10 from 100 gives XC (90)."
        },
        {
          id: 2,
          question: "In the number 7,84,315, what is the place value of the digit 8?",
          options: ["80,000 (Eighty Thousand)", "8,000", "800", "8,00,000"],
          correctIndex: 0,
          explanation: "The digit 8 sits in the ten-thousands column, so its value is 8 × 10,000 = 80,000."
        },
        {
          id: 3,
          question: "What is 1 Million equivalent to in the Indian numbering system?",
          options: ["10 Lakhs", "1 Crore", "100 Thousands", "1 Lakh"],
          correctIndex: 0,
          explanation: "1 Million = 1,000,000 which equals exactly 10 Lakhs in the Indian system."
        },
        {
          id: 4,
          question: "What is the successor of 9,99,999?",
          options: ["10,00,000 (Ten Lakh)", "9,99,990", "1,00,00,000", "9,99,998"],
          correctIndex: 0,
          explanation: "Adding 1 to 9,99,999 gives 10,00,000."
        },
        {
          id: 5,
          question: "What is the result when any non-zero number is divided by itself?",
          options: ["1", "0", "The number itself", "Undefined"],
          correctIndex: 0,
          explanation: "Any non-zero quantity divided by itself always yields 1."
        }
      ];
    }

    // Maths: Fractions & Decimals
    if (title.includes('fraction') || title.includes('decimal')) {
      return [
        {
          id: 1,
          question: "Which fraction is equivalent to 3/5 when both numerator and denominator are multiplied by 3?",
          options: ["9/15", "6/10", "3/15", "9/5"],
          correctIndex: 0,
          explanation: "(3 × 3) / (5 × 3) = 9/15."
        },
        {
          id: 2,
          question: "What is 0.75 expressed as a simplified vulgar fraction?",
          options: ["3/4", "1/2", "1/4", "2/5"],
          correctIndex: 0,
          explanation: "75/100 divides both terms by 25 to give 3/4."
        },
        {
          id: 3,
          question: "What is the sum of 2/7 and 3/7?",
          options: ["5/7", "5/14", "6/7", "1/7"],
          correctIndex: 0,
          explanation: "Like fractions retain their denominator: (2 + 3) / 7 = 5/7."
        },
        {
          id: 4,
          question: "Which decimal number is greater: 0.8 or 0.79?",
          options: ["0.8", "0.79", "Both are equal", "Cannot be compared"],
          correctIndex: 0,
          explanation: "0.8 = 0.80 which is clearly greater than 0.79."
        },
        {
          id: 5,
          question: "How many hundredths are there in the decimal number 0.45?",
          options: ["45 hundredths", "4 hundredths", "5 hundredths", "450 hundredths"],
          correctIndex: 0,
          explanation: "0.45 represents 45 parts out of 100, which equals 45 hundredths."
        }
      ];
    }

    // Maths: Factors & Multiples
    if (title.includes('factor') || title.includes('multiple') || title.includes('prime')) {
      return [
        {
          id: 1,
          question: "Which of the following is the only EVEN prime number?",
          options: ["2", "4", "0", "6"],
          correctIndex: 0,
          explanation: "2 is the smallest prime and the only even prime number in mathematics."
        },
        {
          id: 2,
          question: "What is the Highest Common Factor (HCF) of 12 and 18?",
          options: ["6", "3", "36", "12"],
          correctIndex: 0,
          explanation: "Factors of 12 are 1,2,3,4,6,12; factors of 18 are 1,2,3,6,9,18. Common greatest factor is 6."
        },
        {
          id: 3,
          question: "What is the Least Common Multiple (LCM) of 4 and 6?",
          options: ["12", "24", "2", "18"],
          correctIndex: 0,
          explanation: "Multiples of 4: 4, 8, 12... Multiples of 6: 6, 12... The lowest common multiple is 12."
        },
        {
          id: 4,
          question: "A number is divisible by 3 if:",
          options: ["The sum of its digits is divisible by 3", "Its last digit is 3", "It is an odd number", "Its last digit is 0"],
          correctIndex: 0,
          explanation: "The divisibility rule for 3 states that the sum of all digits must be a multiple of 3."
        },
        {
          id: 5,
          question: "How many factors does any prime number have?",
          options: ["Exactly 2 (1 and itself)", "Only 1", "3 or more", "Infinite"],
          correctIndex: 0,
          explanation: "A prime number has exactly two positive factors: 1 and the number itself."
        }
      ];
    }

    // Maths: Geometry, Angles, Perimeter, Area
    if (title.includes('geometry') || title.includes('angle') || title.includes('perimeter') || title.includes('area')) {
      return [
        {
          id: 1,
          question: "An angle measuring exactly 90 degrees is called a/an:",
          options: ["Right Angle", "Acute Angle", "Obtuse Angle", "Straight Angle"],
          correctIndex: 0,
          explanation: "A 90° angle forms an 'L' shape and is classified as a right angle."
        },
        {
          id: 2,
          question: "What is the perimeter of a rectangle having length 15 cm and breadth 10 cm?",
          options: ["50 cm", "150 sq cm", "25 cm", "60 cm"],
          correctIndex: 0,
          explanation: "Perimeter = 2 × (Length + Breadth) = 2 × (15 + 10) = 2 × 25 = 50 cm."
        },
        {
          id: 3,
          question: "What is the area of a square having a side length of 8 cm?",
          options: ["64 sq cm", "32 cm", "16 sq cm", "48 sq cm"],
          correctIndex: 0,
          explanation: "Area of a square = side × side = 8 × 8 = 64 sq cm."
        },
        {
          id: 4,
          question: "An angle measuring less than 90 degrees is known as:",
          options: ["Acute Angle", "Obtuse Angle", "Reflex Angle", "Right Angle"],
          correctIndex: 0,
          explanation: "Any angle between 0° and 90° is called an acute angle."
        },
        {
          id: 5,
          question: "How many straight sides does a regular Pentagon have?",
          options: ["5 sides", "6 sides", "4 sides", "8 sides"],
          correctIndex: 0,
          explanation: "A pentagon is a 5-sided 2D polygon."
        }
      ];
    }

    // English Grammar
    if (subjectName?.toLowerCase().includes('grammar') || title.includes('speech') || title.includes('tense')) {
      return [
        {
          id: 1,
          question: "Identify the abstract noun in: 'Her kindness brought immense joy to the whole family.'",
          options: ["kindness & joy", "family", "brought", "whole"],
          correctIndex: 0,
          explanation: "Abstract nouns represent virtues, qualities or feelings that cannot be touched physically."
        },
        {
          id: 2,
          question: "Choose the correct past continuous verb: 'The children _____ happily in the garden.'",
          options: ["were playing", "was playing", "are playing", "played"],
          correctIndex: 0,
          explanation: "Plural subject 'children' takes 'were' + verb-ing in past continuous."
        },
        {
          id: 3,
          question: "Select the correct preposition: 'The cat jumped _____ the table.'",
          options: ["onto", "in", "at", "between"],
          correctIndex: 0,
          explanation: "'Onto' expresses movement toward and on top of a surface."
        },
        {
          id: 4,
          question: "Which of the following is a collective noun?",
          options: ["Flock", "Bird", "Feather", "Flying"],
          correctIndex: 0,
          explanation: "'Flock' names a group of birds gathered together."
        },
        {
          id: 5,
          question: "What is the superlative degree of the adjective 'GOOD'?",
          options: ["Best", "Better", "Goodest", "Most good"],
          correctIndex: 0,
          explanation: "Degrees of good: Good (positive), Better (comparative), Best (superlative)."
        }
      ];
    }

    // Default high-quality questions for any other syllabus topics
    return topics.slice(0, 5).map((topic, idx) => ({
      id: idx + 1,
      question: `Question ${idx + 1} on ${topic}: Which fundamental principle is most important when studying ${topic}?`,
      options: [
        `Understanding core concepts and applying step-by-step rules carefully`,
        `Guessing options quickly without reviewing definitions`,
        `Skipping fundamental formulas and textbook examples`,
        `Ignoring units, spellings and mathematical reasoning`
      ],
      correctIndex: 0,
      explanation: `Mastering ${topic} requires understanding core definitions and practicing structured problem solving!`
    }));
  };

  const questions = (customQuestions && customQuestions.length > 0) 
    ? customQuestions 
    : generateQuestionsForChapter(chapter, subjectTitle);
  const currentQ = questions[currentQIndex] || questions[0];

  const handleSelectOption = (optIdx) => {
    if (showFeedback) return;
    setSelectedOption(optIdx);
    setShowFeedback(true);
    setAiExplanation(null);
    setUserAnswers((prev) => ({
      ...prev,
      [currentQIndex]: optIdx
    }));
  };

  const askGemini = async () => {
    if (selectedOption === null) return;
    setIsAiLoading(true);
    try {
      const res = await fetch('http://localhost:8000/api/ai/explain', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: currentQ.question,
          user_answer: currentQ.options[selectedOption],
          correct_answer: currentQ.options[currentQ.correctIndex],
          grade: currentUser?.grade || "Class 5th",
          subject: subjectTitle || "Science"
        })
      });
      const data = await res.json();
      setAiExplanation(data);
    } catch (err) {
      setAiExplanation({
        explanation: `${currentQ.options[currentQ.correctIndex]} is correct because it directly matches the fundamental rule for this topic.`,
        fun_fact: "Tip: Connect backend on port 8000 for live Gemini AI responses!"
      });
    } finally {
      setIsAiLoading(false);
    }
  };

  const handleNext = () => {
    setSelectedOption(null);
    setShowFeedback(false);
    setAiExplanation(null);
    if (currentQIndex + 1 < questions.length) {
      setCurrentQIndex(currentQIndex + 1);
    } else {
      setIsCompleted(true);
      // Auto-save quiz attempt to FastAPI and SQLite Database
      let finalScore = 0;
      questions.forEach((q, idx) => {
        if (userAnswers[idx] === q.correctIndex) {
          finalScore += 1;
        }
      });
      const finalAccuracy = Math.round((finalScore / questions.length) * 100);
      
      fetch('http://localhost:8000/api/quiz/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user_id: currentUser?.id || 1,
          user_name: currentUser?.name || "Student",
          grade: currentUser?.grade || "Class 5th",
          subject: subjectTitle || "General",
          chapter: chapter.title,
          score: finalScore,
          total: questions.length,
          accuracy: finalAccuracy
        })
      }).catch(() => {});
      
      if (addXP) {
        addXP(finalScore * 20);
      }
    }
  };

  const handlePrev = () => {
    if (currentQIndex > 0) {
      const prevIdx = currentQIndex - 1;
      setCurrentQIndex(prevIdx);
      setSelectedOption(userAnswers[prevIdx] ?? null);
      setShowFeedback(userAnswers[prevIdx] !== undefined);
      setAiExplanation(null);
    }
  };

  const handleRestart = () => {
    setCurrentQIndex(0);
    setSelectedOption(null);
    setShowFeedback(false);
    setUserAnswers({});
    setAiExplanation(null);
    setIsCompleted(false);
  };

  // Calculate score
  let score = 0;
  questions.forEach((q, idx) => {
    if (userAnswers[idx] === q.correctIndex) {
      score += 1;
    }
  });

  const accuracy = Math.round((score / questions.length) * 100);

  return (
    <div className="fixed inset-0 z-[100] bg-[#F4F6FB] flex flex-col overflow-hidden animate-in fade-in duration-200">
      {/* FULLSCREEN HEADER BAR */}
      <header className="h-16 px-4 sm:px-8 border-b border-indigo-100 bg-white flex items-center justify-between shadow-xs flex-shrink-0">
        <div className="flex items-center gap-3">
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            title="Exit Chapter Quiz"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
                {subjectTitle || "Class 5th"}
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-xs font-semibold text-slate-700 truncate max-w-[200px] sm:max-w-md">
                {chapter.title}
              </span>
            </div>
            <div className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <span>Chapter Quiz</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-indigo-50 text-indigo-700 border border-indigo-100">
                Full Screen
              </span>
            </div>
          </div>
        </div>

        {/* Center: Live Question Counter Badge */}
        {!isCompleted && (
          <div className="hidden md:flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold shadow-xs">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span>Question {currentQIndex + 1} of {questions.length}</span>
          </div>
        )}

        {/* Right Actions */}
        <div className="flex items-center gap-2.5">
          {!isCompleted && (
            <div className="text-xs font-semibold text-slate-600 hidden sm:block mr-2">
              Answered: <strong className="text-slate-900">{Object.keys(userAnswers).length}/{questions.length}</strong>
            </div>
          )}

          {/* Browser Fullscreen toggle button */}
          <button
            onClick={toggleBrowserFullscreen}
            className="p-2 rounded-xl text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 border border-slate-200 transition-colors hidden sm:flex items-center gap-1.5 text-xs font-medium"
            title={isFullscreen ? "Exit Fullscreen" : "Toggle Browser Fullscreen"}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            <span className="text-[11px] font-semibold">{isFullscreen ? "Exit" : "Expand"}</span>
          </button>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* MAIN QUIZ CONTENT - FULL SCREEN CONTAINER */}
      {!isCompleted ? (
        <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-6 sm:py-8 flex flex-col justify-between max-w-3xl mx-auto w-full">
          <div className="space-y-6">
            {/* Top Progress bar */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-600 font-bold">
                <span>Question {currentQIndex + 1} of {questions.length}</span>
                <span className="text-indigo-600 font-extrabold">
                  {Math.round(((currentQIndex + 1) / questions.length) * 100)}% Completed
                </span>
              </div>
              <div className="w-full bg-slate-200/80 h-2.5 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-indigo-600 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQIndex + 1) / questions.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Question Card */}
            <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-xs">
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2 text-xs font-bold text-indigo-600 uppercase tracking-wider">
                  <Sparkles className="w-4 h-4 text-indigo-600" />
                  <span>Question 0{currentQIndex + 1}</span>
                </div>
                <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100">
                  Multiple Choice
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-snug">
                {currentQ.question}
              </h3>
            </div>

            {/* MCQ Options */}
            <div className="space-y-3">
              {currentQ.options.map((opt, oIdx) => {
                const isSelected = selectedOption === oIdx;
                const isCorrect = oIdx === currentQ.correctIndex;

                let optionStyle = "bg-white hover:bg-slate-50 border-slate-200/90 text-slate-800 hover:border-indigo-300 shadow-xs";
                if (showFeedback) {
                  if (isCorrect) {
                    optionStyle = "bg-emerald-50 border-emerald-300 text-emerald-900 font-bold shadow-xs";
                  } else if (isSelected && !isCorrect) {
                    optionStyle = "bg-rose-50 border-rose-300 text-rose-900 font-medium";
                  } else {
                    optionStyle = "bg-white border-slate-200/60 text-slate-400 opacity-60";
                  }
                }

                return (
                  <button
                    key={oIdx}
                    onClick={() => handleSelectOption(oIdx)}
                    disabled={showFeedback}
                    className={`w-full text-left p-4 sm:p-5 rounded-2xl border text-sm sm:text-base font-semibold transition-all flex items-center justify-between ${optionStyle}`}
                  >
                    <div className="flex items-center gap-3.5">
                      <span className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                        showFeedback && isCorrect
                          ? 'bg-emerald-600 text-white'
                          : showFeedback && isSelected && !isCorrect
                          ? 'bg-rose-600 text-white'
                          : 'bg-indigo-50 text-indigo-700 border border-indigo-100'
                      }`}>
                        {String.fromCharCode(65 + oIdx)}
                      </span>
                      <span className="leading-snug">{opt}</span>
                    </div>

                    {showFeedback && isCorrect && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 ml-2" />
                    )}
                    {showFeedback && isSelected && !isCorrect && (
                      <XCircle className="w-5 h-5 text-rose-600 shrink-0 ml-2" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Solution & Explanation Box */}
            {showFeedback && (
              <div className="space-y-3">
                <div className={`p-5 rounded-2xl text-xs sm:text-sm font-medium border animate-in fade-in duration-200 ${
                  selectedOption === currentQ.correctIndex
                    ? 'bg-emerald-50 text-emerald-900 border-emerald-200'
                    : 'bg-amber-50 text-amber-900 border-amber-200'
                }`}>
                  <div className="flex items-center gap-2 font-bold mb-1.5">
                    {selectedOption === currentQ.correctIndex ? (
                      <span className="text-emerald-700 font-extrabold flex items-center gap-1.5 text-sm">
                        <CheckCircle2 className="w-4 h-4" /> Correct Answer!
                      </span>
                    ) : (
                      <span className="text-amber-700 font-extrabold flex items-center gap-1.5 text-sm">
                        <HelpCircle className="w-4 h-4" /> Solution & Explanation:
                      </span>
                    )}
                  </div>
                  <p className="leading-relaxed font-medium">{currentQ.explanation}</p>
                </div>

                {/* Gemini AI Smart Doubt Solver */}
                {!aiExplanation ? (
                  <button
                    onClick={askGemini}
                    disabled={isAiLoading}
                    className="w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 hover:from-indigo-700 hover:to-purple-700 text-white text-xs sm:text-sm font-bold shadow-md shadow-indigo-600/20 transition-all flex items-center justify-center gap-2 active:scale-98"
                  >
                    <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
                    <span>{isAiLoading ? "Gemini AI Tutor is thinking... 🧠" : "✨ Ask Gemini AI: Explain Simply to Me"}</span>
                  </button>
                ) : (
                  <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-50/90 via-purple-50/40 to-white border-2 border-indigo-200 text-slate-800 text-xs sm:text-sm shadow-sm animate-in fade-in duration-300">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2 text-indigo-700 font-extrabold">
                        <Bot className="w-4 h-4 text-indigo-600" />
                        <span>Gemini AI Tutor Explains:</span>
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700 border border-indigo-200">
                        AI Powered
                      </span>
                    </div>
                    <p className="leading-relaxed font-medium text-slate-800 mb-2">
                      {aiExplanation.explanation}
                    </p>
                    {aiExplanation.fun_fact && (
                      <div className="pt-2 border-t border-indigo-100/80 text-[11px] text-indigo-900 font-semibold flex items-center gap-1.5">
                        <span>💡</span>
                        <span>{aiExplanation.fun_fact}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Bottom Navigation Toolbar */}
          <div className="pt-6 mt-8 border-t border-slate-200 flex items-center justify-between">
            <button
              disabled={currentQIndex === 0}
              onClick={handlePrev}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold border transition-colors ${
                currentQIndex > 0
                  ? 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                  : 'opacity-40 text-slate-400 border-transparent cursor-not-allowed'
              }`}
            >
              Previous Question
            </button>

            <button
              onClick={handleNext}
              disabled={!showFeedback}
              className={`inline-flex items-center gap-2 px-6 sm:px-8 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                showFeedback
                  ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-600/20 active:scale-95'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'
              }`}
            >
              <span>{currentQIndex + 1 < questions.length ? "Next Question" : "Finish Quiz"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        /* FULLSCREEN RESULT SCORECARD */
        <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-8 flex flex-col justify-between max-w-3xl mx-auto w-full">
          <div className="my-auto py-6 text-center animate-in zoom-in-95 duration-200">
            <div className="w-20 h-20 rounded-3xl bg-indigo-100 border border-indigo-200 flex items-center justify-center text-indigo-600 mx-auto mb-4 shadow-sm">
              <Award className="w-10 h-10" />
            </div>

            <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-3.5 py-1 rounded-full border border-indigo-200">
              Chapter Quiz Completed
            </span>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 mb-2">
              {accuracy >= 80 ? "🎉 Outstanding Mastery!" : accuracy >= 50 ? "👍 Good Effort!" : "💪 Keep Practicing!"}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mb-8 font-medium">
              You scored <strong className="text-indigo-700 font-bold">{score} out of {questions.length}</strong> ({accuracy}% accuracy) on <strong>{chapter.title}</strong>.
            </p>

            {/* Scorecard Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-lg mx-auto mb-8">
              <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm text-center">
                <div className="text-xs text-slate-400 font-bold uppercase">Score</div>
                <div className="text-2xl font-extrabold text-slate-900 mt-1">
                  {score} / {questions.length}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm text-center">
                <div className="text-xs text-slate-400 font-bold uppercase">Accuracy</div>
                <div className="text-2xl font-extrabold text-indigo-600 mt-1">
                  {accuracy}%
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1 p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm text-center">
                <div className="text-xs text-slate-400 font-bold uppercase">Status</div>
                <div className="text-base font-extrabold text-emerald-600 mt-2">
                  {accuracy >= 60 ? "Passed ✓" : "Review Needed"}
                </div>
              </div>
            </div>

            {/* Question Breakdown List */}
            <div className="text-left max-w-xl mx-auto space-y-3 mb-8">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Answers Summary:
              </h4>
              {questions.map((q, idx) => {
                const userAns = userAnswers[idx];
                const isAnsCorrect = userAns === q.correctIndex;
                return (
                  <div 
                    key={idx}
                    className={`p-3.5 rounded-xl border text-xs flex items-center justify-between ${
                      isAnsCorrect ? 'bg-emerald-50/80 border-emerald-200 text-emerald-900' : 'bg-rose-50/80 border-rose-200 text-rose-900'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 truncate max-w-[85%]">
                      <span className={`w-5 h-5 rounded-md flex items-center justify-center font-bold text-[10px] ${
                        isAnsCorrect ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white'
                      }`}>
                        {idx + 1}
                      </span>
                      <span className="font-semibold truncate">{q.question}</span>
                    </div>
                    <span className="font-bold flex-shrink-0">
                      {isAnsCorrect ? "Correct ✓" : "Incorrect ✗"}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Actions */}
            <div className="flex items-center justify-center gap-3 max-w-sm mx-auto">
              <button
                onClick={handleRestart}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-bold shadow-xs transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Retake Quiz</span>
              </button>
              <button
                onClick={onClose}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-md shadow-indigo-600/20 transition-colors"
              >
                <span>Back to Chapters</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
