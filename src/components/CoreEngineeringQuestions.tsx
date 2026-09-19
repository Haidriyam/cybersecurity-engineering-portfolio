import React from 'react';
import { HelpCircle, CheckCircle, FileText, Code2, AlertTriangle, Cpu, Ruler, BarChart3 } from 'lucide-react';

export interface EngineeringQuestionAnswer {
  questionNumber: number;
  question: string;
  answer: string;
  icon?: 'problem' | 'design' | 'implementation' | 'measurement' | 'results' | 'limitations' | 'docs' | 'source';
}

interface CoreEngineeringQuestionsProps {
  questions: EngineeringQuestionAnswer[];
  title?: string;
}

export const CoreEngineeringQuestions: React.FC<CoreEngineeringQuestionsProps> = ({
  questions,
  title = 'Core Engineering Competence Dossier (Evaluation Matrix)'
}) => {
  const getIcon = (type?: string) => {
    switch (type) {
      case 'problem':
        return <HelpCircle className="w-4 h-4 text-[#C15C3D]" />;
      case 'design':
        return <Cpu className="w-4 h-4 text-[#174A5B]" />;
      case 'implementation':
        return <Code2 className="w-4 h-4 text-[#174A5B]" />;
      case 'measurement':
        return <Ruler className="w-4 h-4 text-[#174A5B]" />;
      case 'results':
        return <BarChart3 className="w-4 h-4 text-[#356859]" />;
      case 'limitations':
        return <AlertTriangle className="w-4 h-4 text-[#C15C3D]" />;
      case 'docs':
        return <FileText className="w-4 h-4 text-[#174A5B]" />;
      case 'source':
        return <CheckCircle className="w-4 h-4 text-[#356859]" />;
      default:
        return <CheckCircle className="w-4 h-4 text-[#174A5B]" />;
    }
  };

  return (
    <section className="border border-[#D9D9D4] bg-[#FFFFFF] p-5 sm:p-6 space-y-4">
      <div className="flex items-center justify-between border-b border-[#EBEBE6] pb-3">
        <div className="space-y-0.5">
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#8A8A85] font-bold block">
            Technical Audit &amp; Rigor
          </span>
          <h3 className="text-sm sm:text-base font-semibold font-mono text-[#111111]">
            {title}
          </h3>
        </div>
        <span className="text-[10px] font-mono bg-[#FAF9F7] border border-[#D9D9D4] px-2 py-1 text-[#666666]">
          8 / 8 Questions Answered
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
        {questions.map((q) => (
          <div
            key={q.questionNumber}
            className="border border-[#EBEBE6] bg-[#FAF9F7] p-3.5 space-y-2 hover:border-[#174A5B] transition-colors"
          >
            <div className="flex items-center space-x-2">
              <span className="font-mono text-[11px] font-bold text-[#174A5B] px-1.5 py-0.5 bg-[#FFFFFF] border border-[#D9D9D4]">
                Q0{q.questionNumber}
              </span>
              <span className="font-mono text-xs font-semibold text-[#111111] flex items-center gap-1.5">
                {getIcon(q.icon)}
                {q.question}
              </span>
            </div>
            <p className="text-xs text-[#333333] font-sans leading-relaxed pl-1 border-l-2 border-[#D9D9D4]">
              {q.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
