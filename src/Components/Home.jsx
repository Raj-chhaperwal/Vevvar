import React, { useState } from 'react';
import axios from 'axios';
import styles from './Home.module.css';

const languages = [
    { label: "Bengali", value: "bn" },
    { label: "Bodo", value: "br" },
    { label: "Dogri", value: "doi" },
    { label: "English", value: "en" },
    { label: "Gujarati", value: "gu" },
    { label: "Hindi", value: "hi" },
    { label: "Kannada", value: "kn" },
    { label: "Kashmiri", value: "ks" },
    { label: "Konkani", value: "kok" },
    { label: "Maithili", value: "mai" },
    { label: "Malayalam", value: "ml" },
    { label: "Marathi", value: "mr" },
    { label: "Meitei", value: "mni" },
    { label: "Nepali", value: "ne" },
    { label: "Odia", value: "or" },
    { label: "Punjabi", value: "pa" },
    { label: "Sanskrit", value: "sa" },
    { label: "Santali", value: "sat" },
    { label: "Sindhi", value: "sd" },
    { label: "Tamil", value: "ta" },
    { label: "Telugu", value: "te" },
    { label: "Urdu", value: "ur" },
    // Add more languages as needed
];

const Home = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [fileName, setFileName] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [downloadLink, setDownloadLink] = useState('');

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (!file) return;

        setSelectedFile(file);
        setFileName(file.name);
        // Reset states upon new file selection
        setSelectedLanguage('');
        setDownloadLink('');
    };

    const handleLanguageChange = (event) => {
        setSelectedLanguage(event.target.value);
    };

    const handleUploadAndTranslate = async () => {
        if (!selectedFile || !selectedLanguage) return;

        setIsLoading(true); // Show loader

        const formData = new FormData();
        formData.append('file', selectedFile);
        formData.append('language', selectedLanguage); // Assume the backend can handle this

        try {
            const response = await axios.post('http://localhost:5000/translate-pdf', formData, {
                responseType: 'blob',
            });
            const url = window.URL.createObjectURL(new Blob([response.data]));
            setDownloadLink(url);
            console.log('File uploaded and translated:', url); // For debugging

        } catch (error) {
            console.error('Error uploading and translating the file', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <h1 className="heading text-center mt-3 mb-3">PDF to Word Converter</h1>
            <div className={styles.uploadBox}>
                {!isLoading && !downloadLink && (
                    <>
                        <div>
                            <label htmlFor="file" className="button-custom">
                                Choose File
                                <input
                                    type="file"
                                    id="file"
                                    onChange={handleFileChange}
                                    style={{ display: 'none' }}
                                    accept="application/pdf"
                                />
                            </label>
                            {fileName && <div className='mt-3 mb-3'>{fileName}</div>}
                        </div>
                        {selectedFile && (
                            <div className={styles.languageSelectContainer}>
                            <label htmlFor="language" className={styles.languageSelectLabel}>Choose Language:</label>
                            <select id="language" value={selectedLanguage} onChange={handleLanguageChange} className={styles.languageSelect}>
                                <option value="">Select a language...</option>
                                {languages.map((language) => (
                                    <option key={language.value} value={language.value}>
                                        {language.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                        
                        )}
                        {selectedFile && selectedLanguage && (
                            <button onClick={handleUploadAndTranslate} className="button-custom">
                                Translate PDF
                            </button>
                        )}
                    </>
                )}
                {isLoading && <div className="loader"></div>}
                {!isLoading && downloadLink && (
                    <a href={downloadLink} download="translated.pdf" className="button-custom">Download Translated PDF</a>
                )}
            </div>
        </>
    );
};

export default Home;
