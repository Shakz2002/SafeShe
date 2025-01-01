
        // Language data object
        const translations = {
            en: {
                "header-title": "Women's Security",
                "section-title": "What We Do",
                "section-description": "Empowering women with safety tips, emergency resources, and legal rights information."
            },
            si: {
                "header-title": "සැපයුම්කරුගේ ආරක්ෂාව",
                "section-title": "අපි කළේ කුමක්ද",
                "section-description": "සියළුම මහාමනෝ භාණ්ඩ, සංග්‍රහය සහ පනස්වන හා මූලික අයිතිය."
            },
            ta: {
                "header-title": "பெண்கள் பாதுகாப்பு",
                "section-title": "நாம் செய்யும் பணிகள்",
                "section-description": "பெண்களுக்கு பாதுகாப்பு குறிப்புகள், அவசர உதவி ஆதாரங்கள் மற்றும் சட்ட உரிமைகள் பற்றிய தகவல்கள் வழங்குவோம்."
            }
        };

        // Function to change language
        function changeLanguage(lang) {
            for (const key in translations[lang]) {
                const element = document.getElementById(key);
                if (element) {
                    element.textContent = translations[lang][key];
                }
            }
        }

        // Event listener for language change
        document.getElementById("language-selector").addEventListener("change", function(event) {
            changeLanguage(event.target.value);
        });

        // Set default language to English
        changeLanguage("en");
