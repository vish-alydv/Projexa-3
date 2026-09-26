import React, { useState } from 'react';
import { Clock, ArrowRight } from 'lucide-react';
import supermarketCartImg from '../../assets/supermarket_cart.jpg';
import kitchenScienceImg from '../../assets/kitchen_science.jpg';
import roadSafetyImg from '../../assets/road_safety.jpg';
import FullScreenDrillModal from '../practice/FullScreenDrillModal';

export default function DailyLifeQuizzesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeQuizModal, setActiveQuizModal] = useState(null);

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'math', label: '🛒 Supermarket Math' },
    { id: 'science', label: '🧪 Kitchen Science' },
    { id: 'civics', label: '🚦 Road Safety' },
  ];

  const quizzes = [
    {
      id: 'supermarket',
      title: 'Supermarket Checkout',
      categoryTag: 'Math',
      category: 'math',
      description: 'Calculate small discounts and count the change at the cash counter.',
      duration: '3 mins',
      questionsCount: '5 Qs',
      image: supermarketCartImg,
      questions: [
        {
          id: 1,
          questionText: "Riya buys a notebook for ₹35 and a pen for ₹15. She gives a ₹100 note. How much change does she get?",
          options: ["₹40", "₹50", "₹60", "₹30"],
          correctOptionIndex: 1,
          explanation: "Total cost = 35 + 15 = ₹50. Change = 100 - 50 = ₹50."
        },
        {
          id: 2,
          questionText: "If an apple costs ₹12 each, how much will 5 apples cost?",
          options: ["₹50", "₹55", "₹60", "₹65"],
          correctOptionIndex: 2,
          explanation: "12 × 5 = ₹60."
        },
        {
          id: 3,
          questionText: "A ₹20 chocolate has a ₹5 discount. How much do you pay?",
          options: ["₹15", "₹25", "₹10", "₹18"],
          correctOptionIndex: 0,
          explanation: "20 - 5 = ₹15."
        },
        {
          id: 4,
          questionText: "You need 2 litres of milk. Each pouch is 500ml. How many pouches should you pick?",
          options: ["2 pouches", "3 pouches", "4 pouches", "5 pouches"],
          correctOptionIndex: 2,
          explanation: "2000ml / 500ml = 4 pouches."
        },
        {
          id: 5,
          questionText: "A packet of biscuits weighs 250g. How many packets equal 1 kilogram?",
          options: ["2", "3", "4", "5"],
          correctOptionIndex: 2,
          explanation: "1kg = 1000g. 1000 / 250 = 4."
        }
      ]
    },
    {
      id: 'kitchen',
      title: 'Kitchen Science',
      categoryTag: 'Science',
      category: 'science',
      description: 'Discover why milk boils over, how bread rises, and why ice floats.',
      duration: '3 mins',
      questionsCount: '5 Qs',
      image: kitchenScienceImg,
      questions: [
        {
          id: 1,
          questionText: "Why does ice float on top of water in a glass?",
          options: [
            "Ice is lighter (less dense) than liquid water",
            "Ice is heavier than water",
            "Water pushes ice up with wind",
            "Ice traps air pockets inside"
          ],
          correctOptionIndex: 0,
          explanation: "When water freezes, it expands and becomes less dense than water!"
        },
        {
          id: 2,
          questionText: "Which component makes bread fluffy when yeast is added?",
          options: ["Oxygen gas", "Carbon dioxide gas", "Nitrogen gas", "Steam"],
          correctOptionIndex: 1,
          explanation: "Yeast produces tiny bubbles of carbon dioxide that expand when baked."
        },
        {
          id: 3,
          questionText: "Why does milk foam and spill over when boiled fast?",
          options: [
            "Proteins and fats trap steam inside a layer",
            "Milk has acid that reacts with heat",
            "Water disappears completely",
            "Milk turns into gas immediately"
          ],
          correctOptionIndex: 0,
          explanation: "Milk protein forms a skin on top which traps steam bubbles underneath."
        },
        {
          id: 4,
          questionText: "What state of matter is steam rising from hot tea?",
          options: ["Solid", "Liquid", "Gas", "Plasma"],
          correctOptionIndex: 2,
          explanation: "Water vapor rising from tea is in gaseous state."
        },
        {
          id: 5,
          questionText: "Why do we add salt to ice while making ice cream?",
          options: [
            "Salt lowers the freezing point of ice",
            "Salt makes ice warmer",
            "Salt makes ice melt instantly without cooling",
            "Salt stops ice from dissolving"
          ],
          correctOptionIndex: 0,
          explanation: "Salt lowers the freezing point, making the mixture super cold!"
        }
      ]
    },
    {
      id: 'road-safety',
      title: 'Road Safety',
      categoryTag: 'Civics',
      category: 'civics',
      description: 'Recognize street signs, zebra crossings, and safe bicycle habits.',
      duration: '3 mins',
      questionsCount: '5 Qs',
      image: roadSafetyImg,
      questions: [
        {
          id: 1,
          questionText: "What does a solid RED traffic light signal mean for vehicles?",
          options: ["Get ready to go", "Stop completely", "Drive fast", "Turn left only"],
          correctOptionIndex: 1,
          explanation: "Red light strictly means STOP for all vehicles."
        },
        {
          id: 2,
          questionText: "Where is the safest place for pedestrians to cross a busy road?",
          options: ["Between parked cars", "Zebra crossing or pedestrian bridge", "Near a sharp curve", "Any spot on the highway"],
          correctOptionIndex: 1,
          explanation: "Always use designated Zebra crossings or foot overbridges."
        },
        {
          id: 3,
          questionText: "What safety gear must every cyclist wear while riding?",
          options: ["Helmet", "Sunglasses only", "Raincoat", "Cap"],
          correctOptionIndex: 0,
          explanation: "A proper bicycle helmet protects head from impacts."
        },
        {
          id: 4,
          questionText: "Before crossing the street, what should you do first?",
          options: [
            "Look right, left, and right again",
            "Run across as fast as possible",
            "Close eyes and walk",
            "Use smartphone while walking"
          ],
          correctOptionIndex: 0,
          explanation: "Stop at curb, look right, look left, look right again before crossing."
        },
        {
          id: 5,
          questionText: "What does an octagonal red traffic sign with text 'STOP' indicate?",
          options: ["Mandatory stop", "Speed limit 50", "No parking", "Hospital zone"],
          correctOptionIndex: 0,
          explanation: "The red 8-sided sign mandates vehicles to come to a complete stop."
        }
      ]
    }
  ];

  const filteredQuizzes = selectedCategory === 'all'
    ? quizzes
    : quizzes.filter(q => q.category === selectedCategory);

  return (
    <div className="p-6 sm:p-8 max-w-6xl mx-auto flex flex-col gap-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Interactive Quizzes
        </h1>
        <p className="mt-1 text-xs sm:text-sm text-slate-500 font-medium">
          Everyday real-world scenario quizzes to test your understanding.
        </p>
      </div>

      {/* Quiz Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-1">
        {quizzes.map((quiz) => (
          <div
            key={quiz.id}
            className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between hover:border-indigo-200 hover:shadow-md transition-all"
          >
            <div>
              {/* Card Image */}
              <div className="relative h-40 w-full bg-slate-100 overflow-hidden">
                <img
                  src={quiz.image}
                  alt={quiz.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-md text-slate-800 text-[11px] font-bold border border-slate-200 shadow-sm">
                  {quiz.categoryTag}
                </span>
              </div>

              {/* Body */}
              <div className="p-4">
                <h3 className="text-base font-bold text-slate-900">
                  {quiz.title}
                </h3>
                <p className="mt-1.5 text-xs text-slate-500 font-medium leading-relaxed">
                  {quiz.description}
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 pt-0 flex items-center justify-between gap-2 border-t border-slate-100 mt-3">
              <div className="flex items-center gap-1 text-xs text-slate-400 font-semibold">
                <Clock className="w-3.5 h-3.5" />
                <span>{quiz.duration} • {quiz.questionsCount}</span>
              </div>

              <button
                onClick={() => setActiveQuizModal(quiz)}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-sm active:scale-95 transition-all"
              >
                <span>Start Quiz</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Quiz Drill Modal */}
      {activeQuizModal && (
        <FullScreenDrillModal
          drillTitle={activeQuizModal.title}
          questions={activeQuizModal.questions}
          onClose={() => setActiveQuizModal(null)}
        />
      )}
    </div>
  );
}
