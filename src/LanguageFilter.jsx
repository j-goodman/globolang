import "./LanguageFilter.css";
function LanguageFilter({ Languages, selectedLanguage, setSelectedLanguage }) {
  return (
    <div className="language-filter">
      <h1>{selectedLanguage}</h1>
      {Languages.map((language) => (
        <img
          key={`${language}-${selectedLanguage}`}
          src={`path/to/${language}.png`}
          alt={language}
          className={`language-filter__item ${
            selectedLanguage === language
              ? "language-filter__item--selected"
              : ""
          }`}
          onClick={() => setSelectedLanguage(language)}
        />
      ))}
    </div>
  );
}

export default LanguageFilter;
