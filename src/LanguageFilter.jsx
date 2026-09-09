import './LanguageFilter.css'

function LanguageFilter({languages, selectedLanguage, setSelectedLanguage}) {
    return (
        <div className="language-filter">
            {languages.map(language =>
                <img
                    src={language["flag-icon"]}
                    alt={language.language}
                    key={language.language}
                    className={
                        selectedLanguage === language.language ?
                        "selected-flag" : ""
                    }
                    onClick={
                        () => {
                            setSelectedLanguage(
                                selectedLanguage === language.language ?
                                null : language.language
                            )
                        }
                    }
                />
            )}
        </div>
    )
}

export default LanguageFilter