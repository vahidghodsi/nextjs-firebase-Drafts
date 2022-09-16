import { useState } from 'react';

import styles from '../styles/Home.module.css';
import SurveyContent from '../contents/survey-content';

export default function SurveyPage() {
  // const [user, setUser] = useState({});
  // const [session, setSession] = useState({});

  return (
    // <div className="_fix-layout _H-fit">
    <div className="_main-content">
      <main className="_container">
        <SurveyContent />
      </main>
    </div>
    // </div>
  );
}
