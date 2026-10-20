import React, { useState, useEffect, useRef } from 'react';

const SUGGESTIONS = [
  'I need an outfit for a movie premiere',
  'What should I wear for an aperitif?',
  'Suggest me some looks for a weekend outdoor',
  'A formal evening reception in Milan',
  'Casual elegance for a spring afternoon',
];

export default function PromptBar({ onSubmit }) {
  const [query, setQuery] = useState('');
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  // Rotate suggestion placeholders smoothly when not focused
  useEffect(() => {
    if (isFocused || query.length > 0) return;

    const timer = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % SUGGESTIONS.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [isFocused, query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const effectiveQuery = query.trim() || SUGGESTIONS[placeholderIndex];
    if (onSubmit) {
      onSubmit(effectiveQuery);
    }
  };

  return (
    <div className="prompt-bar-wrapper">
      <form className="prompt-bar" onSubmit={handleSubmit} role="search">
        {/* Left Add/Upload Button */}
        <button
          type="button"
          className="prompt-btn-left"
          aria-label="Upload reference image or add filter"
          onClick={() => {
            if (inputRef.current) inputRef.current.focus();
          }}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </button>

        {/* AI Query Input */}
        <input
          ref={inputRef}
          type="text"
          className="prompt-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={SUGGESTIONS[placeholderIndex]}
          aria-label="Ask the Brunello Cucinelli AI boutique"
          spellCheck="false"
          autoComplete="off"
        />

        {/* Right Submit Button */}
        <button
          type="submit"
          className="prompt-btn-right"
          aria-label="Submit prompt to AI boutique"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <line x1="12" y1="19" x2="12" y2="5"></line>
            <polyline points="5 12 12 5 19 12"></polyline>
          </svg>
        </button>
      </form>
    </div>
  );
}
