import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import {
  CertificationFinalize,
  CertificationQc,
  CertificationWork,
  Main,
  TranscriptionConfirm,
  TranscriptionFinalize,
  TranscriptionQc,
  TranscriptionWork,
  TranslationConfirm,
  TranslationFinalize,
  TranslationQc,
  TranslationWork,
  View,
} from './pages'
import Main2 from './pages/main/index2'
import ProtectedRoute from './routes/protected-route'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate to="/glosub" replace />} />
        <Route path="/glosub" element={<Main />} />
        <Route
          path="/glosub/test"
          element={<ProtectedRoute element={<Main />} />}
        />
        <Route
          path="/glosub/test2"
          element={<ProtectedRoute element={<Main2 />} />}
        />
        <Route
          path="/glosub/translation/work/:subtaskId"
          element={<TranslationWork />}
        />
        <Route
          path="/glosub/translation/qc/:subtaskId"
          element={<TranslationQc />}
        />
        <Route
          path="/glosub/translation/confirm/:subtaskId"
          element={<TranslationConfirm />}
        />
        <Route
          path="/glosub/translation/finalize/:subtaskId"
          element={<TranslationFinalize />}
        />
        <Route
          path="/glosub/transcription/work/:subtaskId"
          element={<TranscriptionWork />}
        />
        <Route
          path="/glosub/transcription/qc/:subtaskId"
          element={<TranscriptionQc />}
        />
        <Route
          path="/glosub/transcription/confirm/:subtaskId"
          element={<TranscriptionConfirm />}
        />
        <Route
          path="/glosub/transcription/finalize/:subtaskId"
          element={<TranscriptionFinalize />}
        />
        <Route
          path="/glosub/certification/work/:taskId"
          element={<CertificationWork />}
        />
        <Route
          path="/glosub/certification/qc/:taskId"
          element={<CertificationQc />}
        />
        <Route
          path="/glosub/certification/finalize/:taskId"
          element={<CertificationFinalize />}
        />
        <Route path="/glosub/tasks/:taskId/play" element={<View />} />
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
