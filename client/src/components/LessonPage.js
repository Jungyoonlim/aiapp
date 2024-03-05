import React from 'react';
import { Link } from 'react-router-dom';

function LessonPage() {
  return (
    <div className="lesson-page">
      <h2>Lesson 1: Basics</h2>
      <p>This is where the lesson content will go. For now, let's practice a basic conversation.</p>
      <div className="conversation-exercise">
        <p>User: Hello, how are you?</p>
        <p>AI: I'm good, thank you! How about you?</p>
        {/* Placeholder for interactive content */}
      </div>
      <Link to="/dashboard" className="btn btn-secondary">Back to Dashboard</Link>
    </div>
  );
}

export default LessonPage;
