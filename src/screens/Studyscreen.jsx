import TopBar from "../components/TopBar";
import SubjectCard from "../components/SubjectCard";
import NoteCard from "../components/NoteCard";

export default function StudyScreen({ setSidebarOpen }) {
  return (
    <div className="screen">
      <TopBar
        title="Study"
        setSidebarOpen={setSidebarOpen}
      />

      <div className="study-buttons">
        <button className="study-btn gradient">
          Create Notes
        </button>

        <button className="study-btn">
          Flashcards
        </button>

        <button className="study-btn">
          Quiz
        </button>

        <button className="study-btn">
          Learn
        </button>
      </div>

      <div className="section-title">
        Subjects
      </div>

      <div className="subjects-grid">
        <SubjectCard title="Mathematics" />
        <SubjectCard title="Science" />
        <SubjectCard title="History" />
        <SubjectCard title="Physics" />
      </div>

      <div className="section-title">
        Recent Notes
      </div>

      <NoteCard title="Trigonometry Formulas" />
      <NoteCard title="Chemical Reactions" />
    </div>
  );
}
