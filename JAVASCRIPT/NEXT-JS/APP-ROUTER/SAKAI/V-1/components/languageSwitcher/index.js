import i18n from '@/utils/i18n';

const LanguageSwitcher = () => {
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div>
            <button onClick={() => changeLanguage('en')}>English</button>
            <button onClick={() => changeLanguage('jp')}>日本語</button>
        </div>
    );
};

export default LanguageSwitcher;